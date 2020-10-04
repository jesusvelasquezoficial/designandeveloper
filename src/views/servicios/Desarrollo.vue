<template>
  <div class="desarrollo">
    <slider></slider>
    <b-container>
      <b-row class="mx-2">
        <b-col sm="12" md="12" lg="6">
          <b-card
            overlay
            img-src="@/assets/servicios/desarrollo.jpg"
            img-alt="Desarrollo de paginas web, sistemas, app."
            text-variant="white"
          >
          </b-card>
        </b-col>
        <b-col sm="12" md="12" lg="6">
          <h1 class="display-4"><b-icon icon="terminal"></b-icon> Desarrollo</h1>
          <p>
            Crear programas, aplicaciones y paginas webs, es trabajo de
            Programadores expertos especializados en distintos lenguajes de
            programación.
          </p>
          <p>
            Si lo que buscas es crear un programa, una aplicación o página web,
            estas en el lugar indicador, te ofrecemos un servicio de calidad el
            cual te ayudara a resolver tu problema de manera efectiva
            garantizando un trabajo seguro, eficaz y eficiente.
          </p>
        </b-col>
        <b-col class="mt-md-2">
          <p>
            Estar hoy en internet es indispensable, abre las puertas de tu
            negocio al mundo entero, haz que tú página web aparezca en los
            primeros resultados de google.
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
  name: "Desarrollo",
  data() {
    return {};
  },
  components: {
    Slider,
    FormContacto
  }
};
</script>
<style scoped>
p {
  font-size: 20px;
}
</style>