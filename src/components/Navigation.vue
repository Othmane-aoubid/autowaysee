<template>
  <nav class="fixed w-full bg-black/80 backdrop-blur-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <router-link
            to="/"
            class="text-white font-script text-3xl"
            style="color: #eab308"
          >
            AutoWaysee
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-expanded="false"
            :aria-label="isOpen ? 'Close menu' : 'Open menu'"
          >
            <MenuIcon v-if="!isOpen" class="h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="h-6 w-6" aria-hidden="true" />
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

    <!-- Mobile menu, show/hide based on menu state -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
            @click="isOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { MenuIcon, XIcon } from "lucide-vue-next";

const isOpen = ref(false);

const menuItems = [
  { name: "Car Services", path: "/CarServices" },
  { name: "Repairs", path: "/Repair" },
  { name: "Purchase", path: "/Purchase" },
  { name: "Book Appointement", path: "/BookAppointement" },
];
</script>

<style>
.font-script {
  font-family: "Dancing Script", cursive;
}
</style>
