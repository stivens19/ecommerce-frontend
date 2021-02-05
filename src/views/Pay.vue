<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="12" v-if="!paidFor">
        <v-card class="pa-2" outlined tile>
          <h2>PAGAR</h2>
        </v-card>
        <v-card class="pa-2" outlined tile>
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  RESUMEN
                </div>
                <v-list-item-title class="headline mb-1">
                  TOTAL
                </v-list-item-title>
                <v-list-item-subtitle
                  ><h1 class="text--primary text-right">
                    S/{{ this.total }}
                  </h1></v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <div v-if="paidFor">
              <h1>Noice, you bought a beautiful lamp!</h1>
            </div>

            <div class="pago" ref="paypal"></div>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="12" v-if="paidFor">
        <v-card class="pa-2" outlined tile>
          <v-img
            src="https://www.flaticon.com/svg/vstatic/svg/2328/2328960.svg?token=exp=1611429720~hmac=169a57e0d174660fa593e469e02052a8"
            width="250"
            class="d"
          ></v-img>
        </v-card>
        <v-card class="pa-2" outlined tile>
          <v-card class="mx-auto" outlined>
            <h2>El pago se realizo con exito</h2>
            <p>Gracias por comprar en COMPUTEC-Plazo de entrega en 30 dias</p>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL =
    process.env.VUE_APP_API_URL || "http://localhost:8000";
  // import image from "../assets/lamp.png"
  export default {
    name: "HelloWorld",

    data: function() {
      return {
        loaded: false,
        paidFor: false,
        cartproducts: [],
        total: 0,
        preciodolar: 0,
      };
    },
    mounted: function() {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AfzXVRstBmeWOUBeKj8ID1svZoODOh7RzXpjXBEDORCPNKWygVheyIMrucgpQxE7G8wSxX0dDT6b1JNG";
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
      this.calcularTotal();
      this.cambiarMoneda();
    },
    methods: {
      limpiar() {
        this.total = 0;
        this.preciodolar= 0,
        this.cartproducts=[]
        localStorage.setItem("cartshop", JSON.stringify(this.cartproducts));
      },
      async cambiarMoneda() {
        const token = "k4d2956bd531ab61d44f4fa07304b20e13913815";
        const resp = await fetch(
          "https://dni.optimizeperu.com/api/tipo-cambio?format=json",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await resp.json();
        this.preciodolar = parseInt(
          Number(this.total) / Number(result.cambio_actual.venta)
        );
        console.log(this.preciodolar);
      },
      async enviarOrden() {
        const userId = this.$store.state.user.id;
        const orders = await axios.post(`/api/users/${userId}/orders`);
        let orderId = orders.data.data.id;
        const payments = await axios.post(`/api/orders/${orderId}/payments`, {
          amount: this.total,
        });
        console.log(payments);
        this.cartproducts.forEach(async ({ id }) => {
          let orderprod = await axios.post(`/api/orders/${orderId}/products`, {
            product_id: id,
          });
          console.log(orderprod);
        });

        this.limpiar()
      },
      setLoaded: function() {
        this.loaded = true;
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: "Realizar pago de la orden",
                    amount: {
                      currency_code: "USD",
                      value: this.preciodolar,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              this.paidFor = true;
              console.log(order);
              this.enviarOrden();
            },
            onError: (err) => {
              console.log(err);
            },
          })
          .render(this.$refs.paypal);
      },
      calcularTotal() {
        this.cartproducts.forEach(({ price }) => {
          this.total += price;
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
<style>
  .pago {
    display: flex;
    justify-content: center;
  }
  .d {
    margin: auto auto;
  }
</style>
