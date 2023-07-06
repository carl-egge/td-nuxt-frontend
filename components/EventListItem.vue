<template>
    <v-container>
        <v-row class="my-2 border rounded" @click="goToEvent(event.slug)">
            <v-col class="pa-0" cols="3">
                <v-img lazy-src="https://picsum.photos/id/11/100/60" src="https://bad.src/not/valid" cover>
                    <template v-slot:placeholder>
                        <div class="d-flex align-center justify-center fill-height">
                            <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                        </div>
                    </template>
                </v-img>
            </v-col>
            <v-col>
                <h2>{{ event['name']['de'] }}</h2>
                <p>
                    <strong>Wann?</strong> {{ formatDate(event['date_from']) }}
                </p>
                <p>
                    <strong>Was?</strong> {{ event['desc']['de'] }}
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup>
// Get props
const { event } = defineProps(['event'])
// Import composables
const { formatDate } = useFormatDate()
// Navigate to event page
const goToEvent = (slug) => navigateTo('/stuecke/' + slug)
</script>
  
<style scoped>
.v-row:hover {
    background-color: #f5f5f5;
}
</style>