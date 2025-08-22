<template>
   <div class=" my-20 min-h-screen p-8 font-sans">
      <div class="max-w-3xl mt-20 mx-auto">
         <h1 class="text-4xl font-bold mb-8 text-black border-b-4 border-black pb-2 ">
            About
         </h1>
         <div 
            v-for="(item, index) in accordionItems" 
            :key="index"
            class="mb-4 border-4 border-black shadow-[8px_8px_0_0_rgba(12,15,10,1)]"
            >
            <button
               class="accordion-toggle w-full p-6 text-left bg-yellow-400 hover:bg-pink-400 transition-colors duration-200 flex justify-between items-center"
               :aria-expanded="activeIndex === index"
               @click="toggleAccordion(index)"
               >
            <span class="text-2xl font-bold text-black">{{ item.title }}</span>
            <span 
               class="text-3xl text-black font-mono transition-transform duration-300"
               :class="{ 'rotate-45': activeIndex === index }"
               >
            +
            </span>
            </button>
            <div 
               class="accordion-content bg-white border-black overflow-hidden transition-all duration-300 ease-in-out"
               :class="{ 'max-h-96 opacity-100': activeIndex === index, 'max-h-0 opacity-0': activeIndex !== index }"
               >
               <div class="p-6">
                  <div v-if="item.type === 'text'" class="text-lg text-black">
                     {{ item.content }}
                  </div>
                  <ul v-else-if="item.type === 'list'" class="list-disc pl-6 text-lg text-black space-y-2">
                     <li v-for="(listItem, listIndex) in item.content" :key="listIndex">
                        {{ listItem }}
                     </li>
                  </ul>
                  <div v-else v-html="item.content" class="text-lg text-black"></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script >
   export default {
    
     name: 'About',
     
     props: {
       title: {
         type: String,
         default: 'Sobre'
       },
       items: {
         type: Array,
         default: () => []
       }
     },
     
     data() {
       return {
         activeIndex: null
       }
     },
     
     computed: {
       pageTitle() {
         return this.title || 'Sobre'
       },
       
       accordionItems() {
         return this.items.length > 0 ? this.items : this.defaultItems
       }
     },
     
     methods: {
       toggleAccordion(index) {
         this.activeIndex = this.activeIndex === index ? null : index
       },
       
       openAccordion(index) {
         this.activeIndex = index
       },
       
       closeAccordion() {
         this.activeIndex = null
       },
       
       closeAllAccordions() {
         this.activeIndex = null
       }
     },
     
     mounted() {
   
       this.$emit('accordion-ready', {
         open: this.openAccordion,
         close: this.closeAccordion,
         closeAll: this.closeAllAccordions
       })
     },
     
     watch: {
       activeIndex(newIndex, oldIndex) {
         this.$emit('accordion-changed', {
           activeIndex: newIndex,
           previousIndex: oldIndex
         })
       }
     },
     
     setup() {
       const defaultItems = [
         {
           title: 'Informacoes pessoais',
           type: 'text',
           content: 'Elias Vance, 28 anos, é uma mente analítica com um lado criativo. Introvertido por natureza, ganha vida quando discute tecnologia ou seus hobbies: café de especialidade, jogos indie e ficção científica. É um observador nato, paciente e metódico, tanto para debuggar código quanto para montar quebra-cabeças complexos. Valoriza noites tranquilas com amigos próximos acima de agitações.'
         },
         {
           title: 'Informacoes profissionais',
           type: 'text',
           content: 'Como Desenvolvedor Full-Stack Sênior, Elias é um arquiteto de soluções digitais. Domina React, Node.js e Python, focando em criar sistemas limpos, eficientes e escaláveis. Vai além de escrever código: antecipa problemas, questiona requisitos e é um solucionador de problemas proativo. Colabora bem com designers e age como mentor natural para devs juniores, acreditando que um bom código é aquele que toda a equipe entende.'
         },
         {
           title: 'Visão do futuro e pespectivas',
           type: 'list',
           content: [
                'Tecnologia com Propósito: Acredita que o desenvolvimento de software deve resolver problemas reais, tornando sistemas mais eficientes e acessíveis para as pessoas.',
    'Foco em IA Aplicada: Busca especializar-se em machine learning não como um fim, mas como uma ferramenta prática para automatizar tarefas repetitivas e extrair insights valiosos de dados.',
   
    'Impacto Social: Aspira liderar ou contribuir significativamente para projetos de "tech for good", direcionando seus skills para áreas como educação digital e sustentabilidade.',
   
    'Legado Sustentável: Almeja criar soluções tecnológicas que sejam não apenas inovadoras, mas também éticas, escaláveis e que gerem um impacto positivo de longo prazo.',
           ]
         }
       ]
       
       return {
         defaultItems
       }
     }
   }
   
</script>
<style scoped>
   .accordion-content {
   transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
   }
   .rotate-45 {
   transform: rotate(45deg);
   }
   :deep(.accordion-toggle) {
   --bg-color: theme('colors.yellow.400');
   --hover-bg-color: theme('colors.pink.400');
   --text-color: theme('colors.black');
   --border-color: theme('colors.black');
   }
   .accordion-brutal-shadow {
   box-shadow: 8px 8px 0 0 rgba(12, 15, 10, 1);
   }
   .accordion-hover-effect:hover {
   transform: translate(-2px, -2px);
   box-shadow: 10px 10px 0 0 rgba(12, 15, 10, 1);
   }
</style>
