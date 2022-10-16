<script setup lang="ts">
import LevelBar from "./LevelBar.vue";
import { useCryogonStore } from "@/stores/cryogon";
const store = useCryogonStore();
const user = await store.userData;
const stats = user.data.statistics;
</script>
<template>
  <aside class="stats">
    <h2 class="heading">Player Stats</h2>
    <LevelBar class="levelBar" />
    <div class="userInfo">
      <span class="rawPP">Raw pp: {{ stats.pp }}</span>
      <span class="rankedScore">Ranked Score: {{ stats.ranked_score }}</span>
      <span class="totalScore">Total Score: {{ stats.total_score }}</span>
      <span class="hitAccuracy"
        >Accuracy: {{ parseFloat(stats.hit_accuracy).toFixed(2) }}</span
      >
      <span class="playCount">Play Count: {{ stats.play_count }}</span>
      <span class="playTime"
        >Play Time:
        {{ (parseInt(stats.play_time) / 86400).toFixed(2) }} days</span
      >
      <span class="totalHits">Total Hits: {{ stats.total_hits }}</span>
      <span class="MaxCombo">Max Combo: {{ stats.maximum_combo }}</span>
    </div>
  </aside>
</template>
<style lang="scss" scoped>
.stats {
  width: 30rem;
  height: 20rem;
  border-radius: 2rem;
  font-size: 16px;
  background: var(--osu-card-background-color);
  color: white;
  box-shadow: 0 0 1rem var(--osu-card-shadow-color);
  padding: 0.4rem 1rem;
  display: grid;
  grid-template-columns: 14rem 1fr;
  grid-template-rows: 3rem 1fr;
  .heading {
    justify-self: center;
    grid-column: 1 / span 2;
  }
  .userInfo {
    display: flex;
    flex-direction: column;
  }
  .levelBar {
    justify-content: center;
    margin-block: 4rem auto;
  }
}
</style>
