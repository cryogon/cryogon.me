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
    <li v-for="(item, index) in limitActivies" :key="index" class="recentItem">
      <span v-if="item.type == 'rank'">
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
  a {
    color: pink;
  }
  button:disabled {
    display: none;
  }
  .recentItem {
    list-style: none;
    padding-block: 4px;
  }
}
</style>
