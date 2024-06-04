<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppServices from './components/AppServices.vue'

export default {
    components: {
        AppJumbo,
        AppHeader,
        AppServices
    }
}
</script>

<template>
    <AppHeader />
    <AppJumbo />
    <AppServices />
</template>

<style scoped></style>
