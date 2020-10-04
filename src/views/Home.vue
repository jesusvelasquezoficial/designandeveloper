<template>
  <div class="home">
    <slider></slider>
    <card-servicios></card-servicios>
    <jumbo-nosotros></jumbo-nosotros>
    <list-nosotros></list-nosotros>
    <form-contacto></form-contacto>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import CardServicios from "@/components/CardServicios.vue";
import JumboNosotros from "@/components/JumboNosotros.vue";
import ListNosotros from "@/components/ListNosotros.vue";
import FormContacto from "@/components/FormContacto.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Slider,
    CardServicios,
    JumboNosotros,
    ListNosotros,
    FormContacto,
  },
};
</script>