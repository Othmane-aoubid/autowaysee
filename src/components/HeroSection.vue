<template>
  <section class="relative h-screen overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600"></div>

    <!-- Hero Content -->
    <div class="relative flex items-center justify-center h-screen">
      <!-- Carousel -->
      <div
        class="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <!-- Slides -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="relative w-full h-full flex-shrink-0 bg-cover bg-center transition-transform duration-[1500ms] ease-in-out"
          :class="{ 'scale-110': activeIndex === index, 'scale-100': activeIndex !== index }"
          :style="{ backgroundImage: `url(${slide})` }"
        ></div>
         <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <!-- Text Content -->
      <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6" style="color: #eab308;">
          Drive with Confidence at AutoWaysee
        </h1>
        <p class="text-lg md:text-xl text-gray-300 mb-8" style="color:#f8fafc;">
          Experience unparalleled car care with our expert mechanics. From
          routine maintenance to advanced diagnostics, we ensure your vehicle is
          always road-ready. Trust AutoWaysee for quality and reliability.
        </p>
        <router-link
          to="/services"
          class="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          Explore Services
        </router-link>
      </div>

      <!-- Carousel Controls -->
      <div class="absolute bottom-8 flex justify-between w-full px-8 z-10">
        <button
          class="text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition"
          @click="prevSlide"
        >
          &larr;
        </button>
        <button
          class="text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition"
          @click="nextSlide"
        >
          &rarr;
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import heroImage from "../assets/images/heropic.webp";
import heroImage2 from "../assets/images/heropic2.webp";

export default {
  data() {
    return {
      slides: [heroImage, heroImage2],
      activeIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.activeIndex =
        (this.activeIndex - 1 + this.slides.length) % this.slides.length;
    },
    autoSlide() {
      setInterval(() => {
        this.nextSlide();
      }, 5000); // Automatically slides every 5 seconds
    },
  },
  mounted() {
    this.autoSlide();
  },
};
</script>

<style scoped>
/* Zoom effect for active slide */
.scale-100 {
  transform: scale(1);
}
.scale-110 {
  transform: scale(1.1);
  transition: transform 3s ease-in-out; /* Smooth zoom effect for active slide */
}
</style>
