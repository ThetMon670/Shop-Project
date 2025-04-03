<script setup>
  import NavBar from './views/Nav-bar.vue'
  import HeroSec from './views/Hero-section.vue'
  import Footer from './views/Footer.vue'
</script>

<template>
  <section>
    <NavBar />
    <HeroSec />
    <router-view />
    <Footer />
  </section>
</template>
