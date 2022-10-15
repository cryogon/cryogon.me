<script setup lang="ts">
import { useCryogonStore } from "@/stores/cryogon";
const store = useCryogonStore();
const level = (await store.userData).data.statistics.level.current;
</script>
<template>
  <div class="levelContainer">
    <svg
      width="118"
      height="111"
      viewBox="0 0 118 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="osuLevel"
    >
      <path
        d="M62.3408 2.95235L105.436 26.3575C107.691 27.5823 109.095 29.9427 109.095 32.5089V78.4911C109.095 81.0573 107.691 83.4177 105.436 84.6425L62.3408 108.048C60.2573 109.179 57.7427 109.179 55.6592 108.048L12.5637 84.6424C10.3086 83.4177 8.9045 81.0573 8.9045 78.4911V32.5089C8.9045 29.9427 10.3086 27.5823 12.5637 26.3575L55.6592 2.95235C57.7427 1.82081 60.2573 1.82081 62.3408 2.95235Z"
        stroke="url(#paint0_linear_3_8)"
        stroke-width="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3_8"
          x1="59"
          y1="0"
          x2="59"
          y2="111"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFD705" />
          <stop offset="1" stop-color="#00B2FF" stop-opacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
    <span class="level">{{ level }}</span>
  </div>
</template>
<style scoped lang="scss">
.levelContainer {
  display: flex;
  justify-content: center;
  position: relative;
  .osuLevel {
    scale: 1.6;
  }
  .level {
    position: absolute;
    font-size: 64px;
  }
}
</style>
