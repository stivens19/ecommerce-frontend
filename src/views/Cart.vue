<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
        <v-card class="pa-2" outlined tile>
          <h2>CARRITO DE COMPRAS (2)</h2>
        </v-card>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Imagen
                </th>
                <th class="text-left">
                  Nombre
                </th>
                <th class="text-left">
                  Precio
                </th>
                <th class="text-left">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in cartproducts" :key="product.id">
                <td>
                  <v-img :src="product.image" max-width="100"></v-img>
                </td>
                <td>{{ product.name }}</td>
                <td>S/ {{ product.price }}</td>
                <td>
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="red accent-3"
                    @click="eliminarProductos(index)"
                  >
                    X
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined tile>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  RESUMEN DE ORDEN
                </div>
                <v-list-item-title class="headline mb-1">
                  SUBTOTAL
                </v-list-item-title>
                <v-list-item-subtitle
                  ><h3 class="text--primary text-right">
                    S/{{ this.subtotal }}
                  </h3></v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <router-link class="text-decoration-none d-block" to="/pay">
                <v-btn class="d-block white--text" color="red">
                  ORDENAR
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        cartproducts: [],
        subtotal: 0,
      };
    },
    mounted() {
      this.calcularSubtotal();
    },
    methods: {
      eliminarProductos(index) {
        this.subtotal -= this.cartproducts[index].price * 1;
        this.cartproducts.splice(index, 1);
        localStorage.setItem("cartshop", JSON.stringify(this.cartproducts));
      },
      calcularSubtotal() {
        this.cartproducts.forEach(({ price }) => {
          this.subtotal += price;
        });
      },
    },
    created() {
      let datosCart = JSON.parse(localStorage.getItem("cartshop"));
      if (datosCart === null) {
        this.cartproducts = [];
      } else {
        this.cartproducts = datosCart;

        console.log(this.cartproducts);
      }
    },
  };
</script>
