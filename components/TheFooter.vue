<template>
    <v-footer id="footer">

        <v-container class="text-center text-lg-start justify-content-center 
        justify-content-lg-between p-4 xl-padder border-bottom">

            <!-- DIVIDER -->
            <v-row>
                <v-col class="text-center">
                    <!-- ~~~  -->
                    <v-icon>mdi-minus</v-icon>
                </v-col>
            </v-row>

            <!-- FOOTER MAIN CONTENT -->
            <v-row>
                <v-col>
                    <v-container fluid class="text-center text-md-left">
                        <v-row>
                            <!-- Spalte: WICHTIGE LINKS -->
                            <!-- <v-col md="4" lg="4" xl="3" class="mx-auto mt-4 my-md-3 px-md-0"> -->
                            <v-col>
                                <h6 class="text-uppercase font-weight-bold mb-4">Links</h6>
                                <p>
                                    <NuxtLink to="/stuecke">Unser Programm</NuxtLink>
                                </p>
                                <p>
                                    <NuxtLink to="/impressum">Impressum</NuxtLink>
                                </p>
                                <p>
                                    <NuxtLink to="/datenschutz">Datenschutzerklärung</NuxtLink>
                                </p>
                            </v-col>
                            <!-- Spalte: KONTAKT -->
                            <!-- <v-col md="4" lg="4" xl="3" class="mx-auto my-3 my-md-3 px-md-0"> -->
                            <v-col id="footer-contact-col">
                                <h6 class="text-uppercase font-weight-bold mb-4">Kontakt</h6>
                                <p>
                                    <v-icon>mdi-home</v-icon>Maurienstr.
                                    19, 22305 Hamburg
                                </p>
                                <p>
                                    <v-icon>mdi-email</v-icon><a href="mailto:info@theaterdeck.de">info@theaterdeck.de
                                    </a>
                                </p>
                                <p>
                                    <v-icon>mdi-phone</v-icon>040 6321322
                                </p>
                            </v-col>
                            <!-- Spalte: ANSPRECHBARKEIT -->
                            <v-col md="4" lg="4" xl="3" class="mx-auto mb-4 my-md-3 px-md-0">
                                <h6 class="text-uppercase font-weight-bold mb-4">
                                    Persönlicher Kontakt
                                </h6>
                                <p><strong>Montag</strong> 10:00 bis 12:00 Uhr</p>
                                <p><strong>Donnerstag</strong> 10:00 bis 12:00 Uhr</p>
                                <p>Unser Anrufbeantworter wird täglich abgehört.</p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>

            <!-- BOTTOM LINKS & COPYRIGHT -->
            <!-- &ensp;|&ensp;  -> possible Spacer in footer -->
            <v-row align-h="between" class="copyright">
                <v-col class="text-no-wrap text-center text-md-left">
                    <NuxtLink to="/">
                        © 2022 Theaterdeck Hamburg
                    </NuxtLink>
                </v-col>
                <v-col class="text-center text-md-right">
                    <a href="https://www.facebook.com/theaterdeck" target="_blank" class="mx-3">
                        <v-icon>mdi-facebook</v-icon>
                    </a>
                    <a href="https://www.instagram.com/theaterdeck/" target="_blank" class="mx-3">
                        <v-icon>mdi-instagram</v-icon>
                    </a>
                </v-col>
            </v-row>
        </v-container>


        <!-- <v-row justify="center" no-gutters>
            <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
                {{ link }}
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-col>
        </v-row> -->


    </v-footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#footer {
    background-color: #111;
    color: white;
    font-size: 0.9rem;
}

#footer a {
    color: white;
}

#footer a:hover {
    color: lightgray;
    text-decoration: none;
}

#footer-contact-col i {
    font-size: 0.9rem;
    vertical-align: middle;
    margin-right: 0.5rem;
}

.copyright {
    border-top: 1px solid #eeeeee33;
    padding: 20px 0;
}

.copyright a {
    text-decoration: none;
}

@media (max-width: 768px) {
    .copyright {
        margin: 0 12vw;
    }
}

@media (min-width: 1700px) {
    .xl-padder {
        padding: 20px 15vw !important;
    }
}
</style>