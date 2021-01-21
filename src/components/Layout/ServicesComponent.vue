<template>
    <v-row class="mt-5">
      <v-col cols="12" sm="4">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
            <v-img src="https://cdn.pixabay.com/photo/2016/02/21/20/24/courier-1214227_1280.jpg" height="225px">
              <v-card-title class="title white--text">
                <v-row class="fill-height flex-column" justify="space-between">
                  <p class="mt-4 subheading text-left mr-3">
                    ENVIO GRATIS
                  </p>

                  <div>
                    <p
                      class="ma-0 body-1 font-weight-bold font-italic text-left"
                    >
                      Envios todos los días de la semana
                    </p>
                    <p class="caption font-weight-medium font-italic text-left">
                      * Aplica en ordenes superiores a S/ 250
                    </p>
                  </div>
                </v-row>
              </v-card-title>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="4">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
            <v-img src="https://cdn.pixabay.com/photo/2016/11/08/05/20/adventure-1807524_1280.jpg" height="225px">
              <v-card-title class="title white--text">
                <v-row class="fill-height flex-column" justify="space-between">
                  <p class="mt-4 subheading text-left">
                    SOPORTE AMIGABLE
                  </p>

                  <div>
                    <p
                      class="ma-0 body-1 font-weight-bold font-italic text-left"
                    >
                      Soporte dedicado 24/7
                    </p>
                    <p class="caption font-weight-medium font-italic text-left">
                      * Solo Perú
                    </p>
                  </div>
                </v-row>
              </v-card-title>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="4">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
            <v-img src="https://cdn.pixabay.com/photo/2016/08/13/16/49/computer-1591018_1280.jpg" height="225px">
              <v-card-title class="title white--text">
                <v-row class="fill-height flex-column" justify="space-between">
                  <p class="mt-4 subheading text-left">
                    TRANSACCIONES SEGURAS
                  </p>

                  <div>
                    <p
                      class="ma-0 body-1 font-weight-bold font-italic text-left"
                    >
                      Garantia de devolución de dinero
                    </p>
                    <p class="caption font-weight-medium font-italic text-left">
                      * 15 primeros días
                    </p>
                  </div>
                </v-row>
              </v-card-title>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
</template>
<script>
  export default {
    name: "ServicesComponent",
  };
</script>
<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.7;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>