<script setup>

import { RouterLink } from 'vue-router';
import TestImg from '../assets/img/testpic.avif'
import 'animate.css';
import { ref } from 'vue'

const project1hover = ref(false)

</script>

<template>

  <article class="grid md:grid-cols-2 md:gap-6 md:mx-4 mt-4">
    <section>
     <h1 class="text-5xl mb-4 border-b border-black">The mini projects</h1>
     <div class="flex flex-col ml-5">
      <RouterLink class="text-4xl mb-2 hover:text-gray-600" @mouseenter="project1hover = true" @mouseleave="project1hover = false" to="/project1">1. Using api's</RouterLink>
      <RouterLink class="text-4xl mb-2 hover:text-gray-600" @mouseenter="project1hover = true" @mouseleave="project1hover = false" to="/">2. CRUD application</RouterLink>
      <RouterLink class="text-4xl mb-2 hover:text-gray-600" @mouseenter="project1hover = true" @mouseleave="project1hover = false" to="/">3. PLACEHOLDER</RouterLink>
      <RouterLink class="text-4xl mb-2 hover:text-gray-600" @mouseenter="project1hover = true" @mouseleave="project1hover = false" to="/">4. PLACEHOLDER</RouterLink>
     </div>
     

    </section>

    <section>
      <h1 class="text-5xl border-b border-black">Preview</h1>
      <img class="animate__animated animate__slideInRight w-100 border border-black" v-if="project1hover" id="project1img" :src=TestImg alt="">
    </section>
  </article>
  
</template>