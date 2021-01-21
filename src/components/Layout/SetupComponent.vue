<template>
  <v-card width="720">
    <v-img
      height="200px"
      src="https://cdn.pixabay.com/photo/2019/08/14/15/15/macbook-4405973_1280.jpg"
    >
      <v-card-title class="white--text mt-8">
        <v-avatar size="56">
          <img
            alt="user"
            src="https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_1280.jpg"
          />
        </v-avatar>
        <p class="ml-3">
          ARMA TU SETUP CON NOSOTROS
        </p>
      </v-card-title>
    </v-img>

    <v-card-text>
      <div class="font-weight-bold ml-8 mb-2">
        CARACTERÍSTICA
      </div>

      <v-timeline align-top dense>
        <v-timeline-item color="red" small>
          <div>
            <div class="font-weight-normal">
              AL MEJOR <strong>PRECIO</strong>
            </div>
            <div>Precios que se acomoden según tu necesidad</div>
          </div>
        </v-timeline-item>
        <v-timeline-item color="primary" small>
          <div>
            <div class="font-weight-normal">
              CON LA MEJOR <strong>CALIDAD</strong>
            </div>
            <div>Calidad en todos los productos</div>
          </div>
        </v-timeline-item>
        <v-timeline-item color="lime darken-1" small>
          <div>
            <div class="font-weight-normal">
              SEGURIDAD EN LOS <strong>ENVIOS</strong>
            </div>
            <div>Los envios son rapidos y seguros</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name: "SetupComponent",
  };
</script>
