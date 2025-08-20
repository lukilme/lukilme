<script setup lang="ts">
   import HomeView from './components/HomeView.vue'
   import About from './components/About.vue'
   import NavBar from './components/Navbar.vue'
   import Project from './components/Project.vue'
   
</script>
<template>
   <div>
      <NavBar />
      <main>
         <section id="about">
            <About />
         </section>
         <section id="projects">
            <Project />
         </section>
         <section id="contact">
            <HomeView />
         </section>
      </main>
   </div>
</template>
<style>
   html {
   scroll-behavior: smooth; 
   }
   section{
    height: 400px;
   }
</style>
