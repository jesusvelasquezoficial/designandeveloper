<template>
  <b-container class="my-3">
    <h1 class="display-4 d-sm-block d-md-none mb-2">
      <b-icon icon="tags"></b-icon> Servicios
    </h1>
    <h3 class="display-4 d-none d-md-block mb-3">
      <b-icon icon="tags"></b-icon> Servicios
    </h3>
    <b-row>
      <b-col sm="12" md="6" lg="4">
        <b-card
          title="Desarrollo"
          img-src="@/assets/servicios/desarrollo.jpg"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-3"
        >
          <b-card-text>
            Realiza tu <b>Pagina Web</b>, te ofrecemos un servicio de calidad el
            cual te ayudara a resolver tu problema de manera efectiva
            garantizando un trabajo seguro, eficaz y eficiente.
          </b-card-text>
          <b-button href="/desarrollo" variant="primary">Ver mas</b-button>
        </b-card>
      </b-col>
      <b-col sm="12" md="6" lg="4">
        <b-card
          title="Marketing"
          img-src="@/assets/servicios/marketing.jpg"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-3"
        >
          <b-card-text>
            Gestionamos tus
            <b>Redes Sociales</b> y te ayudamos a impulsar tu negocio con
            campañas publicitarias y estrategias de mercado, aumentamos tus
            ventas y posicionamiento.
          </b-card-text>
          <b-button href="/marketing" variant="primary">Ver mas</b-button>
        </b-card>
      </b-col>
      <b-col sm="12" md="6" lg="4" class="d-none d-lg-block">
        <b-card
          title="Diseño Grafico"
          img-src="@/assets/servicios/diseño.jpg"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-3"
        >
          <b-card-text
            >Innovamos de manera creativa, plasmando las ideas, emociones y
            mensajes a través de imágenes de alta calidad. Diseñamos tu
            <b>logo</b>, <b>banners</b>, <b>tarjetas de presentancion</b> y
            mucho mas.
          </b-card-text>
          <b-button href="/diseño" variant="primary">Ver mas</b-button>
        </b-card>
      </b-col>
      <b-col class="d-md-block d-lg-none">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                src="@/assets/servicios/diseño.jpg"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Diseño Grafico">
                <b-card-text>
                  Innovamos de manera creativa, plasmando las ideas, emociones y
                  mensajes a través de imágenes de alta calidad. Diseñamos tu
                  <b>logo</b>, <b>banners</b>,
                  <b>tarjetas de presentancion</b> y mucho mas.
                </b-card-text>
                <b-button href="/diseño" variant="primary">Ver mas</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "CardServicios",
  data() {
    return {};
  },
};
</script>