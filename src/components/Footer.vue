<template>
  <b-container class="bg-light" fluid>
    <b-row align-v="end" class="text-center mx-5 py-5">
      <b-col sm="12" md="6" lg="4">
        <h4 class="my-2">Informacion</h4>
        <div class="text-left">
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-light">
              <b-icon icon="globe2"></b-icon> www.designandeveloper.com
            </li>
            <li class="list-group-item bg-light">
              <b-icon icon="geo-alt"></b-icon>
              Caracas, Calle Teneria, Casa Nro 56-12.
            </li>
            <li class="list-group-item bg-light">
              <b-icon icon="envelope"></b-icon> designandeveloper@gmail.com
            </li>
            <li class="list-group-item bg-light">
              <b-icon icon="telephone"></b-icon> +58 412-319-9657
            </li>
          </ul>
        </div>
      </b-col>
      <b-col md="12" lg="4" class="d-none d-lg-block">
        <small>&copy; Copyright 2020, Design &amp; Developer</small>
      </b-col>
      <b-col align-self="start" sm="12" md="6" lg="4" class="mt-4">
        <h4 class="my-2">Redes Sociales</h4>
        <div class="pt-3">
          <a href="https://www.facebook.com/designandeveloper" target="_blank" class="mx-3"
            ><img src="@/assets/icons/png/001-facebook.png" alt=""
          /></a>
          <a href="https://twitter.com/designandevelop" target="_blank" class="mx-3"
            ><img src="@/assets/icons/png/003-gorjeo.png" alt=""
          /></a>
          <a href="https://www.instagram.com/designandeveloper/" target="_blank" class="mx-3"
            ><img src="@/assets/icons/png/002-instagram.png" alt=""
          /></a>
          <a href="https://wa.link/oe5vbk" target="_blank" class="mx-3"
            ><img src="@/assets/icons/png/004-whatsapp.png" alt=""
          /></a>
        </div>
        <!-- <div class="mt-3">
          <small>
            diseñados por
            <a href="https://www.flaticon.es/autores/freepik" title="Freepik"
              >Freepik</a
            >
            from
            <a href="https://www.flaticon.es/" title="Flaticon"
              >www.flaticon.es</a
            >
          </small>
        </div> -->
      </b-col>
      <b-col md="12" lg="4" class="mt-4 d-md-block d-lg-none">
        <small>&copy; Copyright 2020, Vcorp C.A</small>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "Footer"
}
</script>