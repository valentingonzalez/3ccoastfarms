<template>
  <div class="home">
    <header id="heroSlider" class="d-flex">
      <div class="container d-flex justify-content-end align-items-center">
        <carousel :perPage="1" :paginationEnabled="false" :navigationEnabled="true" :autoplay="true" :loop="true">
          <slide>
            <p class="lead mb-1">Potency, quality and sustainability.</p>
            <h1>Craft Cannabis Cultivation</h1>
            <router-link to="explore" class="btn btn-primary">Explore</router-link>
          </slide>
          <slide>
            <p class="lead mb-1">Finely tuning our process and genetics</p>
            <h1>Premium Craft Cannabis</h1>
            <router-link to="explore" class="btn btn-primary">Explore</router-link>
          </slide>
        </carousel>
      </div>
    </header>
    <div class="home-content">
      <div class="container">
        <div class="home-about">
          <div class="home-about-text">
            <h1>Craft Cannabis Cultivation</h1>
            <p>
              <b>3C Farms</b> cultivate premium craft Cannabis unparalleled in potency, quality, and sustainability. 
              We feel a responsibility to protect the future of clean medicine with the intention to create 
              more sustainable means of cultivation. <b>3C Farms</b> are consistently pushing the limits of what is 
              possible through cannabis, finely tuning our process and our genetics to perfection–we call 
              this <b><i>Craft Cannabis Cultivation</i></b>, or <b><i>3C</i></b>.
            </p>
            <router-link to="locations" class="btn btn-primary">View our locations</router-link>
          </div>
        </div>
        <div class="home-explore">
          <h1 class="mx-auto row justify-content-center">Explore<br>Our Cannabis</h1>
          <div class="d-flex">
            <div class="w-50 d-flex flex-column justify-content-center align-items-center mr-1">
              <CannabisList :category="'Indica'"></CannabisList>
              <router-link to="explore/indica" class="btn btn-primary mt-3 mb-5">View all Indica Strains</router-link>
            </div>
            <div class="w-50 d-flex flex-column justify-content-center align-items-center ml-1">
              <CannabisList :category="'Sativa'"></CannabisList>
              <router-link to="explore/sativa" class="btn btn-primary mt-3 mb-5">View all Indica Strains</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CannabisList from '../components/CannabisList.vue';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'home',
  components: {
    Carousel,
    Slide,
    CannabisList
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
    width: 520px;
    padding: 0 60px;
  }
  .home-content {
    background-image: url(../assets/home-bg.png);
    background-position: top 100px right 50vw;
    background-repeat: no-repeat;
  }
  .home-about {
    padding: 100px 0 50px;
  }
  .home-about .home-about-text {
    max-width:520px;
    position: relative;
    left: 50%;
    margin-left: -80px;
  }
  .home-about .home-about-text p {
    text-align: justify;
  }

  .home-explore {
    margin-top: 100px;
  }
</style>