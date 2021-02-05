<template>
  <section class="container">
    <h1>Demo examples of vue-chartjs</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <grafico></grafico>
      </div>
    </div>
  </section>
</template>
<script>
  import axios from "axios";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL =
    process.env.VUE_APP_API_URL || "http://localhost:8000";
  import Grafico from "@/components/Layout/Grafico.vue";
  export default {
    name: "Espacio",
    components: {
      Grafico,
    },
  };
</script>
