<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
  <header class="bg-purple-950 ">
    <nav class="flex justify-between items-center w-[92%] mx-auto pt-5 pb-6">
      <div>
        <RouterLink to="/" class="text-white w-16 text-3xl">Arie's page</RouterLink>
      </div>
      <div class="md:static md:min-h-fit absolute bg-purple-950 min-h-[40vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 bg-purple-950">
          <li>
            <RouterLink to="/" class="text-white hover:text-gray-400">Introduction</RouterLink>
          </li>
          <li>
            <RouterLink to="/menu" class="text-white hover:text-gray-400">Menu</RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="text-white hover:text-gray-400">PLACEHOLDER1</RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="text-white hover:text-gray-400">PLACEHOLDER2</RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <div>

        </div>
        <button href="https://github.com/ArieKh33" class=" bg-blue-600 text-white rounded-full hover:bg-blue-700  px-5 py-2 "><a  href="https://github.com/ArieKh33">Github</a></button>

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