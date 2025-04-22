<!-- Quantity.vue -->
<template>
  <div class="flex items-center space-x-0 rounded-lg shadow-sm overflow-hidden">
    <button
      @click="decrement"
      class="bg-gray-100 text-gray-600 px-4 py-2 hover:bg-gray-200 transition duration-200 text-xl font-semibold"
    >
      &minus;
    </button>

    <input
      :value="quantity"
      readonly
      class="w-12 text-center border-t border-b border-gray-300 py-2 bg-white text-gray-700 font-medium"
    />

    <button
      @click="increment"
      class="bg-gray-100 text-gray-600 px-4 py-2 hover:bg-gray-200 transition duration-200 text-xl font-semibold"
    >
      &#xff0b;
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const quantity = ref(1)

const increment = () => {
  quantity.value++
}

const decrement = () => {
  if (quantity.value === 1) {
    alert('Negative quantity not allowed')
  } else {
    quantity.value--
  }
}
</script>
