<template>
    <v-card class="my-7 pa-10">
        <v-img lazy-src="https://picsum.photos/id/11/100/60" src="https://bad.src/not/valid" max-width="400">
            <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                </div>
            </template>
        </v-img>
        <h2>{{ event['name']['de-informal'] }}</h2>
        <p>
            <strong>Wann?</strong> {{ formatDate(event['date_from']) }}
        </p>
        <p v-if="event['has_subevents']">
            <strong>Was?</strong>{{ settings.frontpage_text['de-informal'] }}
        </p>
    </v-card>
</template>
  
<script setup>
// Get slug from route
const { slug } = useRoute().params
// Import composables
const { formatDate } = useFormatDate()
// Get more information about event
const config = useRuntimeConfig()
const { data: event } = await useFetch(config.public.pretixEndpoint + "/events/" + slug, {
    headers: { Authorization: "Token " + config.public.pretixApiKey }
})
if (!event.value) {
    throw createError({ statusCode: 404, statusMessage: 'Events not found' })
}
const { data: settings } = await useFetch(config.public.pretixEndpoint + "/events/" + slug + "/settings", {
    headers: { Authorization: "Token " + config.public.pretixApiKey }
})
if (!settings.value) {
    throw createError({ statusCode: 404, statusMessage: 'Subevents not found' })
}
</script>
  
<style scoped></style>