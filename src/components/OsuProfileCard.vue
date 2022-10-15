<script setup lang="ts">
import { useCryogonStore } from "@/stores/cryogon";
const store = useCryogonStore();
const user = await store.userData;
const userImg = user?.data.avatar_url;
</script>
<template>
  <div class="osuProfileCard">
    <img v-if="user" :src="userImg" alt="user" class="userAvatar" />
    <div class="userDetail">
      <span
        class="username"
        :style="{
          '--countryFlag': `url('https://countryflagsapi.com/svg/${user.data.country_code}')`,
        }"
        >{{ user.data.username }}
        <span class="country_hover">{{ user.data.location }}</span>
      </span>
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
  background-color: var(--osu-card-background-color);
  color: white;
  box-shadow: 0 0 1rem var(--osu-card-shadow-color);
  .userAvatar {
    width: 10rem;
    border-radius: 2rem;
  }
  .userDetail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4rem 1fr;
    position: relative;
    .username {
      font-size: 24px;
      place-self: center left;
      grid-column: 1 / span 2;
      &::after {
        content: "";
        background: var(--countryFlag);
        border-radius: 4px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top left;
        width: 2rem;
        height: 100%;
        position: absolute;
        top: 10px;
        margin-inline-start: 1rem;
      }
      .country_hover {
        display: none;
      }
      &:hover .country_hover {
        display: block;
        position: absolute;
        background-color: #000;
        font-size: 14px;
        padding-inline: 0.2rem;
        top: -1rem;
        left: 8.3rem;
      }
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
