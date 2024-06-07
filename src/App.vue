<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppServices from './components/AppServices.vue'
import PageFooter from './components/PageFooter.vue'
import PageMain from './components/PageMain.vue';

export default {
    components: {
        AppJumbo,
        AppHeader,
        AppServices,
        PageFooter,
        PageMain
    }
}
</script>

<template>
    <AppHeader />
    <AppJumbo />
    <AppServices />
    <PageMain />
    <PageFooter />
</template>

<style scoped></style>
