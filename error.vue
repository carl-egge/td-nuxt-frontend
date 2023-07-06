<template>
    <v-card class="mx-auto my-10" max-width="344">
        <v-card-item class="text-center">
            <div>
                <div class="text-overline mb-2">
                    {{ error.statusCode }}
                </div>
                <div class="text-h3 mb-3">
                    Ooops.
                </div>
                <div class="text-caption">{{ error.message }}</div>
            </div>
        </v-card-item>

        <v-card-actions class="flex justify-center">
            <v-btn variant="outlined" @click="handleError">
                Go Home
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
  
<script setup>
defineProps({
    error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>