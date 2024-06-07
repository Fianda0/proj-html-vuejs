<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppServices from './components/AppServices.vue'
import PageFooter from './components/PageFooter.vue'

export default {
    components: {
        AppJumbo,
        AppHeader,
        AppServices,
        PageFooter
    }
}
</script>

<template>
    <AppHeader />
    <AppJumbo />
    <AppServices />
    <PageFooter />
</template>

<style scoped></style>
