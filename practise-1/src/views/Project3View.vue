<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'


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
            In this page I will include every step of CRUD (Create, Read, Update and Delete) For each step it will show which functionality it is. I will do this with JSON file that contains a list of random experiences.
          </p>
        </div>

        <div class="bg-slate-100 mt-5 p-2">
          <h1 class="text-2xl border-black border-b text-center">
            1. Creating a post
          </h1>
          <div class="mt-4 flex justify-center">
            <RouterLink class="bg-green-500 text-white rounded p-1 hover:bg-green-600" to="/">Creation page</RouterLink>
          </div>
        </div>
      </section>

      <section class="mx-10 mt-4">
        <div class="bg-slate-100 p-2">
          <h1 class="text-2xl border-black border-b  mb-3">2. Read</h1>
          <table>
            <thead>
              <tr class="w-100">
                <th>ID</th>
                <th>Date</th>
                <th>Experience</th>
                <th>Made by</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  
                </tr>
              </tbody>
          </table>
        </div>
      </section>
    </article>
  </main>

</template>