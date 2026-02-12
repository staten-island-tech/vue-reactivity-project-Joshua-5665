<template>
    <div>
        <h1>Hi This is the Abouts Page</h1>
        <h2>What YOU will be doing here is working for me and sustaining our economy. </h2>
        <h3>Basically, you are our servant</h3>
        <h4>Below, you will see the work button. Clicking it once generates US a dollar. Your job is to basically click it 24/7 to make us rich. Easy enough?</h4>
        <h5>Your job starts now</h5>
         <button class="work" @click="increments">Work</button>
         <button class="work" @click="increments2" v-if="money > 10">Work+1</button>
        <div class="moneyBox">{{ money }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
    const money = ref(0);
    function increments() {
        money.value++
    }
    
    function increments2() {
        money.value+=2
    }
</script>

<style scoped>
    .work{
        height: 50px;
        width: 100px;
        margin: 5px;
    }

    .moneyBox{
       height: 100px;
       width: 200px;
       background-color: rgb(168, 168, 168);
       margin-top: 20px;
       margin-left: 20px;
    }

</style>