<template>
  <div>
    <v-app-bar class="indigo darken-3 d-md-flex justify-center">
      <v-app-bar-nav-icon
        class="d-md-none"
        color="white"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <router-link to="/">
        <v-btn class="d-none d-md-inline-block" text dark>
          Inicio
        </v-btn>
      </router-link>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="d-none d-md-inline-block"
            text
            dark
            v-bind="attrs"
            v-on="on"
          >
            Categorias
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="category in categories" :key="category.id">
            <router-link
            class="text-decoration-none"
              :to="{ name: 'categoria', params: { id: category.id } }"
            >
              <v-btn text dark color="primary"> - {{ category.name }} </v-btn>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
      <router-link to="/foro">
        <v-btn class="d-none d-md-inline-block" text dark>
          Foro
        </v-btn>
      </router-link>

      <v-btn class="d-none d-md-inline-block" text dark>
        Contactar
      </v-btn>
      <v-btn class="red d-none d-md-inline-block" dark>
        Mi Espacio
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item v-if="$store.state.auth">
        <v-avatar color="light-green ma-3">
          <span class="white--text headline text-uppercase">{{
            $store.state.user.name.substr(0, 2)
          }}</span>
        </v-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ $store.state.user.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-else>
        <v-avatar color="red">
          <span class="white--text headline">IV</span>
        </v-avatar>

        <v-list-item-content>
          <v-list-item-title>Invitado</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>INICIO</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>rowing</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link
              to="/foro"
              class="text-decoration-none text--primary d-inline-block"
            >
              <v-list-item-title>BLOG</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>assignment_ind</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>CONTACTAR</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list-item-content>
        <v-list-item-title class="text-center">CATEGORIAS</v-list-item-title>
      </v-list-item-content>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item link v-for="category in categories" :key="category.id">
          <v-list-item-icon>
            <v-icon>adjust</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ category.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import axios from "axios";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL =
    process.env.VUE_APP_API_URL || "http://localhost:8000";
  export default {
    name: "ToolbarBottom",
    data: () => ({
      drawer: false,
      group: null,
      categories: [],
    }),
    mounted() {
      this.getCategories();
    },
    methods: {
      async getCategories() {
        const response = await axios.get("api/categories");
        this.categories = response.data.data;
      },
    },
    watch: {
      group() {
        this.drawer = false;
      },
    },
  };
</script>
