<template>
    <div class="upgradesContainer">
    <p>Utilities</p>
    <button class="upgrade" @click="upgrade1" :disabled="money < price1">Money Tree - ${{ price1 }} x{{ items1 }}</button>
    <button class="upgrade" @click="upgrade2" :disabled="money < price2">Bakery - ${{ price2 }} x{{ items2 }}</button>
    <button class="upgrade" @click="upgrade3" :disabled="money < price3">Farm ${{ price3 }}</button>
    <button class="upgrade" @click="upgrade4" :disabled="money < price4">Factory - ${{ price4 }}</button>
    <button class="upgrade" @click="upgrade5" :disabled="money < price5">Bank - ${{ price5 }}</button>
    <button class="upgrade" @click="upgrade6" :disabled="money < price6">Gold Mine - ${{ price6 }}</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import money from '@/store/store.js'

const price1 = ref(50)
const price2 = ref(200)
const price3 = ref(500)
const price4 = ref(2000)
const price5 = ref(7000)
const price6 = ref(20000)
    
const items1 = ref(0)
const items2 = ref(0)

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
    } 
    

    function upgrade4() {
        money.value-=price4.value
        setInterval(() => {
            money.value+=35
        }, 1000)
        price4.value+=400
    } 
    

    function upgrade5() {
        money.value-=price5.value
        setInterval(() => {
            money.value+=80
        }, 1000)
        price5.value+=2150
    }

    function upgrade6() {
        money.value-=price6.value
        setInterval(() => {
            money.value+=150
        }, 1000)
        price6.value+=11500
    }
</script>

<style>
    .upgrade {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 200px;
        margin: 5px;
        margin-left: 20px;
    }
    .upgradesContainer {
        width: 30vw;
        height: 90vh;
        background-color: grey;
        transform: translate(69vw, -55vh);
    }
    p {
        font-size: 30px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        padding: 20px;
    }

</style>