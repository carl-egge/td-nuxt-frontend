<template>
    <v-container id="pageHero" class="mx-0 px-5 pt-10" :style="'background-image: url(' + background +
        '); background-repeat: no-repeat; background-size: cover; background-position: left top;'" fluid>
        <v-row>
            <v-col class="titleHero ml-8" cols="8">
                Willkommen im Theaterdeck!
                <br /><br />
                <v-btn to="/stuecke" nuxt>
                    Unser Programm
                </v-btn>
            </v-col>
            <v-col>
                <v-container class="text-center">
                    <v-row>
                        <v-col>
                            <h2>Novecento</h2>
                            <hr>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <h2>Pippi Langstrumpf</h2>
                            <hr>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <h2>Willi Wieberg</h2>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
//@ts-ignore
import background from "../assets/images/0-intro.jpg";
</script>
  
<style lang="scss" scoped>
#pageHero {
    background-color: #111;
    color: white;
    min-height: 40vh;
}

#pageHero a {
    text-decoration: none;
}

.titleHero {
    font-weight: 600;
    font-size: 2rem;
}
</style>