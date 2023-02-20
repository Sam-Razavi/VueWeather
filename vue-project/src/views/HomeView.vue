<script setup>
    import HeroImage from '../components/HeroImage.vue'
    import SearchBox from '../components/SearchBox.vue'
</script>

<template>
    <HeroImage />

    <SearchBox :api-key="myApiKey" />
</template>

<style scoped></style>

<script>
    import App from '../components/SearchBox.vue'

    export default {
        components: {
            App
        },
        data() {
            return {
                myApiKey: '49a0e74c2597974cdbc787bc28c7c4e7'
            }
        }
    }
</script>
