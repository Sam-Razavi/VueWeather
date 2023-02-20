<template>
    <div class="about">
        <h1>Temperature Converter</h1>
        <temp-component></temp-component>
    </div>
</template>

<script>
    import TempComponent from '../components/TempComponent.vue'

    export default {
        name: 'App',
        components: {
            TempComponent
        }
    }
</script>
<style>
    @media (min-width: 1024px) {
        .about {
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
    }
</style>
