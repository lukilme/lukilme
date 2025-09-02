<template>
  <div class="max-w-3xl mx-auto my-20 p-8 font-sans">
    <h1 class="text-4xl font-bold mb-8 text-black border-b-4 border-black pb-2">
      {{ title }}
    </h1>

    <div
      v-for="(item, index) in items"
      :key="index"
      class="mb-4 border-4 border-black shadow-[8px_8px_0_0_rgba(12,15,10,1)] transition-colors"
      :class="{
        'bg-pink-400': activeIndex === index,
        'bg-yellow-400 hover:bg-pink-300': activeIndex !== index
      }"
    >
      <!-- Header clicável -->
      <div
        class="w-full flex justify-between items-center p-6 cursor-pointer"
        @click="toggleAccordion(index)"
      >
        <span class="text-2xl font-bold text-black">{{ item.title }}</span>
        <span
          class="text-3xl text-black font-mono transition-transform duration-300"
          :class="{ 'rotate-45': activeIndex === index }"
        >
          +
        </span>
      </div>

      <!-- Conteúdo -->
      <div
        class="overflow-hidden transition-all duration-300 ease-in-out bg-white"
        :class="{
          'max-h-96 opacity-100': activeIndex === index,
          'max-h-0 opacity-0': activeIndex !== index
        }"
      >
        <div class="p-6 text-lg text-black">
          <div v-if="item.type === 'text'">{{ item.content }}</div>

          <ul v-else-if="item.type === 'list'" class="list-disc pl-6 space-y-2">
            <li v-for="(listItem, i) in item.content" :key="i">
              {{ listItem }}
            </li>
          </ul>

          <div v-else v-html="item.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",

  props: {
    title: {
      type: String,
      default: "Sobre",
    },
    items: {
      type: Array,
      default: () => [
        {
          title: "Informações pessoais",
          type: "text",
          content:
            "Elias Vance, 28 anos, é uma mente analítica com um lado criativo...",
        },
        {
          title: "Informações profissionais",
          type: "text",
          content:
            "Como Desenvolvedor Full-Stack Sênior, Elias é um arquiteto de soluções...",
        },
        {
          title: "Visão do futuro e perspectivas",
          type: "list",
          content: [
            "Tecnologia com propósito...",
            "Foco em IA aplicada...",
            "Impacto social...",
            "Legado sustentável...",
          ],
        },
      ],
    },
  },

  data() {
    return {
      activeIndex: null,
    };
  },

  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.rotate-45 {
  transform: rotate(45deg);
}
</style>
