<template>
    <v-container id="newsletter-footer">
        <v-row>
            <v-col v-if="!isMobile" cols="4">
                <v-img class="bg-white" width="300" :aspect-ratio="1"
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" cover>
                </v-img>
            </v-col>
            <v-col class="pa-0">
                <v-container>
                    <v-row class="text-center">
                        <v-col>
                            <h4>
                                <v-icon style="font-size: large;">mdi-email</v-icon> Unser Newsletter
                            </h4>
                        </v-col>
                    </v-row>
                    <v-row class="text-center">
                        <v-col class="mx-auto my-2">
                            Abonnieren Sie unseren Newsletter und folgen Sie uns bei Social Media um
                            immer auf dem neustem Stand zu bleiben.
                        </v-col>
                    </v-row>
                    <v-row class="justify-content-center">
                        <v-col>
                            <v-form validate-on="submit lazy" @submit.prevent="submit" ref="form">
                                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required
                                    class="ma-2"></v-text-field>
                                <v-btn :loading="loading" type="submit" block class="newsletter-btn"
                                    text="Ahoi und Enter!"></v-btn>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const loading = ref(false);
const form = ref<HTMLFormElement>()

const email = ref("");
const emailRules = [
    (v: string) => !!v || "Dieses Feld darf nicht leer sein",
    (v: string) => /.+@.+\..+/.test(v) || "Bitte gib eine gültige E-Mail Adresse ein",
];

/**
 * Submit the form
 *
 * TODO: Implement Sign Up for Newsletter
 */
const submit = async () => {
    const { valid } = await form.value?.validate();
    if (!valid) return;
    loading.value = true;
    setTimeout(() => {
        alert("Not implemented yet!");
        loading.value = false;
    }, 2000);
};

// Check if mobile
import { useDisplay } from 'vuetify'
const display = useDisplay()
const isMobile = display.smAndDown
</script>
  
<style lang="scss" scoped>
#newsletter-footer {
    background-color: #f0f0f0;
    color: black;
    padding: 20px;
}

.newsletter-textarea {
    background: none;
    border-radius: 0;
    border: none;
    border-bottom: 2px solid rgb(125, 125, 125);
}

.newsletter-textarea:focus {
    box-shadow: none;
    border-bottom: 2px solid #ce172d;
}
</style>