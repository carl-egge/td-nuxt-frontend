<template>
    <div>
        <PageHero title="Programm" breadcrumb="home" />
        <div v-if="eventsStore.countEvents > 0" v-for="event in eventsStore.getAll">
            <EventListItem :event="event" />
        </div>
        <div v-else class="text-center">
            <p class="my-6">Keine Events gefunden</p>
            <v-btn class="my-4">
                <a href="/stuecke"> Erneut Versuchen </a>
            </v-btn>
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
</script>

<style lang="scss" scoped></style>