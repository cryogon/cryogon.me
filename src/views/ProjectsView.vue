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
  margin-block-start: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .projects {
    display: grid;
    max-width: 100%;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 23rem);
  }
}
</style>
