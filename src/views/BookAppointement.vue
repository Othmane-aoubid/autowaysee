<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto" style="padding-top: 3rem;">
      <h1 class="text-4xl font-bold text-black mb-8 text-center">
        Book Your Car Service
      </h1>

      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <div class="mb-6">
            <label
              for="service"
              class="block text-sm font-medium text-gray-700 mb-2"
              >Select Service</label
            >
            <select
              id="service"
              v-model="selectedService"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
            >
              <option value="">Choose a service</option>
              <option
                v-for="service in services"
                :key="service.id"
                :value="service.id"
              >
                {{ service.name }} - ${{ service.price.toFixed(2) }}
              </option>
            </select>
          </div>

          <div class="mb-6">
            <label
              for="date"
              class="block text-sm font-medium text-gray-700 mb-2"
              >Select Date</label
            >
            <input
              type="date"
              id="date"
              v-model="selectedDate"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
            />
          </div>

          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Available Time Slots</label
            >
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="slot in availableSlots"
                :key="slot"
                @click="selectTimeSlot(slot)"
                class="px-4 py-2 border rounded-md"
                :class="
                  selectedSlot === slot
                    ? 'bg-eab308 text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                "
              >
                {{ slot }}
              </button>
            </div>
          </div>

          <button
            @click="bookAppointment"
            class="w-full bg-eab308 text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
            :disabled="!canBook"
            :class="{ 'opacity-50 cursor-not-allowed': !canBook }"
          >
            Book Appointment
          </button>
        </div>
      </div>

      <!-- Booked Appointments -->
      <div class="mt-12">
        <h2 class="text-2xl font-semibold text-black mb-4">
          Your Appointments
        </h2>
        <div v-if="bookedAppointments.length === 0" class="text-gray-600">
          You have no booked appointments.
        </div>
        <div v-else class="space-y-4">
          <div
            v-for="appointment in bookedAppointments"
            :key="appointment.id"
            class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h3 class="font-semibold text-black">
                {{ appointment.service }}
              </h3>
              <p class="text-gray-600">
                {{ appointment.date }} at {{ appointment.time }}
              </p>
            </div>
            <button
              @click="cancelAppointment(appointment.id)"
              class="text-red-500 hover:text-red-600"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { XIcon } from "lucide-vue-next";

const services = [
  { id: 1, name: "Oil Change", price: 50 },
  { id: 2, name: "Brake Service", price: 150 },
  { id: 3, name: "Tire Rotation", price: 40 },
  { id: 4, name: "Engine Tune-up", price: 200 },
];

const selectedService = ref("");
const selectedDate = ref("");
const selectedSlot = ref("");
const bookedAppointments = ref([]);

const availableSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
];

const canBook = computed(() => {
  return selectedService.value && selectedDate.value && selectedSlot.value;
});

const selectTimeSlot = (slot) => {
  selectedSlot.value = slot;
};

const bookAppointment = () => {
  if (canBook.value) {
    const service = services.find(
      (s) => s.id === parseInt(selectedService.value)
    );
    bookedAppointments.value.push({
      id: Date.now(),
      service: service.name,
      date: selectedDate.value,
      time: selectedSlot.value,
    });
    // Reset form
    selectedService.value = "";
    selectedDate.value = "";
    selectedSlot.value = "";
  }
};

const cancelAppointment = (id) => {
  bookedAppointments.value = bookedAppointments.value.filter(
    (a) => a.id !== id
  );
};
</script>

<style scoped>
.bg-eab308 {
  background-color: #eab308;
}
</style>
