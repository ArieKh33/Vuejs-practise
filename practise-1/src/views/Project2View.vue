<script setup>

import { ref } from 'vue';
import listOneScreenshot from '../assets/img/listOneScreenshot.avif';

// These are the starting values of the list
const firstListName = ref("Favourite food");
const foodItems = ref(["steak", "chicken", "rice", "pasta"]);


// Here you change the name of the list using .value
const changeListTitle = (firstListName) => {
  firstListName.value = "A list of food"
}
changeListTitle(firstListName);

const toggeListTitle = () => {
  firstListName.value = "A list of foodd"
}



</script>

<template>
  <main>
    <article>
      <section class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-2 md:gap-4 sm:mx-1 md:mx-10">
        <div class="bg-slate-100 mt-5 p-2 rounded shadow-xl">
          <div>
            <h1 class="text-2xl border-black border-b">
            Introduction
            </h1>
            <p>
              In this page I get familiar with changeable variables by using "ref()". I will show how to change the values of the variables in different ways.
            </p>
          </div>
          <div class="mt-4">
            <h2 class="text-xl">Here is a list of functionalities</h2>
            <ul>
              <li>
                <span class="text-red-700 text-xl"> 1. </span>Changing the name of the title in the code
              </li>
              <li>
                <span class="text-green-700 text-xl"> 2. </span> Changing the name with a press of a button
              </li>
              <li>
                <span class="text-blue-700 text-xl"> 3. </span> Being able to add your own food
              </li>
            </ul>
          </div>

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


          
        </div>
        <div class="bg-slate-100 mt-5 p-2 rounded shadow-xl border-red-700 border-4">
          <h2 class="text-xl border-black border-b">
            <span class="text-red-700 text-2xl"> 1. </span>Changing the name of the title in the code
          </h2>
          <img class="md: lg:w-100" :src=listOneScreenshot alt="">
          <p>
            In this example I used an Array with "ref()", and changed the name of the list. I also have it outputting data looping with "v-for".
          </p>
        </div>

        <div>
          <div class="bg-slate-100 mt-5 p-2 rounded shadow-xl border-green-700 border-4">
            <h2 class="text-xl border-black border-b">
              <span class="text-green-700 text-2xl"> 2. </span> Changing the name with a press of a button
            </h2>

            <div class="flex justify-center mt-3">
              <ul class="flex justify-around">
                <li>
                  <button class="border border-red-600 bg-red-600 hover:bg-red-700 hover:border-red-700 text-white font-bold py-1 px-2 rounded" @click="toggeListTitle">Test</button>
                </li>
                <li>
                  <button class="border border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700 text-white font-bold py-1 px-2 rounded" @click="toggeListTitle">Test</button>
                </li>
                <li>
                  <button class="border border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white font-bold py-1 px-2 rounded" @click="toggeListTitle">Test</button>
                </li>
              </ul>
            </div>


          </div>
        </div>

        <div>
          <div class="bg-slate-100 mt-5 p-2 rounded shadow-xl border-blue-700 border-4">
            <h2 class="text-xl border-black border-b">
              <span class="text-blue-700 text-2xl"> 3. </span> Being able to add your own food
            </h2>
          
          </div>
        </div>
      </section>
    </article>
  </main>

</template>