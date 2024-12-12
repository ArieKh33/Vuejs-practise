<script setup>

import { RouterLink } from 'vue-router';

const toggleMenu = (e) => {
  console.log(e.class);
}


</script>

<template>
  <header class="bg-purple-950 ">
    <nav class="flex justify-between items-center w-[92%] mx-auto pt-5 pb-5">
      <div>
        <RouterLink to="/" class="text-white md:w-full text-3xl hidden md:block">Arie's page</RouterLink>
      </div>
      <div class="md:static md:min-h-fit  bg-purple-950 left-0  md:w-auto w-full flex items-center md:px-5">
        <ul class="flex md:flex-row  md:items-center md:gap-[4vw] gap-8 bg-purple-950">
          <li>
            <RouterLink to="/" class="text-white hover:text-gray-400">Introduction</RouterLink>
          </li>
          <li>
            <RouterLink to="/menu" class="text-white hover:text-gray-400">Menu</RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="text-white hover:text-gray-400">PLACEHOLDER1</RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <div class="flex align-center">
          <a class="bg-blue-600 text-white rounded-full hover:bg-blue-700  px-5 py-2 "  href="https://github.com/ArieKh33">Github</a>
        </div>

      </div>









      <!-- <div>

      <div>
        <RouterLink to="/" class="text-white text-2xl">Arie's page</RouterLink>
      </div>

      <div>

      </div>
          <RouterLink to="/" class="text-white">Introduction</RouterLink>
          <RouterLink to="/" class="text-white">Menu</RouterLink>

      </div> -->
    </nav>
  </header>
</template>