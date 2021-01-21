<template>
  <v-toolbar class="indigo darken-2 pt-4" extended>
    <v-toolbar-title class="mt-5">
      <v-btn color="grey lighten-5" icon text>
        <v-icon class="size">support</v-icon>
      </v-btn>
      <span class="logo">
        <span class="letter">C</span>
        <span class="letter">O</span>
        <span class="letter">M</span>
        <span class="letter">P</span>
        <span class="letter">U</span>
        <span class="letter">T</span>
        <span class="letter">E</span>
        <span class="letter">C</span>
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu
      class="mt-5"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" fab dark small color="red" v-bind="attrs" v-on="on">
          <v-badge left color="red" content="1"></v-badge>
          <v-icon dark>
            shopping_cart
          </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Carrito de Compras</v-list-item-title>
              <v-list-item-subtitle>Verifique su carrito</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="50"
              max-width="50"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>

            <p class="ml-3 font-weight-medium">
              Lenovo Yoga 510
            </p>
            <span class="price ml-4">$45</span>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="d-block" color="error" dark large>
            Crear Orden
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>

    <v-menu
      class="mt-5"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" fab dark small color="red" v-bind="attrs" v-on="on">
          <v-avatar color="red">
            <span class="white--text headline" v-if="$store.state.user">{{
              $store.state.user.name.substr(0, 2)
            }}</span>
            <span class="white--text headline" v-else>+</span>
          </v-avatar>
        </v-btn>
      </template>

      <v-card>
        <v-divider></v-divider>
        <v-list>
          <span class="ml-2 text--darken-1" v-if="$store.state.user">{{
            $store.state.user.name
          }}</span>
          <v-list-item v-if="$store.state.auth">
            <v-btn class="d-block" color="error" dark large @click="logout">
              Cerrar Sesion
            </v-btn>
          </v-list-item>
          <v-list-item v-else>
            <v-btn class="d-block" color="error" dark large>
              Registrarse
            </v-btn>
          </v-list-item>
          <v-list-item v-if="!$store.state.auth">
            <router-link to="/login" class="d-block text-decoration-none">
              <v-btn class="d-block" color="error" dark large>
                Ingresar
              </v-btn>
            </router-link>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-toolbar>
</template>

<script>
  export default {
    name: "ToolbarTop",
    methods: {
      logout() {
        this.$store.dispatch("logout");
        //reurn
        return this.$router.replace("/login");
      },
    },
  };
</script>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap");
  .logo {
    color: white;
    font-size: 35px;
    font-family: "Sigmar One", cursive;
    letter-spacing: 4px;
  }
  .letter:nth-child(2n - 1) {
    font-size: 38px;
  }
  .size {
    margin-bottom: 10px;
    font-size: 40px !important;
  }
  .price {
    color: #f44336;
  }
  .d-block {
    display: block;
    width: 100%;
  }
</style>
