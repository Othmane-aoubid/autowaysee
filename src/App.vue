<template>
  <div class="min-h-screen bg-gray-100">
    <Navigation /> 
    <!-- about me Section -->
    <div class="bg-white">
      <router-view />
    </div>
    <Footer /> 
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
</style>