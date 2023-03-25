<script setup>
import {ref} from "vue";
import InputModal from "@/component/InputModal.vue";
import Navbar from "@/component/Navbar.vue";
import Carousel from "@/component/Carousel.vue";
import Card from "@/component/Card.vue";
import { RouterView } from 'vue-router';
import Footer from "./component/Footer.vue";


</script>

<template>
  <div data-theme="garden">
    <!-- <div class="bg-black"> -->
  <Navbar/>
  <!-- <Carousel/>
  <InputModal/> -->
  <RouterView/>
  <Footer/>
  </div>  
</template>

<style scoped>

</style>
