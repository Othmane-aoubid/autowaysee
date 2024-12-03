<template>
    <div class="min-h-screen bg-gray-100">
      <main class="container mx-auto px-4 py-8">
        <header class="bg-blue-600 text-white py-6 mb-5" style="background-color: #eab308; margin-top: 3rem;">
          <div class="container mx-auto px-4">
            <h1 class="text-3xl font-bold">Car Services</h1>
          </div>
        </header>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="service in services" :key="service.id" class="bg-white rounded-lg shadow-md overflow-hidden">
            <img :src="service.image" :alt="service.name" class="w-full h-48 object-cover">
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-2">{{ service.name }}</h2>
              <p class="text-gray-600 mb-4">{{ service.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-black">${{ service.price.toFixed(2) }}</span>
                <button class="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700 transition duration-300" style="background-color: #eab308;">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const services = ref([
    {
      id: 1,
      name: 'Oil Change',
      description: 'Regular oil changes to keep your engine running smoothly.',
      price: 39.99,
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      id: 2,
      name: 'Tire Rotation',
      description: 'Extend the life of your tires with regular rotation.',
      price: 29.99,
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      id: 3,
      name: 'Brake Service',
      description: 'Ensure your safety with our comprehensive brake service.',
      price: 89.99,
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      id: 4,
      name: 'Battery Replacement',
      description: 'Don\'t get stranded. Replace your battery with us.',
      price: 129.99,
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      id: 5,
      name: 'Air Conditioning Service',
      description: 'Stay cool with our A/C maintenance and repair service.',
      price: 79.99,
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      id: 6,
      name: 'Full Car Detailing',
      description: 'Make your car look like new inside and out.',
      price: 149.99,
      image: '/placeholder.svg?height=300&width=400'
    }
  ]);
  </script>