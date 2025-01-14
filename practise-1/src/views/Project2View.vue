<script setup>

import { ref } from 'vue';

const firstListName = ref("Favourite food");
const fooditems = ref(['steak', 'chicken']);

</script>

<template>
  <main>
    <article>
      <section class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2 mx-10">
        <div class="bg-slate-100 mt-5 p-2">
          <h1 class="text-2xl border-black border-b">
            Introduction
          </h1>
          <p>
            In this page I get familiar with changeable variables by using "ref()"; the first List will be about the foods I like.
          </p>
        </div>

        <div class="bg-slate-100 mt-5 p-2">
          <h1 class="text-2xl border-black border-b text-center">
            
          </h1>
        </div>
      </section>
    </article>
  </main>

</template>