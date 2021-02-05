<template>
<v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo darken-2 white--text text-center"
    >
      <v-card-text>
        <v-btn
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            facebook
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
       NETFIS ESTA COMPROMITEDO CON LA SATISFACCION DE SUS CLIENTES POR ELLO BUSCA LLEGAR A TODOS POR EL GRAN MUNDO TECNOLOGICO QUE SE ABRE PASO EN ESTA SITUACION DE EMERGENCIA, LOS PRODUCTOS DE NETFIS TRAEN UNA GARANTIA DE CALIDAD.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>STIVENS ESPINOZA REINA</strong>
      </v-card-text>
    </v-card>
  </v-footer>

</template>
<script>
  export default {
    name: "FooterComponent",
  };
</script>