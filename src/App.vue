<script setup lang="ts">
   // import HomeView from './components/HomeView.vue'
   import About from './components/About.vue'
   import NavBar from './components/Navbar.vue'
   import Project from './components/Project.vue'
import Contact from './components/Contact.vue'
   
</script>
<template>
   <div class="mx-auto my-15 py-20">
      <NavBar />
      <main >
         <section id="sobre" >
            <About />
         </section>

         <section id="projetos">
            <Project />
         </section>
         <section id="contato">
            <Contact />
         </section>
      </main>
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
   #homeview{
      margin:auto;
   }
</style>
