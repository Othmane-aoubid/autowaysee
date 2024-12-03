<template>
  <div class="min-h-screen bg-gray-100">
    <Navigation /> 
    <HeroSection /> 
    <ServiceGalary /> 
    <ServicesSection /> 
    <Contact /> 
    <Footer /> 
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import ServiceGalary from './components/ServiceGalary.vue'
import ServicesSection from './components/ServicesSection.vue'
import Contact from './components/Contact.vue'
import Location from './components/Location.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
</style>