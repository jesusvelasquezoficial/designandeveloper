<template>
  <div class="contacto">
    <br>
    <form-contacto></form-contacto>
    <card-servicios></card-servicios>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import CardServicios from '@/components/CardServicios.vue'
import FormContacto from "@/components/FormContacto.vue";

export default {
  name: "Contacto",
  data() {
    return {};
  },
  components: {
    Slider,
    CardServicios,
    FormContacto,
  },
};
</script>