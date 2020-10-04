<template>
  <div class="desarrollo">
    <slider></slider>
    <b-container>
      <b-row class="mx-2">
        <b-col sm="12" md="12" lg="6">
          <b-card
            overlay
            img-src="@/assets/servicios/marketing.jpg"
            img-alt="Marketing, campañas publicitarias, gestion de redes sociales, posicionamiento online."
            text-variant="white"
          >
          </b-card>
        </b-col>
        <b-col sm="12" md="12" lg="6">
          <h1 class="display-4">
            <b-icon icon="pie-chart"></b-icon> Marketing
          </h1>
          <p>
            Gestionamos tus Redes Sociales y te ayudamos a impulsar tu negocio
            con Campañas Publicitarias y estrategias de mercado, aumentamos tus
            ventas y Posicionamiento Online.
          </p>
          <p>
            Si buscas quien te guie y te aconsejé para tomar las decisiones
            correctas y resolver los problemas que presentas, no dudes en
            contactarnos estaremos a la orden para brindarte una excelente
            estrategia de Marketing.
          </p>
        </b-col>
        <b-col class="mt-md-2">
          <p></p>
        </b-col>
      </b-row>
    </b-container>
    <form-contacto></form-contacto>
  </div>
</template>
<script>
import Slider from "@/components/Slider.vue";
import FormContacto from "@/components/FormContacto.vue";
export default {
  name: "Marketing",
  data() {
    return {};
  },
  components: {
    Slider,
    FormContacto,
  },
};
</script>
<style scoped>
p {
  font-size: 20px;
}
</style>