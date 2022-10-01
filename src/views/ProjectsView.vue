<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue";
import { useCryogonStore } from "@/stores/cryogon";
import { storeToRefs } from "pinia";
const { projects } = storeToRefs(useCryogonStore());
</script>
<template>
  <main class="projectsContainer">
    <h1>Projects</h1>
    <div class="projects">
      <ProjectCard
        v-for="project in projects"
        :key="project.appName"
        :app-logo="project.appLogo"
        :app-name="project.appName"
        :app-description="project.description"
        :github-link="project.githubLink"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.projectsContainer {
  display: grid;
  place-items: center;
  padding-block-start: 4rem;
  & + h1 {
    margin-block-end: 1rem;
  }
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
