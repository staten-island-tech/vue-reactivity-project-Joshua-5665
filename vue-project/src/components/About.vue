<template>
    <div>
        <h1>Hi This is the Abouts Page</h1>
        <h2>What YOU will be doing here is working for me and sustaining our economy. </h2>
        <h3>Basically, you are our servant</h3>
        <h4>Below, you will see the work button. Clicking it once generates US a dollar. Your job is to basically click it 24/7 to make us rich. Easy enough?</h4>
        <h5>Your job starts now</h5>
         <button class="work" @click="increments">Work</button>
         <button class="work" @click="increments2" v-if="money >= 50">Work+1</button>
         <button class="work" @click="increments3" v-if="money >= 200">Work+2</button>
         <button class="work" @click="upgrade" v-if="money >= 200">Farm</button>
         <button class="work" @click="upgrade2" v-if="money >= 1000">Bakery</button>
         <button class="work" @click="upgrade3" v-if="money >=2000">Factory</button>
        <div class="moneyBox"> ${{ money }}</div>
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
    function increments3() {
        money.value+=3
    }
    
    const isWorking = ref(false)

    function upgrade() {
        if (isWorking.value) return
        money.value-=100
        isWorking.value = true
        setInterval(()=> {
            money.value+=1
        }, 2000)
    }

    function upgrade2() {
        if(isWorking.value) return

        isWorking.value = true
        setInterval(() => {
            money.value+=10
        }, 2000)
    }

    function upgrade3() {
        if(isWorking.value) return

        isWorking.value = true
        setInterval(() => {
            money.value+=50
        }, 2000)
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