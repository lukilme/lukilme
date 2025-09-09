<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"

import About from "./components/About.vue"
import NavBar from "./components/Navbar.vue"
import Project from "./components/Project.vue"
import Contact from "./components/Contact.vue"
import Skills from "./components/Skills.vue"
import Techstack from "./components/Techstack.vue"

function chaosMode() {
  const cards = document.querySelectorAll<HTMLDivElement>(".grid > div")
  const colors = ["bg-pink-500", "bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-orange-500", "bg-red-600"]
  const textColors = ["text-white", "text-black"]

  cards.forEach(card => {
    colors.forEach(c => card.classList.remove(c))
    textColors.forEach(c => card.classList.remove(c))


    const randomBg = colors[Math.floor(Math.random() * colors.length)]
    const randomText = randomBg === "bg-yell-500ow" ? "text-black" : "text-white"

    card.classList.add(randomBg, randomText)


    const randomRotate = Math.random() * 20 - 10
    const randomScale = 0.95 + Math.random() * 0.1
    card.style.transform = `rotate(${randomRotate}deg) scale(${randomScale})`
  })

  setTimeout(() => {
    cards.forEach(card => {
      card.style.transform = ""
    })
  }, 3000)
}

function createChaosElements() {
  console.log("worinks")
  const chaosTexts = ["CODE", "BUILD", "SHIP", "DEBUG", "TEST", "DEPLOY", "SCALE", "OPTIMIZE"]

  const interval = setInterval(() => {
    const chaosEl = document.createElement("div")
    chaosEl.className = "chaos-text fixed text-xs md:text-sm font-bold opacity-10 pointer-events-none"
    chaosEl.textContent = chaosTexts[Math.floor(Math.random() * chaosTexts.length)]
    chaosEl.style.top = Math.random() * 100 + "%"
    chaosEl.style.left = "-100px"
    document.body.appendChild(chaosEl)

    setTimeout(() => {
      chaosEl.remove()
    }, 10000)
  }, 2000)

  return interval
}

onMounted(() => {
  const intervalId = createChaosElements()

  // chaosMode()
// chaosMode()


  onUnmounted(() => {
    clearInterval(intervalId)

  })
})

</script>

<template>
  <div class="w-full font-mono bg-white text-black overflow-x-hidden py-15">
    <div class="fixed inset-0 pointer-events-none z-0">
      <div
        class="absolute w-16 h-16 bg-pink-500 border-4 border-black top-[10%] left-[10%] float-1"
      ></div>
      <div
        class="absolute w-20 h-20 bg-yellow-500 border-4 border-black rounded-full top-[70%] right-[15%] float-2"
      ></div>
      <div
        class="absolute w-10 h-24 bg-purple-500 border-4 border-black top-[40%] right-[5%] float-3"
      ></div>
      <div
        class="absolute w-24 h-10 bg-blue-500 border-4 border-black bottom-[20%] left-[5%] float-4"
      ></div>
    </div>

    <div
      class="chaos-text fixed top-[20%] left-0 text-sm font-bold opacity-10 pointer-events-none"
    >
      CODE
    </div>
    <div
      class="chaos-text fixed top-[60%] left-0 text-sm font-bold opacity-10 pointer-events-none"
      style="animation-delay: -3s"
    >
      DEVELOP
    </div>
    <div
      class="chaos-text fixed top-[80%] left-0 text-sm font-bold opacity-10 pointer-events-none"
      style="animation-delay: -6s"
    >
      BUILD
    </div>

    <div class="mx-auto my-15 py-20 z-50">
      <NavBar />
      <main>
        <section id="sobre" class="mt-10">
          <About />
        </section>
        <section id="projetos">
          <Project />
        </section>
        <section id="techstack">
          <button @click="chaosMode"><b><u>Change!!!</u></b></button>
          <Techstack />
        </section>
        
        <section id="skills">
          
          <Skills />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </main>
    </div>

  </div>
 
</template>

<style>
html {
  scroll-behavior: smooth;
}

section {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
}

#homeview {
  margin: auto;
}

@keyframes chaos {
  0% {
    transform: translateX(-100px) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    transform: translateX(calc(100vw + 100px)) rotate(360deg);
    opacity: 0;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, -10px) rotate(5deg);
  }
  50% {
    transform: translate(-5px, -20px) rotate(-5deg);
  }
  75% {
    transform: translate(-10px, -5px) rotate(5deg);
  }
}

.glitch {
  animation: glitch 2s infinite;
}
.float-1 {
  animation: float 6s ease-in-out infinite;
}
.float-2 {
  animation: float 4s ease-in-out infinite reverse;
}
.float-3 {
  animation: float 8s ease-in-out infinite;
}
.float-4 {
  animation: float 5s ease-in-out infinite reverse;
}
.chaos-text {
  animation: chaos 10s linear infinite;
}
.font-mono {
  font-family: "JetBrains Mono", monospace;
}
</style>