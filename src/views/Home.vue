<template>
  <header id="heroSlider">
    <carousel :perPage="1">
      <slide>
        <p>Finely tuning our process and genetics</p>
        <h1>Premium Craft Cannabis</h1>
      </slide>
      <slide>
        Slide 2 Content
      </slide>
    </carousel>
  </header>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'home',
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>
  #heroSlider {
    background-color: #232323;
    background-image: url(../assets/hero-bg.jpg);
    height: 360px; 
    background-size: 30%;
    background-repeat: no-repeat;
    background-position: 10% bottom;
  }
  #heroSlider .VueCarousel {
    width: 400px;
  }
</style>