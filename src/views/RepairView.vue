<template>
  <div class="bg-gray-100" >
    <main class="container mx-auto px-4" style="padding-top: 5rem;">
      <header class="bg-green-600 text-white py-6 mb-5" style="background-color: #eab308;">
        <div class="container mx-auto px-4">
          <h1 class="text-3xl font-bold">Car Maintenance & Repair</h1>
        </div>
      </header>
      <div class="mb-6">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search services..."
          class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
        />
      </div>
      <div class="hidden md:block">
        <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-green-600 text-white" style="background-color: #eab308;">
            <tr>
              <th class="py-3 px-4 text-left">Service</th>
              <th class="py-3 px-4 text-left">Description</th>
              <th class="py-3 px-4 text-left">Price</th>
              <th class="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="service in filteredServices"
              :key="service.id"
              class="border-b border-gray-200"
            >
              <td class="py-4 px-4">{{ service.name }}</td>
              <td class="py-4 px-4">{{ service.description }}</td>
              <td class="py-4 px-4">${{ service.price.toFixed(2) }}</td>
              <td class="py-4 px-4">
                <button
                  class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                  style="background-color: #eab308;"
                >
                  Book
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="md:hidden space-y-4">
        <div
          v-for="service in filteredServices"
          :key="service.id"
          class="bg-white rounded-lg shadow-md p-4"
        >
          <h2 class="text-xl font-semibold mb-2">{{ service.name }}</h2>
          <p class="text-gray-600 mb-2">{{ service.description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-green-600"
              >${{ service.price.toFixed(2) }}</span
            >
            <button
              class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </main>
    <section class="bg-green-600 text-white py-12 my-5" style="background-color: #eab308;">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4 text-black">Need Emergency Repair?</h2>
        <p class="mb-6 text-black">Our team is available 24/7 for urgent car repairs.</p>
        <button
          class="bg-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-gray-100 transition duration-300"
          style="color: black;"
        >
          Call Now
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");

const services = ref([
  {
    id: 1,
    name: "Engine Tune-up",
    description: "Comprehensive engine maintenance to improve performance.",
    price: 129.99,
  },
  {
    id: 2,
    name: "Transmission Service",
    description: "Fluid change and inspection for smooth gear shifting.",
    price: 149.99,
  },
  {
    id: 3,
    name: "Wheel Alignment",
    description: "Adjust wheel angles for optimal tire wear and handling.",
    price: 79.99,
  },
  {
    id: 4,
    name: "Brake Pad Replacement",
    description: "Replace worn brake pads for safe stopping power.",
    price: 99.99,
  },
  {
    id: 5,
    name: "Suspension Repair",
    description:
      "Fix or replace worn suspension components for a smoother ride.",
    price: 199.99,
  },
  {
    id: 6,
    name: "Exhaust System Repair",
    description: "Repair or replace damaged exhaust components.",
    price: 169.99,
  },
]);

const filteredServices = computed(() => {
  return services.value.filter(
    (service) =>
      service.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      service.description
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
  );
});
</script>
