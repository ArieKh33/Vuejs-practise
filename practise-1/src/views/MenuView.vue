<script setup>

import { RouterLink } from 'vue-router';
import TestImg from '../assets/img/testpic.avif';
import ApiImg from '../assets/img/apiMenuPicture.avif';
import CrudImg from '../assets/img/crudMenuPicture.avif';

import 'animate.css';
import { ref } from 'vue'

const project1hover = ref(false)
const project2hover = ref(false)
const project3hover = ref(false)
const project4hover = ref(false)


</script>

<template>

  <article class="grid md:grid-cols-2 md:gap-6 md:mx-7 mt-4 text-center md:text-left">
    <section>
     <h1 class="text-5xl mb-4 border-b border-black">The mini projects</h1>
     <div class="flex flex-col">
      <RouterLink class="text-4xl mb-2 rounded p-1 bg-slate-200 hover:text-white hover:bg-blue-950" @mouseenter="project1hover = true" @mouseleave="project1hover = false" to="/project1">1. Using api's</RouterLink>
      <RouterLink class="text-4xl mb-2 rounded p-1 bg-slate-200 hover:text-white hover:bg-blue-950" @mouseenter="project2hover = true" @mouseleave="project2hover = false" to="/project2">2. Getting familiar with ref</RouterLink>
      <RouterLink class="text-4xl mb-2 rounded p-1 bg-slate-200 hover:text-white hover:bg-blue-950" @mouseenter="project3hover = true" @mouseleave="project3hover = false" to="/project3">3. CRUD with JSON</RouterLink>
      <RouterLink class="text-4xl mb-2 rounded p-1 bg-slate-200 hover:text-white hover:bg-blue-950" @mouseenter="project4hover = true" @mouseleave="project4hover = false" to="/">4. PLACEHOLDER</RouterLink>
     </div>
    </section>

    <section>
      <h1 class="text-5xl border-b border-black">Preview</h1>
      <img class="animate__animated animate__slideInRight w-100 border border-black" v-if="project1hover" id="project1img" :src=ApiImg alt="api menu picture">
      <img class="animate__animated animate__slideInRight w-100 border border-black" v-if="project2hover" id="project2img" :src=CrudImg alt="A visual example of crud">
      <img class="animate__animated animate__slideInRight w-100 border border-black" v-if="project3hover" id="project3img" :src=TestImg alt="grass picture">
      <img class="animate__animated animate__slideInRight w-100 border border-black" v-if="project3hover" id="project3img" :src=TestImg alt="grass picture">


    </section>
  </article>
  
</template>