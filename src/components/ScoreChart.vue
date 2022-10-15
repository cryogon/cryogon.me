<script setup lang="ts">
import { useChart } from "@/composables/chart";
import { onMounted } from "vue";
import { useCryogonStore } from "@/stores/cryogon";
const store = useCryogonStore();
const user = await store.user;
const grades = user.data.statistics.grade_counts;
onMounted(() => {
  let delayed = false;
  useChart("scoreRankChart", {
    type: "doughnut",
    data: {
      labels: Object.keys(grades),
      datasets: [
        {
          data: Object.values(grades),
          backgroundColor: ["red", "#def2f9", "#ffd568", "#def3f9", "#72c904"],
          borderColor: [],
          borderWidth: 0,
          hoverOffset: 4,
        },
      ],
    },
    options: {
      datasets: {
        doughnut: {
          spacing: 0.5,
        },
      },
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (
            context.type === "data" &&
            context.mode === "default" &&
            !delayed
          ) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
      elements: {
        arc: {
          circular: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "right",
          align: "center",
          fullSize: true,
          labels: {
            usePointStyle: true,
            color: "white",
          },
        },
        tooltip: {},
      },
      maintainAspectRatio: false,
      responsive: true,
    },
  });
});
</script>
<template>
  <div class="chartContainer">
    <canvas id="scoreRankChart" class="chart" role="img"></canvas>
  </div>
</template>
<style scoped lang="scss">
.chartContainer {
  width: 18rem;
  height: 8rem;
  background: none;
  .chart {
    width: 80%;
    height: 80%;
  }
}
</style>
