<script setup lang="ts">
import { useChart } from "@/composables";
import { onMounted } from "vue";
import { useCryogonStore } from "@/stores/cryogon";
const store = useCryogonStore();
const user = (await store.userData).data;
const RankHistory = user.rank_history.data;
const days: string[] = [];
onMounted(async () => {
  for (let i in RankHistory) {
    if (i == "0") days.push("now");
    else days.push(i + " days ago");
  }
  useChart("ranking", {
    type: "line",
    data: {
      labels: days.reverse(),
      datasets: [
        {
          label: "Global Ranking",
          data: RankHistory,
          showLine: true,
          borderWidth: 2,
          backgroundColor: "#fff",
          borderColor: "#4bc0c0",
          pointRadius: 0,
        },
      ],
    },
    options: {
      color: "#fff",
      responsive: true,
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          usePointStyle: true,
        },
        title: {
          display: false,
          color: "#fff",
          text: "Global Ranking History",
          font: {
            size: 16,
          },
        },
      },
      elements: {
        line: {
          borderJoinStyle: "round",
          tension: 0.2,
        },
      },
      scales: {
        y: {
          type: "linear",
          reverse: true,
          beginAtZero: true,
          display: false,
        },
        x: {
          display: false,
        },
      },
    },
  });
});
</script>
<template>
  <div class="ranking">
    <h2>Global Ranking History</h2>
    <canvas id="ranking"></canvas>
  </div>
</template>
<style scoped lang="scss">
.ranking {
  text-align: center;
  width: 30rem;
  max-height: 12rem;
  background-color: var(--osu-card-background-color);
  color: white;
  box-shadow: 0 0 1rem var(--osu-card-shadow-color);
  border-radius: 2rem;
  padding: 10px;
  #ranking {
    margin-top: -5rem;
  }
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 15rem;
  }
}
</style>
