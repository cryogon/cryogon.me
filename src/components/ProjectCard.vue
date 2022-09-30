<script setup lang="ts">
defineProps({
  appLogo: String,
  appName: String,
  appDescription: String,
  siteLink: String,
  githubLink: String,
});
</script>
<template>
  <a :href="githubLink" target="_blank">
    <div class="vueProjectContainer">
      <img :src="appLogo" alt="App-Logo" class="logo" />
      <h2>{{ appName || "Project Name" }}</h2>
      <p>{{ appDescription || "Project-Description" }}</p>
    </div>
  </a>
</template>
<style lang="scss" scoped>
a {
  color: inherit;
}
.vueProjectContainer {
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: 1fr 1fr;
  width: 20rem;
  max-height: 4rem;
  margin: 1rem;
  font-size: 13px;
  .logo {
    width: 4rem;
    place-self: center;
    grid-row: 1 / span 2;
  }
}
</style>
