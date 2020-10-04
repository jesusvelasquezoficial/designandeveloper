<template>
  <div class="nosotros">
    <jumbo-nosotros></jumbo-nosotros>
    <list-nosotros></list-nosotros>
    <form-contacto></form-contacto>
  </div>
</template>
<script>
import ListNosotros from "@/components/ListNosotros.vue";
import FormContacto from "@/components/FormContacto.vue";
import JumboNosotros from "@/components/JumboNosotros.vue";

export default {
  name: "Nosotros",
  data() {
    return {};
  },
  components: {
    JumboNosotros,
    ListNosotros,
    FormContacto,
  },
};
</script>