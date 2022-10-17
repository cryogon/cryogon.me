<script setup lang="ts">
import axios from "axios";
import { computed, ref } from "vue";
const recent = await axios.get(
  "https://cryogon-server.vercel.app/api/24534724/recent_activity?limit=100"
);
const limit = ref(5);
const limitActivies = computed(() => recent.data.slice(0, limit.value));
</script>
<template>
  <ul class="recentContainer">
    <h2>Recent Activities</h2>
    <li v-for="(item, index) in limitActivies" :key="index" class="recentItem">
      <span v-if="item.type == 'rank'">
        <span :class="item.scoreRank" class="scoreRank">{{
          item.scoreRank
        }}</span>
        {{ item.user.username }} Archived {{ item.rank }} on
        <a :href="`https://osu.ppy.sh${item.beatmap.url}`">{{
          item.beatmap.title
        }}</a>
        ({{ item.mode }})
      </span>
      <span v-if="item.type == 'achievement'">
        {{ item.user.username }} Unlocked the "{{ item.achievement.name }}"
        medal
      </span>
    </li>
    <button @click="limit += 20" :disabled="limit >= 100">Load More</button>
  </ul>
</template>
<style lang="scss" scoped>
.recentContainer {
  width: 30rem;
  margin-bottom: auto;
  background-color: var(--osu-card-background-color);
  color: white;
  padding: 10px;
  border-radius: 2rem;
  h2 {
    text-align: center;
    margin-block-end: 0.7rem;
  }
  a {
    color: pink;
  }
  button {
    background: transparent;
    border: 2px solid white;
    color: white;
    width: 7rem;
    margin-inline-start: 40%;
    padding: 5px 10px;
    border-radius: 1rem;
    transition: 0.4s;
    &:hover {
      box-shadow: inset -7rem 1rem rgb(42, 59, 170);
      font-size: 14px;
    }
    &:disabled {
      display: none;
    }
  }
  .recentItem {
    list-style: none;
    padding-block: 4px;
  }
  .scoreRank {
    padding-inline: 10px;
    border-radius: 2rem;
    font-weight: 600;
  }
  .S,
  .SS {
    color: #ffd568;
  }
  .S,
  .SH {
    background-color: #01acb9;
  }
  .SS,
  .SSH {
    background-color: #de31ae;
  }
  .SSH,
  .SH {
    color: #def2f9;
  }
  .A {
    color: #275227;
    background-color: #72c904;
  }
}
</style>
