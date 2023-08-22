<template>
    <h2>Kontaktiere Uns:</h2>
    <v-form lazy-validation v-model="Valid" ref="Form">
        <v-container class="text-center">
            <v-text-field label="Name" :min="0" :counter="25" v-model="Field_1" :rules="Rule_1"></v-text-field>
            <v-text-field label="Email" type="Email" :min="0" :counter="25" v-model="Field_2"
                :rules="Rule_2"></v-text-field>
            <v-textarea label="Nachricht" :min="0" :counter="285" :value="Field_3"></v-textarea>
        </v-container>
        <v-btn :disabled="!Valid" type="submit" block class="newsletter-btn" text="Absenden"></v-btn>
    </v-form>
</template>

<script setup>
import { ref } from "vue";

const Valid = ref(true)
const Field_1 = ref('')
const Field_2 = ref('')
const Field_3 = ref('')
const Rule_1 = ref([v => v.length <= 25 || "Max 25 characters",])
const Rule_2 = ref([v => !!v || "Email is required", v => v.length <= 25 || "Max 25 characters", v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || "Email must be valid",])
// const Rule_3 = ref([v => v.length <= 285 || "Max 285 characters",])
</script>
