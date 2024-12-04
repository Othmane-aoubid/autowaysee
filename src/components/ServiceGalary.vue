<template>
  <section class="max-w-7xl mx-auto px-4 py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Car Services -->
      <div class="overflow-hidden rounded-lg shadow-lg group relative">
        <div class="relative h-[400px] w-full">
          <img
            src="../assets/images/servicegallary1.webp"
            alt="Professional mechanic inspecting a vehicle in our modern service bay"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-700"
          ></div>
          <div
            class="absolute inset-0 flex flex-col items-center justify-center text-white"
          >
            <h3 class="text-3xl font-bold mb-4">Car Services</h3>
            <button
              class="px-6 py-2 bg-white text-black hover:bg-gray-100 transition-colors rounded"
            >
            <router-link
            to="/Purchase"
            class="text-white font-script text-3xl"
            style="color: #eab308"
          >Shop Now</router-link>
            </button>
          </div>
        </div>
      </div>

      <!-- Maintenance -->
      <div class="overflow-hidden rounded-lg shadow-lg group relative">
        <div class="relative h-[400px] w-full">
          <img
            src="../assets/images/servicegallary2.webp"
            alt="Skilled technician performing precise maintenance work"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-700"
          ></div>
          <div
            class="absolute inset-0 flex flex-col items-center justify-center text-white"
          >
            <h3 class="text-3xl font-bold mb-4">Maintenance</h3>
            <button
              class="px-6 py-2 bg-white text-black hover:bg-gray-100 transition-colors rounded"
            >
            <router-link
            to="/Purchase"
            class="text-white font-script text-3xl"
            style="color: #eab308"
          >Shop Now</router-link>
            </button>
          </div>
        </div>
      </div>

      <!-- Repairs -->
      <div class="overflow-hidden rounded-lg shadow-lg group relative">
        <div class="relative h-[400px] w-full">
          <img
            src="../assets/images/servicegallary3.webp"
            alt="Detailed work on engine components by experienced mechanic"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-700"
          ></div>
          <div
            class="absolute inset-0 flex flex-col items-center justify-center text-white"
          >
            <h3 class="text-3xl font-bold mb-4">Repairs</h3>
            <button
              class="px-6 py-2 bg-white text-black hover:bg-gray-100 transition-colors rounded"
            >
            <router-link
            to="/Purchase"
            class="text-white font-script text-3xl"
            style="color: #eab308"
          >Shop Now</router-link>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
