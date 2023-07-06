<template>
    <v-app>

        <TheNavBar />

        <v-main class="mx-2" :class="{ 'reduced-content-width': !isMobile }">
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

// Fetch all events from the API and put them in the store (only if store is empty)
import { useEventsStore } from '~/store/events'
const eventsStore = useEventsStore()
if (eventsStore.events.length === 0) eventsStore.fetchEvents()

// Set content width
import { useDisplay } from 'vuetify'
const display = useDisplay()
const isMobile = display.smAndDown

</script>

<style lang="scss" scoped>
.reduced-content-width {
    width: 70vw;
    margin: 0 auto !important;
}
</style>