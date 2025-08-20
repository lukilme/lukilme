<template>
   <nav class="bg-black border-4 border-black shadow-[8px_8px_0px_0px] shadow-pink-500 w-full md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto p-4 md:p-5 -rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-[12px_12px_0px_0px] hover:shadow-pink-500 slide-in fixed top-5 left-1/2 -translate-x-1/2 z-50 mobile-optimized">
      <div class="absolute -top-2 -right-2 w-4 h-4 md:w-5 md:h-5 bg-emerald-400 border-2 border-black rotate-45"></div>
      <div class="absolute -bottom-2 -left-2 w-3 h-3 md:w-4 md:h-4 bg-blue-500 border-2 border-black rounded-full"></div>
      <div class="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4 lg:gap-5">
         <div class="text-lime-300 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider cursor-pointer transition-all duration-200 hover:text-emerald-400 hover:scale-110 glitch-effect whitespace-nowrap">
            Kilmer
         </div>
         <ul class="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto mobile-optimized-links">
            <li class="flex-1 sm:flex-none">
               <a href="#projetos" 
                  class="block px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 bg-lime-300 text-black font-bold uppercase tracking-wide border-3 border-black shadow-[3px_3px_0px_0px] md:shadow-[4px_4px_0px_0px] shadow-pink-500 transition-all duration-200 hover:bg-emerald-400 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px] md:hover:shadow-[6px_6px_0px_0px] hover:shadow-pink-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px] active:shadow-pink-500 relative overflow-hidden group text-sm md:text-base text-center mobile-optimized-link">
                  <span class="relative z-10">PROJETOS</span>
                  <div class="absolute inset-0 bg-pink-500 text-lime-300 flex items-center justify-center -translate-x-full group-hover:translate-x-0 transition-transform duration-300 text-sm md:text-base">
                     PROJETOS
                  </div>
               </a>
            </li>
            <li class="flex-1 sm:flex-none">
               <a href="#sobre" 
                  class="block px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 bg-lime-300 text-black font-bold uppercase tracking-wide border-3 border-black shadow-[3px_3px_0px_0px] md:shadow-[4px_4px_0px_0px] shadow-pink-500 transition-all duration-200 hover:bg-emerald-400 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px] md:hover:shadow-[6px_6px_0px_0px] hover:shadow-pink-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px] active:shadow-pink-500 relative overflow-hidden group text-sm md:text-base text-center mobile-optimized-link">
                  <span class="relative z-10">SOBRE</span>
                  <div class="absolute inset-0 bg-pink-500 text-lime-300 flex items-center justify-center -translate-x-full group-hover:translate-x-0 transition-transform duration-300 text-sm md:text-base">
                     SOBRE
                  </div>
               </a>
            </li>
            <li class="flex-1 sm:flex-none">
               <a href="#contato" 
                  class="block px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 bg-lime-300 text-black font-bold uppercase tracking-wide border-3 border-black shadow-[3px_3px_0px_0px] md:shadow-[4px_4px_0px_0px] shadow-pink-500 transition-all duration-200 hover:bg-emerald-400 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px] md:hover:shadow-[6px_6px_0px_0px] hover:shadow-pink-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px] active:shadow-pink-500 relative overflow-hidden group text-sm md:text-base text-center mobile-optimized-link">
                  <span class="relative z-10">CONTATO</span>
                  <div class="absolute inset-0 bg-pink-500 text-lime-300 flex items-center justify-center -translate-x-full group-hover:translate-x-0 transition-transform duration-300 text-sm md:text-base">
                     CONTATO
                  </div>
               </a>
            </li>
         </ul>
      </div>
   </nav>
</template>
<style>
   @keyframes slideIn {
   from {
    opacity: 0;
    transform: translateX(100%) translateY(-100%) rotate(12deg);
   }
   to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) rotate(-1deg);
   }
   }
   .slide-in {
    animation: slideIn 0.6s cubic-bezier(0.18, 1.25, 0.4, 1) forwards;
    left: 50%;
   }
   .glitch-effect {
    position: relative;
    display: inline-block;
   }
   .glitch-effect:hover {
    text-shadow: 2px 0 #ff00de, -2px 0 #00ffee;
    animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
   }
   @keyframes glitch {
   0% {
   transform: translate(0);
   }
   20% {
   transform: translate(-2px, 2px);
   }
   40% {
   transform: translate(-2px, -2px);
   }
   60% {
   transform: translate(2px, 2px);
   }
   80% {
   transform: translate(2px, -2px);
   }
   100% {
   transform: translate(0);
   }
   }

   @media (max-width: 640px) {
   .mobile-optimized {
   padding: 0.75rem;
   width: 95%;
   }
   .mobile-optimized-links {
   justify-content: center;
   margin-top: 0.5rem;
   }
   .mobile-optimized-link {
   flex: 1;
   min-width: 110px;
   text-align: center;
   padding: 0.5rem 0.75rem;
   font-size: 0.875rem;
   }
   }
</style>
<script lang="ts">
   export default{
       name: "NavBar"
   }
</script>