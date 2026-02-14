<template>
    <div class="word">
        <h1>Become a Billionaire</h1>
        <h2>Your job starts now</h2>
         <button class="work" @click="increments">Work</button>
        <div class="moneyBox"> ${{ money }}</div>
        <RouterLink to="/work">Home</RouterLink>
        <Upgrades/>
        <Information/>
        <Clickups/>
    </div>
</template>

<script setup>
import Upgrades from '@/components/Upgrades.vue'
import Information from '@/components/Information.vue'
import Clickups from '@/components/Clickups.vue'
import { click } from '@/store/store.js'
import {money} from '@/store/store.js'
    
    function increments() {
        money.value+=click.value
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
       align-content: center;
       justify-self: center;
    }
    .word{
        height: 80vh;
        width: 100vw; 
        text-align: center;
    }

</style>