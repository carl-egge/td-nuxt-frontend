<template>
    <div>
        <h1>PROGRAMM</h1>
        <div v-for="event in eventsStore.events">
            <EventListItem :event="event" />
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