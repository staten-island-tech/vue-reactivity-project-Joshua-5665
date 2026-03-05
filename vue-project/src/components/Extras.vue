<template>
    <div>
        <button v-for="extra in extras">{{ extra.name }}</button>
    </div>
</template>

<script setup>
    import { extras } from '@/store/store';

</script>

<style lang="scss" scoped>

</style>