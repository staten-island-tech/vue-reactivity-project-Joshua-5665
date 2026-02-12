<template>
    <div class="upgradesContainer">
    <p>Utilities</p>
    <button class="upgrade" @click="upgrade1" :disabled="money < 20">Money Tree</button>
    <button class="upgrade" @click="upgrade2" :disabled="money < 50">Farm</button>
    <button class="upgrade" @click="upgrade3" :disabled="money < 100">Bakery</button>
    <button class="upgrade" @click="upgrade4" :disabled="money < 200">Factory</button>
    <button class="upgrade" @click="upgrade5" :disabled="money < 400">Bank</button>
    <button class="upgrade" @click="upgrade6" :disabled="money < 800">Gold Mine</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import money from '@/store/store.js'
 

    function upgrade1() {
        if(money.value >= 50) {
            money.value-=50
            setInterval(()=> {
            money.value+=1
        }, 1000)
        } else {
            money.value-=0
        }
        
    }

    function upgrade2() {
        if(money.value >= 100) {
            money.value-=100
            setInterval(() => {
            money.value+=5
        }, 1000)
        } else {
            money.value-=0
        }
    }

    function upgrade3() {
        money.value-=200
        setInterval(() => {
            money.value+=20
        }, 1000)
    }

    function upgrade4() {
        money.value-=500
        setInterval(() => {
            money.value+=50
        }, 1000)
    }

    function upgrade5() {
        money.value-=2000
        setInterval(() => {
            money.value+=100
        }, 1000)
    }

    function upgrade6() {
        money.value-=5000
        setInterval(() => {
            money.value+=200
        }, 1000)
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