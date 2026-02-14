<template>
    <div class="click">
        <p>Upgrades</p>
        <button class="click1" @click="add" v-for="click in clicks" :disabled="money < priceClick">{{ click.name }} - ${{ priceClick }}</button>
        <b>(Multiplies your clicks by 2 for every purchase!)</b>
    </div>
</template>

<script setup>
    import { ref } from "vue"
    import {click} from "@/store/store.js"
    import {money} from "@/store/store.js"
    import { priceClick } from "@/store/store.js"
    const clicks = ref([
        {name: "Clicks"},
    ])

    function add() {
        click.value*=2
        priceClick.value*=4
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