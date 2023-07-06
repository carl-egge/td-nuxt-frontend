<template>
    <v-app>

        <TheNavBar />

        <v-main class="container mx-auto">
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
</script>

<style lang="scss" scoped>
.v-main {
    width: 70vw;
}
</style>