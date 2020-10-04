<template>
  <b-carousel
    class="d-none d-md-block mb-5"
    v-model="slide"
    :interval="4000"
    controls
    fade
    indicators
    no-hover-pause
    background="#ababab"
    style="text-shadow: 1px 1px 2px #333"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide>
      <template v-slot:img>
        <img
          class="d-block img-fluid w-100"
          src="@/assets/slider/1.png"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template v-slot:img>
        <img
          class="d-block img-fluid w-100"
          src="@/assets/slider/2.png"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template v-slot:img>
        <img
          class="d-block img-fluid w-100"
          src="@/assets/slider/3.png"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template v-slot:img>
        <img
          class="d-block img-fluid w-100"
          src="@/assets/slider/4.png"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>
<script>
export default {
  name:"Slider",
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
}
</script>