<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
console.log(import.meta.env.BASE_URL);
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>
