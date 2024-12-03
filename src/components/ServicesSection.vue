<template>
  <div class="max-w-7xl mx-auto px-4 py-12 space-y-24">
    <!-- Routine Maintenance Section -->
    <section class="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 class="text-3xl font-bold text-black mb-4">
          Discover Our Routine Maintenance Services
        </h2>
      </div>
      <div
        class="space-y-8 transition-all duration-700"
        :class="{
          'translate-y-0 opacity-100': isVisible1,
          'translate-y-20 opacity-0': !isVisible1,
        }"
        ref="section1"
      >
        <p class="text-gray-600 leading-relaxed">
          At AutoWaysse, we offer a range of routine maintenance services
          designed to keep your vehicle in top condition, from oil changes to
          brake inspections, our expert team ensures your car remains safe and
          reliable.
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-xl mb-2">Oil Changes</h3>
            <p class="text-gray-600">
              Regular oil changes enhance engine performance and longevity.
            </p>
          </div>
          <div>
            <h3 class="font-semibold text-xl mb-2">Brake Inspections</h3>
            <p class="text-gray-600">
              Ensure safety with thorough brake system checks.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Diagnostic Services Section -->
    <section class="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 class="text-3xl font-bold text-black mb-4">
          Discover Our Advanced Diagnostic Services
        </h2>
      </div>
      <div
        class="space-y-8 transition-all duration-700"
        :class="{
          'translate-y-0 opacity-100': isVisible2,
          'translate-y-20 opacity-0': !isVisible2,
        }"
        ref="section2"
      >
        <p class="text-gray-600 leading-relaxed">
          At AutoWaysse, we utilize cutting-edge technology to accurately
          diagnose your vehicle's issues. Our comprehensive checks ensure all
          systems are functioning optimally, providing you with peace of mind
          and a clear understanding of your vehicle's condition.
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-xl mb-2">Precision Tools</h3>
            <p class="text-gray-600">
              We use state-of-the-art diagnostic tools to identify issues
              quickly and accurately.
            </p>
          </div>
          <div>
            <h3 class="font-semibold text-xl mb-2">Expert Technicians</h3>
            <p class="text-gray-600">
              Our skilled technicians ensure your vehicle is in top condition,
              enhancing safety.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Emergency Services Section -->
    <section class="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <span class="text-red-600 font-medium text-sm">URGENT HELP</span>
        <h2 class="text-3xl font-bold text-black mt-2">
          Fast, Reliable Emergency Services
        </h2>
      </div>
      <div
        class="space-y-8 transition-all duration-700"
        :class="{
          'translate-y-0 opacity-100': isVisible3,
          'translate-y-20 opacity-0': !isVisible3,
        }"
        ref="section3"
      >
        <p class="text-gray-600 leading-relaxed">
          When unexpected car troubles arise, our team is ready to assist you
          with prompt and efficient emergency services. Our skilled mechanics
          are equipped to handle a variety of urgent issues, ensuring your
          vehicle is back on the road safely. Trust AutoWaysse for dependable
          support when you need it most.
        </p>
        <button
          class="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
        >
          Learn More
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const section1 = ref(null);
const section2 = ref(null);
const section3 = ref(null);
const isVisible1 = ref(false);
const isVisible2 = ref(false);
const isVisible3 = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === section1.value) {
          isVisible1.value = entry.isIntersecting;
        } else if (entry.target === section2.value) {
          isVisible2.value = entry.isIntersecting;
        } else if (entry.target === section3.value) {
          isVisible3.value = entry.isIntersecting;
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "-50px",
    }
  );

  observer.observe(section1.value);
  observer.observe(section2.value);
  observer.observe(section3.value);
});
</script>
