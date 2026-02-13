<template>
    <div class="utilityContainer">
    <div class="upgradesContainer">
        <p>Utilities</p>
    <button class="upgrade" @click="upgrade1" :disabled="money < price1">Money Tree - ${{ price1 }}</button>
    <button class="upgrade" @click="upgrade2" :disabled="money < price2">Bakery - ${{ price2 }}</button>
    <button class="upgrade" @click="upgrade3" :disabled="money < price3">Farm - ${{ price3 }}</button>
    <button class="upgrade" @click="upgrade4" :disabled="money < price4">Factory - ${{ price4 }}</button>
    <button class="upgrade" @click="upgrade5" :disabled="money < price5">Bank - ${{ price5 }}</button>
    <button class="upgrade" @click="upgrade6" :disabled="money < price6">Gold Mine - ${{ price6 }}</button>
    <button class="upgrade" @click="upgrade7" :disabled="money < price7">Money Kingdom - ${{ price7 }}</button>
    </div>
    <div class="itemCounter">
        <div class="items">x{{ items1 }}</div>
        <div class="items">x{{ items2 }}</div>
        <div class="items">x{{ items3 }}</div>
        <div class="items">x{{ items4 }}</div>
        <div class="items">x{{ items5 }}</div>
        <div class="items">x{{ items6 }}</div>
        <div class="items">x{{ items7 }}</div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import {money} from '@/store/store.js'
import {items1} from '@/store/store.js'
import {items2} from '@/store/store.js'
import {items3} from '@/store/store.js'
import {items4} from '@/store/store.js'
import {items5} from '@/store/store.js'
import {items6} from '@/store/store.js'
import {items7} from '@/store/store.js'

const price1 = ref(50)
const price2 = ref(200)
const price3 = ref(500)
const price4 = ref(2000)
const price5 = ref(11250)
const price6 = ref(200000)
const price7 = ref(1250000)

    function upgrade1() {
        money.value-=price1.value
        setInterval(()=> {
            money.value+=1
        }, 1000)
        price1.value+=25
        items1.value++
    } 
    
    function upgrade2() {
        money.value-=price2.value 
        setInterval(() => {
            money.value+=4
        }, 1000)
        price2.value+=50
        items2.value++
     } 
    

    function upgrade3() {
        money.value-=price3.value
        setInterval(() => {
            money.value+=10
        }, 1000)
        price3.value+=80
        items3.value++
    } 
    

    function upgrade4() {
        money.value-=price4.value
        setInterval(() => {
            money.value+=35
        }, 1000)
        price4.value+=400
        items4.value++
    } 
    

    function upgrade5() {
        money.value-=price5.value
        setInterval(() => {
            money.value+=80
        }, 1000)
        price5.value+=2150
        items5.value++
    }

    function upgrade6() {
        money.value-=price6.value
        setInterval(() => {
            money.value+=180
        }, 1000)
        price6.value+=11500
        items6.value++
    }

     function upgrade7() {
        money.value-=price7.value
        setInterval(() => {
            money.value+=550
        }, 1000)
        price7.value+=210200
        items7.value++
    }
</script>

<style>
    .items {
        background-color: rgb(235, 235, 235);
        height: 50px;
        width: 100px;
        margin: 5px;
        
        align-content: center;
        border-radius: 20px;
        font-size: 20px;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    .itemCounter {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 7.5vh;
    }
    .upgrade {
        display: flex;
        align-items: center;
        height: 50px;
        width: 200px;
        margin-top: 10px;
        margin-left: 20px;
    }

    .utilityContainer{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 30vw;
        height: 70vh;
        background-color: grey;
        justify-self: right;
        margin-right: 10px;
        margin-top: -310px;
        overflow: hidden;
    }
    p {
        font-size: 30px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        transform: translate(-50px, 20px);
    }
    .upgradesContainer{
        margin-top: -30px;
    }
</style>