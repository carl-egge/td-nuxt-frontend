<template>
    <div>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none" small screen></v-app-bar-nav-icon>
            <v-toolbar-title>Your Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

            <template v-slot:extension>
                <!--  Add this class to show tabs only on medium -->
                <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex" screen and above>
                    <v-tabs-slider color="yellow"></v-tabs-slider>

                    <v-tab v-for="item in items" :key="item">
                        {{ item }}
                    </v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
        <!-- Add a navigation bar -->
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group>
                    <v-list-item v-for="(item, index) in items">
                        <v-list-item-title @click="tab = index">{{ item }}</v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <!-- Navigation bar ends -->
        <v-content class="ma-5">
            <v-tabs-items v-model="tab" class="d-flex flex-column align-center">
                <v-tab-item v-for="item in items" :key="item">
                    You are on {{ item }}
                </v-tab-item>
            </v-tabs-items>
        </v-content>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
            tab: null,
            items: [
                'web', 'shopping', 'videos', 'images', 'news',
            ],
        }
    }
}
</script>
  