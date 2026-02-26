<template>
    <div class="information" v-for="upgrade in upgrades">
        {{ upgrade.name }} | ${{upgrade.perSecond}} per second
    </div>
</template>

<script setup>

    const upgrades = [
        {name: "Money Tree", perSecond: 1,},
        {name: "Bakery", perSecond: 4,},
        {name: "Farm", perSecond: 10,},
        {name: "Factory", perSecond: 35,},
        {name: "Bank", perSecond: 110,},
        {name: "Gold Mine", perSecond: 500,},
        {name: "Money Kingdom", perSecond: 4650,}
    ];
</script>

<style scoped>
    .information {
        height: 4vh;
        width: 20vw;
        background-color: rgb(154, 154, 154);
        justify-self: right;
        margin-right: 10px;
        transform: translateY(10px);
        box-sizing: border-box;
        padding: 5px;
    }
</style>