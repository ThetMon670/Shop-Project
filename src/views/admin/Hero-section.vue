<script>
import heroImage from '@/assets/img/hero-section.png';

export default {
  data() {
    return {
      heroImage,
    };
  },
};
</script>
<template>
  <section
    class="relative w-full bg-cover bg-center"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="flex flex-col items-center justify-start p-28 h-screen">
        <div class="mt-4 text-center">
          <h1 class="text-5xl font-bold">DECORATIVE FUNITURE</h1>
          <p class="pt-3 pb-3 text-center text-gray-400">Trust in our commitment to quality and let our decorative <br> furniture transform your home into luxury furniture</p>
        </div>
        <div class="flex justify-center gap-4">
          <button class="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-500 transition duration-300">BUY NOW</button>
          <button class="px-6 py-2 bg-gray-100 border-1 border-black  font-semibold rounded-lg hover:bg-gray-200 transition duration-300">LEARN MORE</button>
        </div>
    </div>
  </section>
</template>