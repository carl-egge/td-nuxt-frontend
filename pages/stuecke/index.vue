<template>
    <div>
        <PageHero title="Programm" breadcrumb="home" />
        <div v-if="eventsStore.countEvents > 0" v-for="event in eventsStore.getAll">
            <EventListItem :event="event" />
        </div>
        <div v-else>
            <p>Keine Events gefunden</p>
            <v-btn to="/stuecke" nuxt class="my-4"> Erneut Versuchen </v-btn>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
/**
 * PAGE: /stuecke
 * 
 * This page shows a list of all events.
 * We get the events from the store.
 */

import { useEventsStore } from '~/store/events';
const eventsStore = useEventsStore();
if (eventsStore.events.length === 0) {
    throw createError({ statusCode: 404, statusMessage: 'No Events found' })
}
</script>

<style lang="scss" scoped></style>