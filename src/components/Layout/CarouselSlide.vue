<template>
  <v-carousel cycle v-model="model" elevation-10>
    <v-carousel-item>
      <v-sheet color="grey darken-4" height="100%" tile>
        <v-row class="fill-height" align="center" justify="space-around">
          <div>
            <img
              src="https://i.ibb.co/5sVh0FL/pixlr-bg-result.png"
              height="600"
            />
          </div>
          <div>
          <h2 class="mr-5">SE PARTE DEL CAMMBIO TECNOLÓGICO</h2>  
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
        <v-carousel-item>
      <v-sheet color="grey darken-4" height="100%" tile>
        <v-row class="fill-height" align="center" justify="space-around">
          <div>
           <h2 class="mt-4">NO SE QUE PONER :V</h2>
          </div>
          <div>
          <img src="https://i.ibb.co/bdWbPSf/pixlr-bg-result.png" alt="pixlr-bg-result" border="0">
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    name: "CarouselSlide",
  };
</script>
<style>

</style>