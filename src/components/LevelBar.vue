<script setup lang="ts">
import { useChart } from "@/composables";
import { onMounted } from "vue";
onMounted(() => {
  useChart("chart", {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [0, 100],
          backgroundColor: ["white", "rgba(255, 255, 255, 0.364)"],
        },
      ],
    },
    options: {
      cutout: 70,
      aspectRatio: 1,
      layout: {
        autoPadding: true,
      },
      responsive: true,
      datasets: {
        doughnut: {
          backgroundColor: "green",
          normalized: true,
        },
      },
      elements: {
        arc: {
          borderWidth: 1,
        },
      },
      plugins: {
        tooltip: {
          displayColors: false,
          backgroundColor: "transparent",
          titleColor: "transparent",
          bodyColor: "transparent",
        },
        title: {
          text: "Level",
        },
      },
    },
  });
});
</script>
<template>
  <div class="levelBar">
    <canvas id="chart"></canvas>
  </div>
</template>
<style scoped lang="scss">
.levelBar {
  width: 12rem;
  color: rgba(255, 255, 255, 0.364);
}
</style>
