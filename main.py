#!/usr/bin/env python3
"""
generate_bowed_midi.py

Gera um arquivo MIDI que simula um efeito de "esfregar/bow" numa nota,
usando pitchwheel (micro-bends) + CC11 expression envelope.

Exemplo:
python generate_bowed_midi.py --note C#4 --duration 3.0 --tempo 90 --bend-range 2 \
  --microbend 0.25 --steps-per-sec 80 --output csharp4_bowed.mid
"""

import argparse
import math
import random
from mido import Message, MidiFile, MidiTrack, MetaMessage, bpm2tempo

# ------------------------------
NOTE_BASE = {'C':0,'D':2,'E':4,'F':5,'G':7,'A':9,'B':11}
def note_name_to_midi(name: str) -> int:
    name = name.strip()
    letter = name[0].upper()
    i = 1
    accidental = 0
    if i < len(name) and name[i] in ('#','b','♯','♭'):
        if name[i] in ('#','♯'): accidental = 1
        else: accidental = -1
        i += 1
    octave = int(name[i:])
    return 12 * (octave + 1) + NOTE_BASE[letter] + accidental
# ------------------------------

def semitones_to_pitchwheel(semitones: float, bend_range_semitones: float) -> int:
    """
    Converte semitons (p.ex. +0.5) em valor pitchwheel -8192..8191,
    assumindo pitch bend range especificado (em semitons).
    """
    if bend_range_semitones == 0:
        return 0
    proportion = semitones / bend_range_semitones
    # clamp proportion
    if proportion > 1.0: proportion = 1.0
    if proportion < -1.0: proportion = -1.0
    val = int(round(proportion * 8191))
    if val > 8191: val = 8191
    if val < -8192: val = -8192
    return val

def seconds_to_ticks(seconds: float, ticks_per_beat: int, tempo_bpm: float) -> int:
    # aproximação: ticks = seconds * ticks_per_beat * (bpm / 60)
    return max(1, int(round(seconds * ticks_per_beat * (tempo_bpm / 60.0))))

def append_rpn_set_bend_range(track: MidiTrack, channel: int, semitones: int, time: int=0):
    """
    Envia a sequência RPN para definir Pitch Bend Range = semitones.
    uses CC 101 (RPN MSB), 100 (RPN LSB), 6 (data entry MSB), 38 (LSB)
    then null RPN.
    All messages will have 'time' in ticks for the first call; subsequent messages time=0.
    """
    # 101, 100 select RPN 0 (pitch bend range)
    track.append(Message('control_change', control=101, value=0, channel=channel, time=time))
    track.append(Message('control_change', control=100, value=0, channel=channel, time=0))
    # data entry
    track.append(Message('control_change', control=6, value=semitones, channel=channel, time=0))
    track.append(Message('control_change', control=38, value=0, channel=channel, time=0))
    # null RPN
    track.append(Message('control_change', control=101, value=127, channel=channel, time=0))
    track.append(Message('control_change', control=100, value=127, channel=channel, time=0))

def generate_bowed_midi(
    note_name: str = "C#4",
    duration: float = 3.0,
    tempo_bpm: float = 90.0,
    bend_range: int = 2,
    microbend_semitones: float = 0.3,
    microbend_rate_hz: float = 6.0,
    microbend_jitter: float = 0.08,
    steps_per_sec: int = 80,
    attack: float = 0.05,
    release: float = 0.25,
    program: int = 24,
    channel: int = 0,
    output_path: str = "bowed_note.mid",
    ticks_per_beat: int = 480,
):
    mid = MidiFile(ticks_per_beat=ticks_per_beat)
    track = MidiTrack()
    mid.tracks.append(track)

    # tempo meta
    track.append(MetaMessage('set_tempo', tempo=bpm2tempo(tempo_bpm), time=0))
    # program change (instrument)
    track.append(Message('program_change', program=program, channel=channel, time=0))

    # set pitch bend range using RPN
    append_rpn_set_bend_range(track, channel=channel, semitones=bend_range, time=0)

    midi_note = note_name_to_midi(note_name)

    # note on
    velocity_on = 100
    track.append(Message('note_on', note=midi_note, velocity=velocity_on, channel=channel, time=0))

    # envelope for expression CC11 (0..127)
    total_steps = max(1, int(round(duration * steps_per_sec)))
    ticks_total = seconds_to_ticks(duration, ticks_per_beat, tempo_bpm)
    ticks_per_step = max(1, ticks_total // total_steps)

    # precalc envelope: simple attack -> sustain -> release
    env = []
    attack_steps = int(round(attack * steps_per_sec))
    release_steps = int(round(release * steps_per_sec))
    sustain_steps = max(0, total_steps - attack_steps - release_steps)
    # attack ramp 0 -> 1
    for i in range(attack_steps):
        env.append((i+1)/max(1,attack_steps))
    # sustain
    for _ in range(sustain_steps):
        env.append(1.0)
    # release ramp 1 -> 0
    for i in range(release_steps):
        env.append(1.0 - ((i+1)/max(1,release_steps)))
    # pad if mismatch
    while len(env) < total_steps:
        env.append(0.0)
    while len(env) > total_steps:
        env.pop()

    # generate microbend pattern: base sine LFO + jitter noise to simulate irregular friction
    for step in range(total_steps):
        t = step / steps_per_sec  # seconds
        # sine LFO for slow vibrato-like microbend
        lfo = math.sin(2 * math.pi * microbend_rate_hz * t)
        # jitter noise
        jitter = (random.random() * 2 - 1) * microbend_jitter
        semitone_offset = (lfo * microbend_semitones) + jitter
        wheel = semitones_to_pitchwheel(semitone_offset, bend_range)
        # expression value from envelope scaled to CC range (we use CC11 Expression)
        expr_val = int(round(env[step] * 110))  # leave some headroom (0..110)
        # append CC11 and pitchwheel; put CC first with time=0 so both occur same tick
        track.append(Message('control_change', control=11, value=expr_val, channel=channel, time=0))
        track.append(Message('pitchwheel', pitch=wheel, channel=channel, time=ticks_per_step))

    # reset pitchwheel and expression gently
    track.append(Message('pitchwheel', pitch=0, channel=channel, time=0))
    track.append(Message('control_change', control=11, value=0, channel=channel, time=0))

    # note off (give a small tail -> time = some ticks)
    tail_ticks = seconds_to_ticks(0.05, ticks_per_beat, tempo_bpm)
    track.append(Message('note_off', note=midi_note, velocity=64, channel=channel, time=tail_ticks))

    # save file
    mid.save(output_path)
    return output_path

# ------------------------------
def main():
    parser = argparse.ArgumentParser(description="Gerar MIDI com efeito de 'esfregar' (bow) em 1 nota.")
    parser.add_argument("--note", default="C#4", help="Nota (ex: C#4, F4, A3).")
    parser.add_argument("--duration", type=float, default=3.0, help="Duração em segundos.")
    parser.add_argument("--tempo", type=float, default=90.0, help="BPM (apenas para ticks->seconds).")
    parser.add_argument("--bend-range", type=int, default=2, help="Pitch bend range em semitons.")
    parser.add_argument("--microbend", type=float, default=0.3, help="Amplitude microbend em semitons (ex: 0.3).")
    parser.add_argument("--microbend-rate", type=float, default=6.0, help="Frequência LFO de microbend (Hz).")
    parser.add_argument("--microbend-jitter", type=float, default=0.08, help="Jitter adicional em semitons.")
    parser.add_argument("--steps-per-sec", type=int, default=80, help="Resolução (passos/sec) para mensagens pitchwheel/CC.")
    parser.add_argument("--attack", type=float, default=0.05, help="Attack (s) para envelope de expression.")
    parser.add_argument("--release", type=float, default=0.25, help="Release (s) para envelope de expression.")
    parser.add_argument("--program", type=int, default=24, help="Programa GM (default 24 = nylon guitar).")
    parser.add_argument("--channel", type=int, default=0, help="Canal MIDI (0-15).")
    parser.add_argument("--output", default="bowed_note.mid", help="Caminho do arquivo MIDI de saída.")
    args = parser.parse_args()

    out = generate_bowed_midi(
        note_name=args.note,
        duration=args.duration,
        tempo_bpm=args.tempo,
        bend_range=args.bend_range,
        microbend_semitones=args.microbend,
        microbend_rate_hz=args.microbend_rate,
        microbend_jitter=args.microbend_jitter,
        steps_per_sec=args.steps_per_sec,
        attack=args.attack,
        release=args.release,
        program=args.program,
        channel=args.channel,
        output_path=args.output,
    )
    print(f"MIDI gerado: {out}")

if __name__ == "__main__":
    main()
