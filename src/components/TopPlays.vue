<script setup lang="ts">
import { useCryogonStore } from "@/stores/cryogon";
const store = useCryogonStore();
const scores = await store.bestscores;
function openSongUrl(url: string) {
  window.location.assign(url);
}
</script>

<template>
  <div class="scoresContainer">
    <div
      class="scoreCard"
      v-for="score in scores.data"
      :key="score.rank"
      @click="openSongUrl(`https://osu.ppy.sh/scores/osu/${score.best_id}`)"
    >
      <div class="rank" :class="score.rank">{{ score.rank }}</div>
      <div class="basicInfo">
        <span class="title"
          >{{ score.beatmapset.title }} by {{ score.beatmapset.artist }}</span
        >
        <span class="difficulty">{{ score.beatmap.version }}</span>
      </div>
      <i class="mods">
        <span v-for="(mods, index) in score.mods" :key="index">{{ mods }}</span>
      </i>
      <span class="acc">{{ (score.accuracy * 100).toFixed(2) }}</span>
      <span class="pp">{{ Math.round(score.pp) }}pp</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.scoresContainer {
  margin-top: 1rem;
  width: 60rem;
  max-height: 90vh;
  overflow-y: auto;
  background-color: #22577a;
  color: white;
  box-shadow: 0 0 1rem #38a3a5;
  border-radius: 1rem;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 10px;
    display: none;
  }
  &::-webkit-scrollbar-track {
    border-radius: 1rem;
    background-color: #325d7a;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #57cc99;
    width: 8px;
    border-radius: 1rem;
  }
  .scoreCard {
    padding: 10px 18px;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: 10% 63% 7% 10% 10%;
    align-items: center;
    &:hover {
      cursor: pointer;
      background-color: #325d7a;
    }
    .rank {
      font-size: 22px;
      font-weight: 600;
    }
    .S,
    .SS {
      color: #ffd568;
    }
    .SSH,
    .SH {
      color: #def2f9;
    }
    .A {
      color: #72c904;
    }

    .pp {
      font-weight: 500;
      font-size: 20px;
      background: linear-gradient(
        60deg,
        lightcyan,
        hotpink,
        lightblue,
        lightyellow,
        lightpink
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
    .basicInfo {
      display: flex;
      flex-direction: column;
      .difficulty {
        background: linear-gradient(60deg, #57cc99, #80ed99, #c7f9cc);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }
    }
  }
}
</style>
