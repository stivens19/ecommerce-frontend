<template>
  <v-row>
    <v-col v-for="product in this.products" :key="product.id">
      <v-card class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="280"
          :src="product.image"
          contain
        ></v-img>

        <v-card-title>{{ product.name }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ml-4">
              4.5 (413)
            </div>
          </v-row>

          <div class="my-4 subtitle-1">
            S/ {{ product.price }} • {{ product.category.name }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="agregarCarrito(product)">
            Agregar al carrito
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-snackbar v-model="snackbar">
        Agregado al carrito

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
  </v-row>
</template>
<script>
  import axios from "axios";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL =
    process.env.VUE_APP_API_URL || "http://localhost:8000";
  export default {
    name: "LatestProducts",
    data() {
      return {
        products:[],
        cart:[],
        snackbar: false,
      }
    },
    mounted() {
      this.getProductsLatest();
    },
    methods: {
      async getProductsLatest(){
        const response=await axios.get('api/latestProducts');
        this.products=response.data.data;
      },
      agregarCarrito(product){
        this.cart.push(product)
        localStorage.setItem('cartshop',JSON.stringify(this.cart));
        this.snackbar = true;
      }
    },
    created() {
      let datosCart=JSON.parse(localStorage.getItem('cartshop'));
      if (datosCart === null) {
        this.cart=[]
      }else{
        this.cart=datosCart;
        console.log(this.cart)
      }
    },
  };
</script>
