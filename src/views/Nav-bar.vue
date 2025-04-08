<template>
  <nav class="bg-white shadow-lg px-16 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="hidden md:flex space-x-6 gap-4 text-black">
        <a href="#" class="hover:text-gray-400 font-medium">HOME</a>
        <a href="#" class="hover:text-gray-400"><router-link to="/detail">DETAILS</router-link></a>
        <a href="#" class="hover:text-gray-400">PAGES</a>
        <a href="#" class="hover:text-gray-400">ELEMENTS</a>
      </div>
      <div class="text-black text-3xl font-bold">SHOP</div>
      <div class="hidden md:flex gap-6 items-center">
          <div class="flex items-center gap-2 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 2a8 8 0 0 1 5.66 13.66l4.72 4.72a1 1 0 0 1-1.42 1.42l-4.72-4.72A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"/>
            </svg>
            <p class="text-black">SEARCH</p>
          </div>
          <div class="flex items-center gap-2 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
            <p class="text-black">CART</p>
          </div>
          <div class="flex items-center gap-2 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
              <path fill-rule="evenodd" d="M12 2a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8zm-7 16a7 7 0 0114 0v1H5v-1z" clip-rule="evenodd"/>
            </svg>
            <p class="text-black"><router-link to="login">LOGIN</router-link></p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
          </div>
      </div>
      <div class="md:hidden text-black" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </div>
    <div v-if="isMenuOpen" class="md:hidden bg-gray-100 text-black">
      <a href="#" class="block px-4 py-2 hover:bg-gray-50">HOME</a>
      <a href="#" class="block px-4 py-2 hover:bg-gray-50">DETAILS</a>
      <a href="#" class="block px-4 py-2 hover:bg-gray-50">PAGES</a>
      <a href="#" class="block px-4 py-2 hover:bg-gray-50">ELEMENTS</a>
    </div>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
</script>
<!-- all products -->