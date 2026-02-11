
<template>
  <div class="displayBox">
    <h2>Hi</h2>
    <button class="rev">Pull</button>
  </div>
</template>

<script setup>
  const chamber = [
    {num: 1},
    {num: 2},
    {num: 3},
    {num: 4},
    {num: 5},
    {num: 6},
  ];

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