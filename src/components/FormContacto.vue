<template>
  <b-container>
    <div class="mx-3">
      <b-row class="mt-3">
        <b-col lg="6">
          <h2 class="mb-3">
            <b-icon class="display-4" icon="person"></b-icon> Formulario de Contacto
          </h2>
          <h5 class="mr-4">
            Envianos un mensaje al Correo Electronico o comunicate con nostros a
            traves de WhatsApp.
          </h5>
          <btn-whatsapp></btn-whatsapp>
        </b-col>
        <b-col lg="6">
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="person-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="text"
              placeholder="Nombre"
              v-model="form_name"
            ></b-form-input>
          </b-input-group>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="envelope"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="email"
              placeholder="Correo@gmail.com"
              v-model="form_email"
            ></b-form-input>
          </b-input-group>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="tags"></b-icon>
            </b-input-group-prepend>
            <b-form-select
              v-model="form_servicios_selected"
              :options="form_servicios"
            ></b-form-select>
          </b-input-group>
          <b-form-textarea
            class="mb-2"
            placeholder="Escribe tu mensaje..."
            v-model="form_mensaje"
            debounce="500"
            rows="5"
            max-rows="5"
          ></b-form-textarea>
          <b-button class="mb-4" type="submit" variant="primary"
            >Enviar Mensaje</b-button
          >
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
import BtnWhatsapp from "@/components/BtnWhatsapp.vue";
export default {
  data() {
    return {
      form_name: "",
      form_email: "",
      form_servicios_selected: null,
      form_mensaje: "",
      form_servicios: [
        { value: null, text: "Selecciona el Servicios" },
        { value: "desarrollo", text: "Desarrollo" },
        { value: "marketing", text: "Marketing" },
        { value: "diseño grafico", text: "Diseño Grafico" },
      ],
    };
  },
  components: {
    BtnWhatsapp,
  },
};
</script>