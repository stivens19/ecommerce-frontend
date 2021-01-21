<template>
  <div>
    <banner-foro></banner-foro>
    <v-container>
      <v-dialog transition="dialog-bottom-transition" max-width="600" v-model="dialog">
        <template v-slot:activator="{ on, attrs }" v-if="$store.state.auth">
          <v-btn
            class="float-right"
            fab
            dark
            color="indigo"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon dark>
              mdi-plus
            </v-icon></v-btn
          >
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="indigo darken-2" dark>AGREGAR POST</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">
                <v-text-field
                  label="Título del post"
                  clearable
                  clear-icon="mdi-close-circle"
                  v-model="send.title"
                ></v-text-field>
                <v-textarea
                  clearable
                  clear-icon="mdi-close-circle"
                  label="Texto del post"
                  v-model="send.description"
                ></v-textarea>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false" color="error">Cerrar</v-btn>
              <v-btn text color="primary" @click="sendPost()">Publicar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <v-row>
        <v-col class="12">
          <v-card class="mt-2" min-width="344" v-for="post in this.posts" :key="post.id">
            <v-card-text>
              <div>{{ post.fecha }}</div>
              <p class="display-1 text--secondary">
                {{ post.title }}
              </p>
              <p>{{ post.user.name }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4" @click="reveal = true">
                Leer Post
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%;"
              >
                <v-card-text class="pb-0">
                  <p>
                    {{ post.description }}
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn text color="teal accent-4" @click="reveal = false">
                    Cerrar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  import axios from "axios";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL =
    process.env.VUE_APP_API_URL || "http://localhost:8000";
  import BannerForo from "@/components/Layout/BannerForo";
  export default {
    name: "Banner",
    data: () => ({
      dialog: false,
      reveal: false,
      posts: [],
      send:{
        title:'',
        description:''
      }
    }),
    mounted() {
      this.getPosts();
    },
    methods: {
      async getPosts() {
        const response = await axios.get("api/posts");
        this.posts = response.data.data;
      },
      sendPost(){
        const userId=this.$store.state.user.id;
        axios.post(`/api/users/${userId}/posts`,this.send)
        .then(res => {
          this.dialog=false;
          this.send.title='';
          this.send.description='';
          this.posts.push(res.data.data)
          this.getPosts();
        })
        .catch(err => {
          console.error(err); 
        })
      }
    },
    components: {
      BannerForo,
    },
  };
</script>
<style>
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }
</style>
