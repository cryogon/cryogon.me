<script setup lang="ts">
import { useTypedJs } from "@/composables";
import { ref } from "vue";
const target = ref();
useTypedJs(target, {
  typeSpeed: 40,
  backSpeed: 100,
  smartBackspace: false,
  startDelay: 100,
  backDelay: 1500,
  showCursor: false,
  loop: true,
  strings: [
    "Work In Progress",
    "कार्य प्रगति पर है",
    "進行中の作業",
    "ਕੰਮ ਚੱਲ ਰਿਹਾ ਹੈ",
  ],
});
</script>

<template>
  <main>
    <div ref="target" id="container"></div>
  </main>
</template>
<style lang="scss" scoped>
#container {
  font-size: 64px;
}
</style>
