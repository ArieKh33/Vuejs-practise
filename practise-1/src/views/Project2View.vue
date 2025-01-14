<script setup>

import { ref } from 'vue';
import listOneScreenshot from '../assets/img/listOneScreenshot.png';

const firstList = () => {
  const firstListName = ref("Favourite food");
  const foodItems = ref(['steak', 'chicken', 'rice']);
}
firstList(firstListName, foodItems);

firstListName.value = "A list of food";
</script>

<template>
  <main>
    <article>
      <section class="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:gap-4 mx-10">
        <div class="bg-slate-100 mt-5 p-2 rounded shadow-xl">
          <h1 class="text-2xl border-black border-b">
            Introduction
          </h1>
          <p>
            In this page I get familiar with changeable variables by using "ref()"; the first List will be about the foods I like.
          </p>
        </div>

        <div class="bg-slate-100 mt-5 p-2 rounded shadow-xl">
          <div>
            <h1 class="text-2xl border-black border-b text-center">
            {{ firstListName }}
            </h1>
            <ul>
              <li v-for="food in foodItems" :key="food"> - {{ food }}</li>
            </ul>
          </div>

          <div class="mt-2">
            <h2 class="text-xl border-black border-b border-t">
              Explanation
            </h2>
            <img :src=listOneScreenshot alt="">
            <p>
              In this example I used an Array with "ref()", and changed the name of the list. I also have it outputting data looping with "v-for".
            </p>
          </div>
          
        </div>
      </section>
    </article>
  </main>

</template>