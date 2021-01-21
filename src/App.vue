<template>
  <v-app>
    <toolbar-top></toolbar-top>
    <toolbar-bottom></toolbar-bottom>

    <router-view />
    
    <footer-component></footer-component>
  </v-app>
</template>

<script>
  import ToolbarTop from "./components/Layout/ToolbarTop";
  import ToolbarBottom from "./components/Layout/ToolbarBottom";
  import FooterComponent from "./components/Layout/FooterComponent";
  export default {
    name: "App",

    components: {
      ToolbarTop,
      ToolbarBottom,
      FooterComponent,
    },

    data: () => ({
      //
    }),
  };
</script>
