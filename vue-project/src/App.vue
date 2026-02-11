
<template>
  <div class="displayBox">
    <h2>Hi</h2>
    <button class="rev">Pull</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
  const chamber = ref([
    
  ])

const rev = document.querySelector('.rev');
const displayBox = document.querySelector('.displayBox');
rev.addEventListener('click', ()=> {
   const prob = Math.floor(Math.random * chamber.length);
   const bull = chamber[prob];
   displayBox.innerHTML = 
   `<h1>${bull.num}</h1>
   `
})
</script>

<style scoped>

  
</style>