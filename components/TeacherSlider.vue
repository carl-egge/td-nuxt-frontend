<template>
    <v-carousel cycle height="400" hide-delimiters show-arrows="hover">
        <v-carousel-item v-for="i in [1, 2]" :key="i">
            <v-row class="mx-4 h-100">
                <v-col>
                    <v-card class="mx-auto" max-width="300" height="100%">
                        <v-img class="align-end text-white" height="200"
                            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" cover>
                        </v-img>
                        <v-card-title>
                            Niklas Heinecke
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="mx-auto" max-width="300" height="100%">
                        <v-img class="align-end text-white" height="200"
                            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" cover>
                        </v-img>
                        <v-card-title>
                            Niklas Heinecke
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="mx-auto" max-width="300" height="100%">
                        <v-img class="align-end text-white" height="200"
                            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" cover>
                        </v-img>
                        <v-card-title>
                            Niklas Heinecke
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>