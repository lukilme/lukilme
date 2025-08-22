<template>
    <div class="flex items-center justify-center my-20 px-4">
        <div class="w-full max-w-6xl relative">
            <div class="h-[500px] border-8 border-black shadow-[16px_16px_0_#000] relative overflow-hidden transform hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0_#000] transition-all duration-200">
                <div class="flex transition-transform duration-500 ease-out h-full" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                    <div class="slide min-w-full flex flex-col items-center justify-center p-8 bg-purple-400 border-r-8 border-black relative">
                        
                    </div>

                    <div class="slide min-w-full flex flex-col items-center justify-center p-8 bg-pink-400 border-r-8 border-black relative">
                        
                    </div>

                    <div class="slide min-w-full flex flex-col items-center justify-center p-8 bg-cyan-400 border-r-8 border-black relative">
                       
                    </div>
                </div>

                <button
                    @click="prevSlide"
                    class="absolute top-1/2 -translate-y-1/2 left-6 px-4 py-2 border-6 border-black bg-white text-black shadow-[8px_8px_0_#000] font-black text-3xl hover:bg-pink-300 hover:shadow-[4px_4px_0_#000] hover:translate-x-1 transition-all duration-150 transform"
                >
                    ←
                </button>

                <button
                    @click="nextSlide"
                    class="absolute top-1/2 -translate-y-1/2 right-6 px-4 py-2 border-6 border-black bg-white text-black shadow-[8px_8px_0_#000] font-black text-3xl hover:bg-yellow-300 hover:shadow-[4px_4px_0_#000] hover:translate-x-1 transition-all duration-150 transform"
                >
                    →
                </button>
            </div>

            <div class="flex justify-center mt-8 space-x-4">
                <button
                    v-for="(, index) in totalSlides"
                    :key="index"
                    @click="goToSlide(index)"
                    :class="[
            'w-6 h-6 border-4 border-black font-black text-sm transition-all duration-200',
            currentSlide === index 
              ? 'bg-black text-white shadow-[4px_4px_0_#666]' 
              : 'bg-white text-black shadow-[4px_4px_0_#000] hover:bg-pink-300'
          ]"
                >
                    {{ index + 1 }}
                </button>
            </div>

            <div class="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 border-4 border-black transform rotate-45"></div>
            <div class="absolute -top-2 -right-6 w-4 h-12 bg-pink-400 border-4 border-black"></div>
            <div class="absolute -bottom-6 -left-2 w-12 h-4 bg-blue-400 border-4 border-black"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

    export default defineComponent({
      name: 'NeobrutalistCarousel',
      setup() {
        const currentSlide = ref(0)
        const totalSlides = 3
        let autoplayInterval: NodeJS.Timeout | null = null

        const nextSlide = () => {
          currentSlide.value = (currentSlide.value + 1) % totalSlides
        }

        const prevSlide = () => {
          currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
        }

        const goToSlide = (index: number) => {
          currentSlide.value = index
        }

        const startAutoplay = () => {
          autoplayInterval = setInterval(() => {
            nextSlide()
          }, 5000) 
        }

        const stopAutoplay = () => {
          if (autoplayInterval) {
            clearInterval(autoplayInterval)
            autoplayInterval = null
          }
        }

        onMounted(() => {
          startAutoplay()
        })

        onUnmounted(() => {
          stopAutoplay()
        })

        return {
          currentSlide,
          totalSlides,
          nextSlide,
          prevSlide,
          goToSlide,
          startAutoplay,
          stopAutoplay
        }
      }
    })
</script>

<style scoped>
    .slide h2 {
        font-family: "Impact", "Arial Black", sans-serif;
        text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
        letter-spacing: -2px;
    }

    .slide p {
        font-family: "Arial Black", sans-serif;
        text-transform: uppercase;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .slide > * {
        animation: slideIn 0.6s ease-out;
    }

    .slide:hover h2 {
        transform: scale(1.05) rotate(-2deg);
        transition: transform 0.3s ease;
    }

    .slide:hover p {
        transform: scale(1.02) rotate(2deg);
        transition: transform 0.3s ease;
    }

    @media (max-width: 768px) {
        .slide h2 {
            font-size: 2rem;
        }

        .slide p {
            font-size: 1.2rem;
            padding: 0.75rem 1.5rem;
        }
    }
</style>
