<template>
    <v-app-bar :elevation="6">
        <!-- <v-app-bar-title>Theaterdeck</v-app-bar-title> -->
        <v-container>
            <v-btn to="/" nuxt variant="plain">
                <img src="~/assets/images/td-nav-bar-logo-red.svg" width="180" alt="Theaterdeck Logo" />
            </v-btn>
            <v-btn to="/stuecke" nuxt> Programm </v-btn>
            <v-btn to="/schule" nuxt> Schule </v-btn>
            <v-btn to="/vermietung" nuxt> Vermietung </v-btn>
        </v-container>
        <template v-slot:append>
            <v-btn icon="mdi-heart"></v-btn>

            <v-btn icon="mdi-magnify"></v-btn>

            <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
    </v-app-bar>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.router-link-exact-active {
    color: #1976d2 !important;
}
</style>