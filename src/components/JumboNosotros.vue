<template>
  <b-jumbotron
    fluid
    header="Comunicate con Nosotros"
    header-level="4"
    lead=""
    text-variant="light"
    class="text-center bg-orange"
  >
  <template slot="header">
    <b-icon class="display-1" icon="people"></b-icon>
    <h1 class="display-4"><b>Comunicate con Nosotros</b></h1>
  </template>
    <h4>
      Envianos un mensaje para comunicarte con nosotros y poder conversar sobre
      el proyecto que desea realizar obteniendo nuestros servicios
    </h4>
    <btn-whatsapp></btn-whatsapp>
  </b-jumbotron>
</template>
<script>
import BtnWhatsapp from "@/components/BtnWhatsapp.vue";
export default {
  data() {
    return {};
  },
  components: {
    BtnWhatsapp,
  },
};
</script>
<style>
.bg-orange {
  background-color: #ff9900 !important;
}
</style>