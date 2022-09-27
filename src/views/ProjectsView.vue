<script setup lang="ts">
import VueProjects from "../components/VueProjects.vue";
</script>
<template>
  <main class="projects">
    <div class="vueProjects">
      <h1>Vue Projects</h1>
      <VueProjects />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.projects {
  display: grid;
  place-items: center;
  padding-block-start: 4rem;
}
</style>
