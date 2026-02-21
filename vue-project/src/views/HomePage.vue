<template>
    <div class="word">
        <h1>Become a Billionaire</h1>
        <h2>Your job starts now</h2>
         <button class="work" @click="increments">Work</button>
         <a>Per Second: ${{ perClick }}</a>
        <div class="moneyBox"> Income: ${{ money }}</div>
        <RouterLink to="/work">Gamble</RouterLink>
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
import {perClick} from '@/store/store.js'
    
    function increments() {
        money.value+=click.value
    }

</script>

<style>
    .work{
        height: 50px;
        width: 100px;
        margin: 5px;
        align-items: center;
        background-color: rgb(196, 196, 196);
        border-radius: 10px;
        cursor: pointer;
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
    a{
        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    body{
        background-color: rgb(68, 128, 50);
    }
</style>