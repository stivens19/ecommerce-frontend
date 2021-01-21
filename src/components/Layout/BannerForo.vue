<template>
  <v-carousel height="52vh" cycle>
    <v-carousel-item
      src="https://cdn.pixabay.com/photo/2015/01/27/20/40/notebook-614213_1280.jpg"
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-row class="fill-height" align="center" justify="center">
        <div class="display-3">
          <span class="sz">COMPARTE CON LA COMUNIDAD</span>
        </div>
      </v-row>
    </v-carousel-item>
    <v-carousel-item
      src="https://cdn.pixabay.com/photo/2018/05/08/08/42/handshake-3382503_1280.jpg"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-row class="fill-height" align="center" justify="center">
        <div class="display-3 sz">
          <span class="sz">AYUDA A OTROS EN SU BUSQUEDA</span>
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: "BannerForo",
  };
</script>
<style>
  .sz {
    font-size: 1.3rem !important;
  }
  @media screen and (min-width: 450px) {
    .sz {
      font-size: 3rem !important;
    }
  }
</style>
