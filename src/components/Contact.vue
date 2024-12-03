<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div
      class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true"
    >
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2
        class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
      >
        Contact ME
      </h2>
    </div>
    <form @submit.prevent="submitForm" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            for="first-name"
            class="block text-sm/6 font-semibold text-gray-900"
            >First name</label
          >
          <div class="mt-2.5">
            <input
              v-model="formData.firstName"
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              required
            />
          </div>
        </div>
        <div>
          <label
            for="last-name"
            class="block text-sm/6 font-semibold text-gray-900"
            >Last name</label
          >
          <div class="mt-2.5">
            <input
              v-model="formData.lastName"
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              required
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm/6 font-semibold text-gray-900"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              v-model="formData.email"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              required
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="phone-number"
            class="block text-sm/6 font-semibold text-gray-900"
            >Phone number</label
          >
          <div class="mt-2.5">
            <input
              v-model="formData.phoneNumber"
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              required
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm/6 font-semibold text-gray-900"
            >Message</label
          >
          <div class="mt-2.5">
            <textarea
              v-model="formData.message"
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              required
            />
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? "Sending..." : "Let's talk" }}
        </button>
      </div>
    </form>
    <div
      v-if="submitStatus"
      :class="[
        'mt-4 p-4 rounded-md',
        submitStatus.type === 'success'
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-700',
      ]"
    >
      {{ submitStatus.message }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import emailjs from "@emailjs/browser";

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref(null);

onMounted(() => {
  emailjs.init("fAQoijqTk9VVOKPhg"); // Replace with your EmailJS user ID
});

const submitForm = async () => {
  isSubmitting.value = true;
  submitStatus.value = null;

  try {
    const templateParams = {
      to_email: "othmaneaoubid11@gmail.com",
      lastName: formData.lastName,
      firstName: formData.firstName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    };

    await emailjs.send(
      "service_mn8wiji", // Replace with your EmailJS service ID
      "template_0is8ayj", // Replace with your EmailJS template ID
      templateParams
    );

    submitStatus.value = {
      type: "success",
      message: "Your message has been sent successfully!",
    };

    // Reset form
    Object.keys(formData).forEach((key) => (formData[key] = ""));
  } catch (error) {
    console.error("Error sending email:", error);
    submitStatus.value = {
      type: "error",
      message: "Failed to send your message. Please try again later.",
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>
