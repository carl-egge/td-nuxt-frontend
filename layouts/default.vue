<template>
    <v-app>

        <TheNavBar />

        <!-- <v-main :class="{ 'reduced-content-width': !isMobile }"> -->
        <v-main>
            <!-- ALWAYS ADD THIS BEFORE LIVE DEPLOYMENT ON TEST SITE -->
            <!-- <div class="text-center text-white" style="background-color: red; height: 25px;">
                Achtung! Dies ist nur eine Testseite!
            </div> -->
            <slot />
        </v-main>

        <TheFooter />

    </v-app>
</template>

<script setup>
/**
 * LAYOUT: default.vue
 *
 * This is the default layout for all pages. It includes the navbar and the footer.
 */

// Set content width
// import { useDisplay } from 'vuetify'
// const display = useDisplay()
// const isMobile = display.smAndDown

</script>

<style lang="scss" scoped>
// .reduced-content-width {
//     width: 70vw;
//     margin: 0 auto !important;
// }
</style>