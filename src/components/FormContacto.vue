<template>
  <b-container>
    <div class="mx-3">
      <b-row class="mt-3">
        <b-col lg="6">
          <h2 class="mb-3">
            <b-icon class="display-4" icon="person"></b-icon> Formulario de
            Contacto
          </h2>
          <h5 class="mr-4">
            Envianos un mensaje al Correo Electronico o comunicate con nostros a
            traves de WhatsApp.
          </h5>
          <btn-whatsapp></btn-whatsapp>
        </b-col>
        <b-col lg="6">
          <b-form @submit="sendEmail">
            <!-- Nombre -->
            <b-form-group
              id="form_name"
              :invalid-feedback="invalidName"
              :state="stateName"
              class="mb-2"
            >
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="person-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  placeholder="Nombre"
                  v-model="form.name"
                  required
                ></b-form-input>
              </b-input-group>
            </b-form-group>
            <!-- Email -->
            <b-form-group
              id="form_email"
              :invalid-feedback="invalidEmail"
              :state="stateEmail"
              class="mb-2"
            >
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="envelope"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="email"
                  placeholder="Correo@gmail.com"
                  v-model="form.email"
                  required
                ></b-form-input>
              </b-input-group>
            </b-form-group>
            <!-- Servicios -->
            <b-form-group id="form_servicio" class="mb-2">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="tags"></b-icon>
                </b-input-group-prepend>
                <b-form-select
                  v-model="form.servicio"
                  :options="servicio"
                  required
                ></b-form-select>
              </b-input-group>
            </b-form-group>
            <b-form-group
              id="form_mensaje"
              :invalid-feedback="invalidMensaje"
              :state="stateMensaje"
              class="mb-2"
            >
              <b-form-textarea
                placeholder="Escribe tu mensaje..."
                v-model="form.mensaje"
                debounce="500"
                rows="5"
                max-rows="5"
                required
              ></b-form-textarea>
            </b-form-group>
            <b-button class="mb-4" type="submit" variant="primary"
              >Enviar Mensaje</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
import BtnWhatsapp from "@/components/BtnWhatsapp.vue";
import axios from "axios";

import {
  required,
  minLength,
  maxLength,
  between,
  email,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        mensaje: "",
        servicio: null,
      },
      servicio: [
        { value: null, text: "Selecciona el Servicio" },
        { value: "desarrollo", text: "Desarrollo" },
        { value: "marketing", text: "Marketing" },
        { value: "diseño grafico", text: "Diseño Grafico" },
      ],
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(10),
      },
      email: {
        required,
        email,
      },
      servicio: {
        required,
      },
      mensaje: {
        required,
        minLength: minLength(4),
      },
    },
  },
  computed: {
    stateName() {
      return this.form.name.length >= 4 ? true : false;
    },
    stateEmail() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.form.email == "" || re.test(this.form.email) ? true : false;
    },
    stateMensaje() {
      return this.form.mensaje.length >= 4 ? true : false;
    },
    invalidName() {
      if (this.form.name.length > 4) {
        return "";
      } else if (this.form.name.length > 0) {
        return "Ingrese al menos 4 caracteres";
      } else {
        return "";
      }
    },
    invalidEmail() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(this.form.email)) {
        return "";
      } else {
        return "Ingrese un Correo valido";
      }
    },
    invalidMensaje() {
      if (this.form.mensaje.length > 4) {
        return "";
      } else if (this.form.mensaje.length > 0) {
        return "Ingrese al menos 4 caracteres";
      } else {
        return "";
      }
    },
  },
  methods: {
    sendMail: async (e) => {
      e.preventDefault();
      console.log("Enviando Email");
      console.log(JSON.stringify(this.form));
      this.form = {
        name: "",
        email: "",
        mensaje: "",
        servicio: null,
      };
    },
    sendEmail(e){
      e.preventDefault();
      var msg = this.form;
      axios
        .post("/send-email", msg)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    BtnWhatsapp,
  },
};
</script>