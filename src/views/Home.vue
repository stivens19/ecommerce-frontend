<template>
  <v-container fluid>
    <v-row>
      <v-col class="sm-12 md-8">
        <carousel-slide></carousel-slide>
      </v-col>

      <v-col class="sm-12 md-4">
        <setup-component></setup-component>
      </v-col>
    </v-row>
    <services-component></services-component>
    <h1 class="text-center mt-5">ÚLTIMOS PRODUCTOS</h1>
    <v-divider></v-divider>
    <latest-products></latest-products>
    <h1 class="text-center mt-5">RESEÑAS</h1>
    <v-divider></v-divider>
    <reviews-component></reviews-component>
    <v-divider class="mb-3 mt-3"></v-divider>
  </v-container>
  
</template>

<script>
  // @ is an alias to /src
  import CarouselSlide from "@/components/Layout/CarouselSlide";
  import SetupComponent from "@/components/Layout/SetupComponent";
  import ServicesComponent from "@/components/Layout/ServicesComponent";
  import LatestProducts from "@/components/Layout/LatestProducts";
  import ReviewsComponent from "@/components/Layout/ReviewsComponent";
  export default {
    name: "Home",
    components: {
      CarouselSlide,
      SetupComponent,
      ServicesComponent,
      LatestProducts,
      ReviewsComponent,
    },
  };
</script>
