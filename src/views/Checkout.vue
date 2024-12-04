<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto" style="padding-top: 3rem">
      <h1 class="text-4xl font-bold text-black mb-8 text-center">Checkout</h1>

      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <form @submit.prevent="submitOrder" class="space-y-6">
            <!-- Customer Information -->
            <div>
              <h2 class="text-2xl font-semibold text-black mb-4">
                Customer Information
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    for="firstName"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >First Name</label
                  >
                  <input
                    type="text"
                    id="firstName"
                    v-model="customer.firstName"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
                  />
                </div>
                <div>
                  <label
                    for="lastName"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    id="lastName"
                    v-model="customer.lastName"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    v-model="customer.email"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Phone</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    v-model="customer.phone"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
                  />
                </div>
              </div>
            </div>

            <!-- Shipping Information -->
            <div>
              <h2 class="text-2xl font-semibold text-black mb-4">
                Shipping Information
              </h2>
              <div class="space-y-4">
                <div>
                  <label
                    for="address"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Address</label
                  >
                  <input
                    type="text"
                    id="address"
                    v-model="shipping.address"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
                  />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      for="city"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >City</label
                    >
                    <input
                      type="text"
                      id="city"
                      v-model="shipping.city"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
                    />
                  </div>
                  <div>
                    <label
                      for="state"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >State</label
                    >
                    <input
                      type="text"
                      id="state"
                      v-model="shipping.state"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
                    />
                  </div>
                  <div>
                    <label
                      for="zipCode"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >ZIP Code</label
                    >
                    <input
                      type="text"
                      id="zipCode"
                      v-model="shipping.zipCode"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Information -->
            <div>
              <h2 class="text-2xl font-semibold text-black mb-4">
                Payment Information
              </h2>
              <div class="space-y-4">
                <div>
                  <label
                    for="cardNumber"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Card Number</label
                  >
                  <input
                    type="text"
                    id="cardNumber"
                    v-model="payment.cardNumber"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
                  />
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div class="col-span-2 md:col-span-1">
                    <label
                      for="expirationDate"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >Expiration Date</label
                    >
                    <input
                      type="text"
                      id="expirationDate"
                      v-model="payment.expirationDate"
                      placeholder="MM/YY"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
                    />
                  </div>
                  <div>
                    <label
                      for="cvv"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >CVV</label
                    >
                    <input
                      type="text"
                      id="cvv"
                      v-model="payment.cvv"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eab308"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Order Summary -->
            <div>
              <h2 class="text-2xl font-semibold text-black mb-4">
                Order Summary
              </h2>
              <div v-if="cart.length === 0" class="text-center py-4">
                <p class="text-gray-600">Your cart is empty</p>
              </div>
              <div v-else class="space-y-2">
                <div
                  v-for="item in cart"
                  :key="item.id"
                  class="flex justify-between items-center"
                >
                  <span class="text-sm">
                    {{ item.name }}
                    <span class="text-gray-600">({{ item.type }})</span>
                  </span>
                  <span class="text-sm">
                    {{ item.quantity }} x ${{ item.price.toFixed(2) }} = ${{
                      (item.price * item.quantity).toFixed(2)
                    }}
                  </span>
                </div>
                <div class="border-t pt-2 mt-2">
                  <div class="flex justify-between text-black">
                    <span>Subtotal</span>
                    <span>${{ subtotal.toFixed(2) }}</span>
                  </div>
                  <div class="flex justify-between text-black">
                    <span>Tax (10%)</span>
                    <span>${{ tax.toFixed(2) }}</span>
                  </div>
                  <div
                    class="flex justify-between text-black font-semibold text-lg mt-2"
                  >
                    <span>Total</span>
                    <span>${{ total.toFixed(2) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              class="w-full bg-eab308 text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
              :disabled="cart.length === 0"
              :class="{ 'opacity-50 cursor-not-allowed': cart.length === 0 }"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const cart = ref([]);

onMounted(() => {
  // Decode the cart data from the URL
  const encodedCart = route.params.cartData;
  if (encodedCart) {
    try {
      cart.value = JSON.parse(atob(encodedCart));
    } catch (error) {
      console.error("Error decoding cart data:", error);
    }
  }
});

const customer = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
});

const shipping = ref({
  address: "",
  city: "",
  state: "",
  zipCode: "",
});

const payment = ref({
  cardNumber: "",
  expirationDate: "",
  cvv: "",
});

const subtotal = computed(() => {
  return cart.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});

const tax = computed(() => subtotal.value * 0.1);
const total = computed(() => subtotal.value + tax.value);

const submitOrder = () => {
  // Here you would typically send the order data to your backend
  console.log("Order submitted", {
    customer: customer.value,
    shipping: shipping.value,
    payment: payment.value,
    order: {
      items: cart.value,
      subtotal: subtotal.value,
      tax: tax.value,
      total: total.value,
    },
  });
  // After successful submission, you might want to clear the cart and redirect to a confirmation page
  alert("Order placed successfully!");
};
</script>

<style scoped>
.bg-eab308 {
  background-color: #eab308;
}
</style>
