<template>
    <v-container class="cite my-4" :style="'background-image: url(' + background +
        '); background-repeat: no-repeat; background-size: cover; background-position: center;'" fluid>
        <v-row>
            <v-col class="text-white cite-text">
                "Es wird immer jemanden geben <br />der die Hoffnung nicht aufgibt."
                <br />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
//@ts-ignore
import background from "../assets/images/0-footer.jpg";
</script>
  
<style scoped>
.cite {
    height: 30vh;
}

.cite-text {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding-top: 8vh;
}
</style>