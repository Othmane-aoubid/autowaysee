<template>
  <footer class="bg-white pt-16 pb-8 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo Section -->
        <div>
          <h2 class="text-2xl font-serif italic mb-6">AutoWaysee</h2>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Routine Care</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Advanced Diagnostics</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
            </li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Customer Service</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Terms and Conditions</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Refund and Return Policy</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Shipping Policy</a
              >
            </li>
          </ul>
        </div>

        <!-- Our Services -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Our Services</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Comprehensive Car Maintenance</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Expert Repair Services</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Advanced Diagnostic Services</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-900"
                >Routine Care</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="mt-12 mb-8">
        <h3 class="font-semibold text-lg mb-2">Subscribe to Our Newsletter</h3>
        <p class="text-gray-600 text-sm mb-4">
          Stay updated with the latest news and offers from AutoWaysee. Enter
          your email to Subscribe.
        </p>
        <div class="flex gap-2 max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button
            class="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="pt-8 mt-8 border-t border-gray-200">
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p class="text-sm text-gray-600">
            © 2024 AutoWaysee. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-600 hover:text-gray-900">
              <span class="sr-only">Facebook</span>
              <FacebookIcon class="h-5 w-5" />
            </a>
            <a href="#" class="text-gray-600 hover:text-gray-900">
              <span class="sr-only">Instagram</span>
              <InstagramIcon class="h-5 w-5" />
            </a>
            <a href="#" class="text-gray-600 hover:text-gray-900">
              <span class="sr-only">Twitter</span>
              <TwitterIcon class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-vue-next";
</script>
