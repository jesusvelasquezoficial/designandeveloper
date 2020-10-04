<template>
  <div class="desarrollo">
    <slider></slider>
    <b-container>
      <b-row class="mx-2">
        <b-col sm="12" md="12" lg="6">
          <b-card
            overlay
            img-src="@/assets/servicios/diseño.jpg"
            img-alt="Diseño, logos, banners e imágenes de alta calidad."
            text-variant="white"
          >
          </b-card>
        </b-col>
        <b-col sm="12" md="12" lg="6">
          <h1 class="display-4">
            <b-icon icon="easel"></b-icon> Diseño
          </h1>
          <p>
            Innovamos de manera creativa, plasmando las ideas, emociones y
            mensajes a través de imágenes de alta calidad.
          </p>
          <p>
            Revistas, folletos, cartelería y tarjetas de presentación son solo
            algunos de los proyectos que podemos realizar además de logos,
            banners e imágenes necesarias para impulsar cualquier tipo de
            campaña publicitaria, marca o imagen personal y/o empresarial.
          </p>
        </b-col>
        <b-col class="mt-md-2">
          <p>
            <b>Contáctenos</b>, enviando un mensaje para obtener nuestros servicios de Diseñado Grafico.
          </p>
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
  name: "Diseño",
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