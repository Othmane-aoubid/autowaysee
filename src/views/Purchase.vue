<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto" style="padding-top: 3rem">
      <h1
        class="text-4xl font-bold text-black mb-8 text-center"
        style="color: #eab308"
      >
        AutoWaysee
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Product and Services List -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Car Parts Section -->
          <div>
            <h2 class="text-2xl font-semibold text-black mb-4">Car Parts</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                v-for="product in products"
                :key="product.id"
                class="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <h3 class="text-xl font-semibold text-black mb-2">
                    {{ product.name }}
                  </h3>
                  <p class="text-gray-600 mb-4">
                    ${{ product.price.toFixed(2) }}
                  </p>
                  <button
                    @click="addToCart(product)"
                    class="w-full bg-eab308 text-white py-2 px-4 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Car Services, Maintenance, and Repairs Section -->
          <div>
            <h2 class="text-2xl font-semibold text-black mb-4">
              Services, Maintenance, and Repairs
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                v-for="service in services"
                :key="service.id"
                class="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div class="p-4">
                  <h3 class="text-xl font-semibold text-black mb-2">
                    {{ service.name }}
                  </h3>
                  <p class="text-gray-600 mb-2">{{ service.description }}</p>
                  <p class="text-black font-semibold mb-4">
                    ${{ service.price.toFixed(2) }}
                  </p>
                  <button
                    @click="addToCart(service)"
                    class="w-full bg-eab308 text-white py-2 px-4 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Shopping Cart -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-black mb-4">Your Cart</h2>
          <div v-if="cart.length === 0" class="text-center py-8">
            <ShoppingCartIcon class="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p class="text-gray-600">Your cart is empty</p>
          </div>
          <div v-else class="space-y-4">
            <div
              v-for="item in cart"
              :key="item.id"
              class="flex justify-between items-center"
            >
              <div>
                <h3 class="font-semibold text-black">{{ item.name }}</h3>
                <p class="text-sm text-gray-600">
                  ${{ item.price.toFixed(2) }} each
                </p>
              </div>
              <div class="flex items-center space-x-2">
                <button
                  @click="decreaseQuantity(item)"
                  class="text-gray-600 hover:text-black"
                >
                  <MinusIcon class="w-5 h-5" />
                </button>
                <span class="text-black font-semibold">{{
                  item.quantity
                }}</span>
                <button
                  @click="increaseQuantity(item)"
                  class="text-gray-600 hover:text-black"
                >
                  <PlusIcon class="w-5 h-5" />
                </button>
                <button
                  @click="removeFromCart(item)"
                  class="text-red-500 hover:text-red-600 ml-4"
                >
                  <TrashIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-6 border-t">
            <div class="flex justify-between text-black mb-2">
              <span>Subtotal</span>
              <span>${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-black mb-2">
              <span>Tax (10%)</span>
              <span>${{ tax.toFixed(2) }}</span>
            </div>
            <div
              class="flex justify-between text-black font-semibold text-lg mt-4"
            >
              <span>Total</span>
              <span>${{ total.toFixed(2) }}</span>
            </div>
          </div>
          <button
            class="w-full bg-eab308 text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors mt-6"
            :disabled="cart.length === 0"
            :class="{ 'opacity-50 cursor-not-allowed': cart.length === 0 }"
            @click="proceedToCheckout"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import OilFilter from "../assets/images/item2.webp"
import BreakPads from "../assets/images/item3.webp"
import AirFilter from "../assets/images/item4.webp"
import SparksPlug from "../assets/images/item1.webp"
import { useRouter } from 'vue-router'

const router = useRouter()

const products = [
  {
    id: 1,
    name: "Oil Filter",
    price: 15.99,
    image: OilFilter,
  },
  {
    id: 2,
    name: "Brake Pads",
    price: 49.99,
    image: BreakPads,
  },
  {
    id: 3,
    name: "Air Filter",
    price: 24.99,
    image: AirFilter,
  },
  {
    id: 4,
    name: "Spark Plugs",
    price: 9.99,
    image: SparksPlug,
  },
];

const services = [
  {
    id: 101,
    name: "Oil Change",
    price: 50.0,
    description: "Full synthetic oil change service",
    type: "service",
  },
  {
    id: 102,
    name: "Brake Service",
    price: 150.0,
    description: "Brake pad replacement and rotor inspection",
    type: "service",
  },
  {
    id: 103,
    name: "Tire Rotation",
    price: 40.0,
    description: "Rotate and balance all four tires",
    type: "service",
  },
  {
    id: 104,
    name: "Engine Tune-up",
    price: 200.0,
    description: "Comprehensive engine performance service",
    type: "service",
  },
];

const cart = ref([]);

const addToCart = (item) => {
  const existingItem = cart.value.find((i) => i.id === item.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.value.push({ ...item, quantity: 1 });
  }
};

const removeFromCart = (item) => {
  cart.value = cart.value.filter((i) => i.id !== item.id);
};

const increaseQuantity = (item) => {
  item.quantity++;
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    removeFromCart(item);
  }
};

const subtotal = computed(() => {
  return cart.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});

const tax = computed(() => subtotal.value * 0.1);
const total = computed(() => subtotal.value + tax.value);

const proceedToCheckout = () => {
  if (cart.value.length > 0) {
    // Encode the cart data
    const encodedCart = btoa(JSON.stringify(cart.value))
    // Navigate to the checkout page with the encoded cart data
    router.push(`/checkout/${encodedCart}`)
  }
}

</script>

<style scoped>
.bg-eab308 {
  background-color: #eab308;
}
</style>
