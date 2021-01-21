<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="24" max-width="444" class="mx-auto">
          <v-system-bar lights-out></v-system-bar>
          <v-carousel
            :continuous="false"
            :cycle="cycle"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="300"
          >
            <v-carousel-item>
              <v-sheet color="indigo darken-3" height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <v-img
                    src="https://cdn.pixabay.com/photo/2017/08/07/19/45/ecommerce-2607114_1280.jpg"
                  ></v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-img
                  src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>COMPUTEC</v-list-item-title>
                <v-list-item-subtitle
                  >Realiza transacciones seguras.</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="2" shaped tile class="pa-5">
        <v-card-title primary-title>
          AVENTURATE A GRANDES CAMBIOS
        </v-card-title>
          <v-divider></v-divider>
          <form @submit.prevent="login">
            <v-text-field
              label="Email"
              v-model="form.email"
              type="email"
              required
            ></v-text-field>
            <v-text-field
            class="mt-3"
              label="Contraseña"
              required
              v-model="form.password"
              type="password"
            ></v-text-field>
            <v-btn type="submit" depressed class="d-block mt-3" color="primary">
              INGRESAR
            </v-btn>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  /*import axios from "axios";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:8000";*/
  export default {
    data() {
      return {
        form: {
          email: "stivens70espinoza@gmail.com",
          password: "12345678",
        },
      };
    },

    methods: {
      /*login() {
        axios.get("/sanctum/csrf-cookie").then(() => {
          axios
            .post("/login", this.form)
            .then((res) => {
              this.user = res.data;
            })
            .catch((err) => {
              console.error(err);
            });
        });
      },*/
      /*logout() {
        axios
          .post("/logout")
          .then(() => {
            this.user = {};
          })
          .catch(() => {});
      },*/
      async login() {
        await this.$store.dispatch("login", this.form);
        return this.$router.replace("/");
      },
    },
  };
</script>

<style scoped></style>
