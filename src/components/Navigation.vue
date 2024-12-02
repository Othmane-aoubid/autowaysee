<template>
  <nav class="fixed w-full bg-black/80 backdrop-blur-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <router-link to="/" class="text-white font-script text-3xl">
            AutoWaysee
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-gray-300 hover:text-white focus:outline-none"
          >
            <MenuIcon v-if="!isOpen" class="h-6 w-6" />
            <XIcon v-else class="h-6 w-6" />
          </button>
        </div>

        <!-- Desktop menu -->
        <div class="hidden md:flex md:items-center md:space-x-8">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
          @click="isOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const menuItems = [
  { name: "Car Services", path: "/services" },
  { name: "Maintenance", path: "/maintenance" },
  { name: "Repairs", path: "/repairs" },
  { name: "Routine Care", path: "/routine-care" },
];
</script>

<style>
.font-script {
  font-family: "Dancing Script", cursive;
}
</style>
