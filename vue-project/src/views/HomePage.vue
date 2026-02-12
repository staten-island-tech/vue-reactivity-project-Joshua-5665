<template>
    <div>
        <h1>Hi This is the Abouts Page</h1>
        <h2>What YOU will be doing here is working for me and sustaining our economy. </h2>
        <h3>Basically, you are our servant</h3>
        <h4>Below, you will see the work button. Clicking it once generates a dollar. Your job is to basically click it 24/7 to make us rich. Easy enough?</h4>
        <h5>Your job starts now</h5>
         <button class="work" @click="increments">Work</button>
        <div class="moneyBox"> ${{ money }}</div>
        <RouterLink to="/work">Home</RouterLink>
        <Upgrades/>
    </div>
</template>

<script setup>
import Upgrades from '@/components/Upgrades.vue'
import money from '@/store/store.js'
    
    function increments() {
        money.value++
    }
</script>

<style>
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
       margin-left: 5px;
    }

</style>