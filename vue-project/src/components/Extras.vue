<template>
    <div class="jit">
        <p>Useless Buttons</p>
        <button class="bes" v-for="extra in extras">{{ extra.name }}  - <span>iiiiiiiiiii</span> {{ extra.value }}</button>
    </div>
</template>

<script setup>
    const extras = [
        {name: "Dequiliberizer", value: 10},
        {name: "Disable", value: 20},
        {name: "Break", value: 30},
        {name: "Crash", value: 40},
    ];
</script>

<style scoped>
    span {
        color: rgb(214, 214, 214);
    }
    .jit {
        height: 250px;
        width: 200px;
        background-color: rgb(163, 163, 163);
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 320px;
        padding: 20px;
    }
    .bes {
        margin-top: 5px;
        background-color: rgb(214, 214, 214);
    }
    p {
        margin-top: -20px;
    }
    
</style>