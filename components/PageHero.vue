<template>
    <v-container id="pageHero" class="mx-0 px-5 pt-10" fluid>
        <v-row>
            <v-col class="titleHero">
                {{ title }}
            </v-col>
        </v-row>
        <v-row>
            <v-col v-if="breadcrumb !== 'none'" class="breadcrumbHero">
                <NuxtLink to="/">HOME</NuxtLink>
                <span v-if="breadcrumb == 'show'">&ensp;&ensp;/&ensp;&ensp;</span>
                <NuxtLink v-if="breadcrumb == 'show'" to="/stuecke">
                    PROGRAMM
                </NuxtLink>
                &ensp;&ensp;/&ensp;&ensp;
                {{ title.toUpperCase() }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
// Get props
const { title, breadcrump } = defineProps(['title', 'breadcrumb'])
</script>
  
<style lang="scss" scoped>
#pageHero {
    background-color: #111;
    color: white;
    text-align: center;

    min-height: 30vh;
    // padding-top: 10vh;
    // padding-bottom: 5px;
}

#pageHero a {
    text-decoration: none;
}

.titleHero {
    font-weight: 600;
    font-size: 3rem;
}

.breadcrumbHero {
    font-size: 0.8rem;
}

.breadcrumbHero>a {
    color: white;
}

.breadcrumbHero>a:hover {
    color: lightgrey;
    text-decoration: none;
}
</style>