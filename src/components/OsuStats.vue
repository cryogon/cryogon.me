<script setup lang="ts">
import axios from "axios";
import ScoreChart from "./ScoreChart.vue";
import LevelBar from "./LevelBar.vue";
const user = await axios.get(
  "https://cryogon-server.vercel.app/api/user/24534724/osu"
);
const stats = user.data.statistics;
</script>
<template>
  <aside class="stats">
    <LevelBar class="levelBar" />
    <div class="userInfo">
      <span class="userLevel">Level: {{ stats.level.current }} </span>
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
    <ScoreChart />
  </aside>
</template>
<style lang="scss" scoped>
.stats {
  width: 30rem;
  height: 26rem;
  border-radius: 2rem;
  font-size: 16px;
  background: #22577a;
  color: white;
  box-shadow: 0 0 1rem #38a3a5;
  padding: 1.5rem 1rem;
  display: grid;
  grid-template-columns: 14rem 1fr;
  .userInfo {
    display: flex;
    flex-direction: column;
  }
  .levelBar {
    place-self: center;
  }
}
</style>
