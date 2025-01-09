<script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'


    // This first api just displays data from the JSON PlACEHOLDER api at: https://jsonplaceholder.typicode.com/

  const firstData = ref(null)
  const outputtingData = async () => {
    const testUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    try {
      const response = await axios.get(testUrl);
      const firstTestData = ref(response['data']['title']);
      firstData.value = firstTestData
      console.log(firstTestData);
    } catch (error) {
      console.error(error);
    }
  }
  outputtingData();

</script>

<template>
  <main>
    <article class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      <section class="m-2 md:m-6 bg-slate-200 p-2 rounded shadow-xl">
        <h1>Explanation</h1>
        <p>Api's are used everywhere and in this page I use Api's for various function such displaying data</p>
      </section>

      <section class="m-2 md:m-6 bg-slate-200 p-2 rounded shadow-xl">
        <div class="mb-3  border-b border-black">
          <h1>Outputting a single string of data</h1>
          <p>API used: jsonplaceholder posts</p>
        </div>
        <p>
          {{ firstData }}
        </p>
        
      </section>

      <section class="m-2 md:m-6 bg-slate-200 p-2 rounded shadow-xl">
        <div class="mb-3  border-b border-black">
          <h1>showing prices of various bitcoins</h1>
          <p>API used: jsonplaceholder posts</p>
        </div>

      </section>
    </article>
  </main>
</template>