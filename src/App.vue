<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>
<style lang="scss">
html {
  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2rem;
    background-color: #325d7a;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #57cc99;
    border-radius: 2rem;
  }
}
</style>
