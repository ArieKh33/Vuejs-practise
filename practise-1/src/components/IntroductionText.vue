<script setup>

import Card from './Card.vue';
import SunsetImg from '../assets/img/sunset-introduction.jpg';
import { RouterLink } from 'vue-router';

</script>

<template>
  <section class=" md:flex md:justify-between">
    <Card>
      <img class="w-full" :src="SunsetImg" alt="Sunset">
      <div class="px-6 py-4">
        <h2 class="font-bold text-xl mb-2 border-b border-white">A short Introduction</h2>
          <p class="text-white text-base">
            You might be wondering why this project exists. This project exists to try out VueJS and introduce myself to a Javascript framework 
          </p>
      </div>
      <div class="px-6 py-3">
      </div>
    </Card>
    <Card>
      <img class="w-full" :src="SunsetImg" alt="Sunset">
      <div class="px-6 py-4">
        <h2 class="font-bold text-xl mb-2 border-b border-white">Menu</h2>
          <p class="text-white text-base">
            In this page you'll get a menu where you can select from mini projects, where I create functionalities with methods new to me, and with an explanation of how it's made.
          </p>
      </div>
      <div class="px-6 py-3">
        <RouterLink class="bg-green-500 py-1 px-2 rounded hover:bg-green-600" to="/menu">Explore</RouterLink>
      </div>
    </Card>
  </section>
</template>