<template>
    <div class="click">
        <p>Upgrades</p>
        <button class="click1" @click="add" v-for="click in clicks" :disabled="money < priceClick">{{ click.name }} - ${{ priceClick }}</button>
        <b>(Multiplies your clicks by 2 for every purchase!)</b>
        <button class="click2" @click="add2" v-for="click2 in clicks2" :disabled="money < priceClick2">{{ click2.name }} - ${{ priceClick2 }}</button>
        <b>(Adds 1 to your total clicks for every purchase!)</b>
    </div>
</template>

<script setup>
    import {click} from "@/store/store.js"
    import {money} from "@/store/store.js"
    import { priceClick } from "@/store/store.js"
    import { priceClick2 } from "@/store/store.js";
    
    const clicks = [
        {name: "Multiplier"},
    ];

    const clicks2 = [
        {name: "Clicks"}
    ];

    function add() {
        money.value-=priceClick.value
        click.value*=2
        priceClick.value*=4
    }

    function add2() {
        money.value-=priceClick2.value
        click.value++
        priceClick2.value*=2
    }
</script>

<style scoped>
    .click{
        display: flex;
        flex-direction: column;
        justify-self: left;
        height: 30vh;
        width: 20vw;
        background: rgb(146, 146, 146);
        top: 30px;
        box-sizing: border-box;
        padding: 20px;
        gap: 10px;
        position:fixed;
    }
    p{
        margin-top: -10px;
    }
    b{
        font-weight: 100;
        font-size: 12px;
    }
</style>