<template>
  <div class="p-6 min-h-screen">
    <main class="max-w-6xl mx-auto">
      <div class="bg-red-500 text-white p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6 transform rotate-1">
        <div class="flex justify-between items-center">
          <h1 class="text-4xl font-black text-white">
            SOFTSKILLS GUIDE
          </h1>
        </div>
        <!-- <p class="mt-2 text-lg font-bold">Desenvolva as habilidades que realmente importam no mercado!</p> -->
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="bg-green-400 p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          <h2 class="text-xl font-black uppercase mb-4 border-b-2 border-black pb-2">
            HABILIDADES ESSENCIAIS
          </h2>
          <div class="space-y-3">
            <button
              v-for="(skill, index) in skills"
              :key="skill.id"
              @click="selectedSkillIndex = index"
              :class="[
                'w-full p-4 border-2 border-black font-bold text-left transition-all duration-200',
                'transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
                index === selectedSkillIndex 
                  ? 'bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                  : 'bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
              ]"
            >
              <div class="flex justify-between items-center">
                <span class="text-sm uppercase">{{ skill.title }}</span>
                <span v-if="index === selectedSkillIndex" class="text-red-500 text-xl">▶</span>
              </div>
            </button>
          </div>
        </div>

        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <h2 class="text-3xl font-black uppercase mb-4 border-b-4 border-black pb-2 text-red-500">
              {{ selectedSkill.title }}
            </h2>
            
            <div class="space-y-6">
              <div class="bg-blue-100 p-4 border-2 border-black">
                <h3 class="font-black text-lg mb-2 text-blue-800">O QUE É?</h3>
                <p class="font-bold text-gray-800">{{ selectedSkill.detailedInfo.definition }}</p>
              </div>

              <!-- <div class="bg-yellow-100 p-4 border-2 border-black">
                <h3 class="font-black text-lg mb-2 text-yellow-800">POR QUE É IMPORTANTE?</h3>
                <p class="font-bold text-gray-800">{{ selectedSkill.detailedInfo.importance }}</p>
              </div>

              <div class="bg-green-100 p-4 border-2 border-black">
                <h3 class="font-black text-lg mb-2 text-green-800">PONTOS-CHAVE</h3>
                <ul class="space-y-2">
                  <li v-for="(point, index) in selectedSkill.detailedInfo.keyPoints" :key="index" class="flex items-start">
                    <span class="text-green-600 font-black mr-2">•</span>
                    <span class="font-bold text-gray-800">{{ point }}</span>
                  </li>
                </ul>
              </div> -->

              <div class="bg-purple-100 p-4 border-2 border-black">
                <h3 class="font-black text-lg mb-2 text-purple-800">EXEMPLOS PRÁTICOS</h3>
                <div class="space-y-2">
                  <div v-for="(example, index) in selectedSkill.detailedInfo.examples" :key="index" class="bg-white p-2 border border-black">
                    <p class="font-bold text-sm text-gray-800">{{ example }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 bg-orange-500 text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
        <h3 class="text-2xl font-black uppercase mb-2">MOTIVAÇÃO DO DIA</h3>
        <p class="text-xl font-bold">"{{ currentQuote }}"</p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface DetailedInfo {
  definition: string
  importance: string
  keyPoints: string[]
  examples: string[]
}

interface Skill {
  id: number
  title: string
  description: string
  detailedInfo: DetailedInfo
}

export default defineComponent({
  name: 'SoftSkillsInfo',
  data() {
    return {
      selectedSkillIndex: 0 as number,
      skills: [
  {
    id: 1,
    title: 'COMUNICAÇÃO CLARA E REFLEXIVA',
    description: 'Expressar ideias e necessidades de forma ponderada, escolhendo bem as palavras e valorizando a escuta antes de falar.',
    detailedInfo: {
      definition: 'Comunicação reflexiva prioriza a clareza e a objetividade, sem necessidade de ser expansivo ou dominante.',
      importance: 'Permite que mensagens sejam compreendidas sem ruído, demonstrando credibilidade e autenticidade.',
      keyPoints: [
        'Organize suas ideias antes de se expressar',
        'Prefira qualidade à quantidade de palavras',
        'Use exemplos práticos e objetivos',
        'Demonstre respeito pelo tempo do outro'
      ],
      examples: [
        'Em vez de falar imediatamente, fazer uma pausa curta para formular a resposta.',
        'Resumir uma ideia complexa em uma frase objetiva.'
      ]
    }
  },
  {
    id: 2,
    title: 'ESCUTA PROFUNDA',
    description: 'Capacidade de ouvir com atenção genuína, percebendo detalhes, emoções e significados ocultos.',
    detailedInfo: {
      definition: 'Mais do que ouvir, é absorver o que é dito e refletir antes de responder.',
      importance: 'A escuta profunda é rara e valiosa, pois transmite empatia e fortalece vínculos.',
      keyPoints: [
        'Evite interromper enquanto o outro fala',
        'Faça anotações mentais ou escritas',
        'Pergunte para confirmar entendimento',
        'Valorize os silêncios como parte da comunicação'
      ],
      examples: [
        '"Então, o que você quis dizer foi que..."',
        '"Notei que isso parece importante para você."'
      ]
    }
  },
  {
    id: 3,
    title: 'COLABORAÇÃO SILENCIOSA',
    description: 'Contribuir em equipe de maneira discreta, confiável e orientada a resultados.',
    detailedInfo: {
      definition: 'A colaboração silenciosa valoriza execução sólida e apoio nos bastidores, sem necessidade de destaque pessoal.',
      importance: 'Equipes bem-sucedidas precisam tanto de líderes visíveis quanto de membros que garantem consistência e foco.',
      keyPoints: [
        'Compartilhe ideias bem estruturadas, mesmo que menos frequentes',
        'Prefira comunicação escrita clara quando possível',
        'Demonstre confiabilidade em prazos e qualidade',
        'Apoie colegas de forma prática e discreta'
      ],
      examples: [
        'Enviar um resumo escrito com sugestões bem pensadas.',
        'Auxiliar um colega em silêncio, sem buscar reconhecimento.'
      ]
    }
  },
  {
    id: 4,
    title: 'LIDERANÇA DISCRETA',
    description: 'Guiar pelo exemplo e pelo conhecimento, sem necessidade de estar sempre em evidência.',
    detailedInfo: {
      definition: 'É inspirar pela consistência, integridade e preparo, em vez de autoridade direta.',
      importance: 'Líderes discretos criam ambientes de confiança e segurança psicológica.',
      keyPoints: [
        'Mostre competência antes de exigir',
        'Valorize a autonomia da equipe',
        'Use feedback individual em vez de público',
        'Seja constante mais do que carismático'
      ],
      examples: [
        'Dar feedback escrito construtivo e detalhado.',
        'Delegar com clareza e confiança, sem microgerenciar.'
      ]
    }
  },
  {
    id: 5,
    title: 'RESOLUÇÃO PACÍFICA DE CONFLITOS',
    description: 'Medir tensões com calma e racionalidade, focando em equilíbrio e respeito.',
    detailedInfo: {
      definition: 'Transformar desacordos em entendimentos, priorizando harmonia e clareza.',
      importance: 'A postura tranquila ajuda a reduzir desgaste emocional e encontrar soluções sustentáveis.',
      keyPoints: [
        'Ouça ambos os lados antes de opinar',
        'Mantenha tom de voz sereno',
        'Sugira alternativas racionais e simples',
        'Prefira acordos claros e documentados'
      ],
      examples: [
        '"Entendi os dois pontos, podemos buscar um meio-termo?"',
        'Transformar uma crítica em sugestão construtiva por escrito.'
      ]
    }
  }
] as Skill[],

motivationalQuotes: [
  'INTROSPECÇÃO TAMBÉM É FORÇA!',
  'OUVIR COM PROFUNDIDADE É UM SUPERPODER!',
  'LIDERAR PELO EXEMPLO, SEM PRECISAR DE PALCO!',
  'A TRANQUILIDADE GERA CONFIANÇA!',
  'MENOS PALAVRAS, MAIS IMPACTO!'
] as string[]

    }
  },
  computed: {
    selectedSkill(): Skill {
      return this.skills[this.selectedSkillIndex]
    },
    currentQuote(): string {
      return this.motivationalQuotes[this.selectedSkillIndex % this.motivationalQuotes.length]
    }
  }
})
</script>


<style scoped>
.transform {
  transition: transform 0.2s ease-in-out;
}

button:hover:not(:disabled) {
  transform: translate(2px, 2px);
}

.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>