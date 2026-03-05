<template>
    <div class="jit">
        <p>Useless Buttons</p>
        <button class="bes" v-for="extra in extras">{{ extra.name }} - {{ extra.value }}</button>
    </div>
</template>

<script setup>
    const extras = [
        {name: "button1", value: 10},
        {name: "button2", value: 20},
        {name: "button3", value: 30},
        {name: "button4", value: 40},
    ];

</script>

<style scoped>
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
    }
    p {
        margin-top: -20px;
    }
    
</style>