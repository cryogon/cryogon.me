<script setup lang="ts">
import OsuProfileCard from "../components/OsuProfileCard.vue";
import TopPlays from "../components/TopPlays.vue";
import OsuStats from "../components/OsuStats.vue";
import PlayCountChart from "../components/PlayCountChart.vue";
import RankHistory from "../components/RankHistory.vue";
import RecentActivity from "../components/RecentActivity.vue";
</script>
<template>
  <main>
    <Suspense>
      <OsuProfileCard class="profile" />
    </Suspense>
    <Suspense>
      <RankHistory class="ranking" />
    </Suspense>
    <Suspense>
      <RecentActivity class="recent" />
    </Suspense>
    <Suspense>
      <TopPlays class="topPlays" />
    </Suspense>
    <Suspense>
      <OsuStats class="stats" />
    </Suspense>
    <Suspense>
      <PlayCountChart class="playCount" />
    </Suspense>
  </main>
</template>
<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 33rem 1fr;
  grid-template-rows: 15rem 15rem 24rem 1fr;
  min-height: 90vh;

  .profile {
    grid-column: 1/2;
  }
  .ranking {
    grid-row: 2/3;
  }
  .stats {
    grid-column: 1/2;
    grid-row: 3/4;
  }
  .recent {
    grid-column: 1/2;
    grid-row: 4/5;
  }
  .topPlays {
    grid-column: 2/3;
    grid-row: 1 / span 3;
  }
  .playCount {
    margin-block-start: -1rem;
    grid-column: 2/3;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 0;
    .profile {
      grid-row: 1/2;
      width: 97vw;
    }
    .ranking {
      grid-row: 2/3;
      width: 97vw;
    }
    .stats {
      grid-row: 3/4;
      width: 97vw;
    }
    .topPlays {
      grid-row: 5/6;
      grid-column: 0;
      margin-top: 2rem;
      width: 97vw;
      height: 25rem;
    }
    .playCount {
      grid-row: 6/7;
      margin-top: 3rem;
      width: 97vw;
    }
  }
}
</style>
