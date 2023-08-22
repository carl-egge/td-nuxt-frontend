<template>
    <!-- Fullscreen Popover NavigationDialog on Phones -->
    <v-app-bar v-if="isMobile" scroll-behavior="elevate" rounded>

        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-menu" v-bind="props">
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <div class="h-75 d-flex flex-column justify-center">
                        <v-btn to="/" nuxt class="my-4" @click.prevent="dialog = false"> Home </v-btn>
                        <v-btn to="/stuecke" nuxt class="my-4" @click.prevent="dialog = false"> Programm </v-btn>
                        <v-btn to="/schule" nuxt class="my-4" @click.prevent="dialog = false"> Schule </v-btn>
                        <v-btn to="/vermietung" nuxt class="my-4" @click.prevent="dialog = false"> Vermietung </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-btn to="/" nuxt variant="plain">
            <img src="~/assets/images/td-nav-bar-logo-red.svg" width="140" alt="Theaterdeck Logo" />
        </v-btn>

        <template v-slot:append>
            <v-btn icon="mdi-cart"></v-btn>
            <!-- <v-btn icon="mdi-magnify"></v-btn> -->
            <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
        </template>

    </v-app-bar>

    <!-- Normal Navigation Bar on Desktop -->
    <v-app-bar v-else scroll-behavior="elevate">

        <!-- <v-app-bar-title>Theaterdeck</v-app-bar-title> -->
        <v-btn to="/" nuxt variant="plain">
            <img src="~/assets/images/td-nav-bar-logo-red.svg" width="180" alt="Theaterdeck Logo" />
        </v-btn>
        <v-btn to="/stuecke" nuxt> Programm </v-btn>
        <v-btn to="/schule" nuxt> Schule </v-btn>
        <v-btn to="/vermietung" nuxt> Vermietung </v-btn>

        <template v-slot:append>
            <v-btn icon="mdi-cart"></v-btn>
            <!-- <v-btn icon="mdi-magnify"></v-btn> -->
            <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
        </template>

    </v-app-bar>
</template>

<script setup>
import { computed, unref } from 'vue'
import { useDisplay } from 'vuetify'

const display = useDisplay()

const isMobile = computed(() => {
    return unref(display.smAndDown)
})
const dialog = ref(false)
</script>

<style lang="scss" scoped>
.router-link-exact-active {
    color: #1976d2 !important;
}

.v-btn--variant-plain {
    opacity: 1 !important;
}
</style>