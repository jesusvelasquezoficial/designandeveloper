<template>
  <b-navbar id="menu" toggleable="sm" type="light" variant="light" sticky>
      <b-container fluid>
        <!-- Logo -->
        <b-navbar-brand href="/">
          <img
            alt="logo vcorp c.a"
            src="@/assets/logo.png"
            width="30"
            class="d-inline-block align-top"
            id="logo"
          />
          <b-tooltip target="logo"><b>Design &amp; Developer</b></b-tooltip>
        </b-navbar-brand>
        <!-- Menu Collapse -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- Menu -->
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">
              <b-icon icon="house-door"></b-icon> Inicio
            </b-nav-item>
            <b-nav-item-dropdown toggle-class="text-dark" right>
              <template v-slot:button-content>
                <b-icon icon="tags"></b-icon> Servicios
              </template>
              <b-dropdown-item to="/desarrollo"
                ><b-icon icon="terminal"></b-icon> Desarrollo</b-dropdown-item
              >
              <b-dropdown-item to="/marketing"
                ><b-icon icon="pie-chart"></b-icon> Marketing</b-dropdown-item
              >
              <b-dropdown-item to="/diseño" class="text-left"
                ><b-icon icon="easel"></b-icon> Diseño Grafico</b-dropdown-item
              > </b-nav-item-dropdown
            ><b-nav-item to="/nosotros"
              ><b-icon icon="people"></b-icon> Nosotros</b-nav-item
            >
            <b-nav-item to="/contacto"
              ><b-icon icon="person"></b-icon> Contacto</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
</template>
<script>
export default {
  name: 'Menu'
}
</script>
<style>
#menu a {
  color: #343a40 !important;
}
</style>