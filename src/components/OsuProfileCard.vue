<script setup lang="ts">
import axios from "axios";
const user = await axios.get(
  "https://cryogon-server.vercel.app/api/user/24534724/osu"
);
const userImg = user?.data.avatar_url;
</script>

<template>
  <div class="osuProfileCard">
    <img v-if="user" :src="userImg" alt="user" class="userAvatar" />
    <div class="userDetail">
      <span class="username">{{ user.data.username }}</span>
      <span class="GlobalRanking ranking"
        ><span>Global Ranking</span>
        <span class="rank">{{ user.data.statistics.global_rank }}</span>
      </span>
      <span class="Country Ranking ranking"
        ><span>Country Ranking</span>
        <span class="rank">{{ user.data.statistics.country_rank }}</span>
      </span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.osuProfileCard {
  margin-top: 1rem;
  width: 30rem;
  height: 11.5rem;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 11rem 1fr;
  padding: 10px;
  background-color: #22577a;
  color: white;
  box-shadow: 0 0 1rem #38a3a5;
  .userAvatar {
    width: 10rem;
    border-radius: 2rem;
  }
  .userDetail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4rem 1fr;
    .username {
      font-size: 24px;
      place-self: center left;
      grid-column: 1 / span 2;
    }
    .ranking {
      display: flex;
      flex-direction: column;
    }
    .rank {
      font-weight: 700;
      font-size: 24px;
      background: linear-gradient(60deg, #57cc99, #80ed99, #c7f9cc);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
  }
}
</style>
