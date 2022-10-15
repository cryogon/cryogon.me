<script setup lang="ts">
import { useChart } from "@/composables";
import { onMounted } from "vue";

import { useCryogonStore } from "@/stores/cryogon";
const store = useCryogonStore();
const user = await store.user;
const monthlyPlayData = [...user.data.monthly_playcounts];
const labels: string[] = [];
const counts: number[] = [];

for (let i in monthlyPlayData) {
  labels.push(monthlyPlayData[i].start_date);
  counts.push(monthlyPlayData[i].count);
}

onMounted(async () => {
  useChart("playCountChart", {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Plays",
          showLine: true,
          data: counts,
          backgroundColor: "#fff",
          borderColor: "#4bc0c0",
          borderWidth: 2,
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
          display: true,
          color: "#fff",
          text: "Play History",
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
          beginAtZero: true,
          display: true,
        },
      },
    },
  });
});
</script>
<template>
  <div class="playCountChart">
    <canvas id="playCountChart"></canvas>
  </div>
</template>
<style lang="scss" scoped>
.playCountChart {
  width: 60rem;
  background-color: #22577a;
  color: white;
  box-shadow: 0 0 1rem #38a3a5;
  border-radius: 1rem;
  padding: 10px;
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 15rem;
  }
}
</style>
