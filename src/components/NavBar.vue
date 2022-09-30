<script lang="ts" setup>
import { ref } from "vue";
import { useDark, useToggle, useNow, useDateFormat } from "@vueuse/core";
import { computed } from "vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const showSeconds = ref(true);
const dateFormat = computed(() => (showSeconds.value ? "hh:mm:ss" : "hh:mm"));
const time = useDateFormat(useNow(), dateFormat);
const toggleDateFormat = useToggle(showSeconds);
</script>
<template>
  <nav>
    <h2 id="logo">cryogon</h2>
    <ul class="navItemContainer">
      <li class="navItem">
        <router-link to="/projects"> Projects </router-link>
      </li>
      <li class="navItem">
        <a href="https://github.com/cryogon">
          <fa-icon :icon="['fab', 'github']" />
        </a>
      </li>
      <li class="navItem">
        <a href="https://twitter.com/Jatin69123235">
          <fa-icon :icon="['fab', 'twitter']" />
        </a>
      </li>
      <li class="navItem">
        <a @click="toggleDark()" class="toggleContainer">
          <fa-icon class="icon left" icon="sun" v-if="!isDark" />
          <fa-icon class="icon right" icon="moon" v-else />
        </a>
      </li>
      <li class="navItem flex">
        <a @click="toggleDateFormat()">
          <fa-icon icon="clock" />
          <span>{{ time }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  margin-block-end: 0.4rem;
  .flex {
    display: flex;
    span {
      margin-inline-start: 0.4rem;
    }
  }
  .navItemContainer {
    display: flex;
    justify-content: space-between;
    width: 30em;
    list-style-type: none;
    .navItem {
      list-style-type: none;
      padding: 0.5rem;
    }
    .toggleContainer {
      border: 1px solid;
      border-radius: 2rem;
      display: grid;
      width: 3rem;
      place-items: center;
      position: relative;
      height: 1.5rem;
      transform: scale(0.8);
      .icon {
        position: absolute;
      }
      .left {
        animation: leftSlide 0.2s linear;
        left: 0.4rem;
        @keyframes leftSlide {
          from {
            left: 1.8rem;
          }
          to {
            left: 0.4rem;
          }
        }
      }
      .right {
        animation: rightSlide 0.2s linear;
        left: 1.8rem;
        @keyframes rightSlide {
          from {
            left: 0.4rem;
          }
          to {
            left: 1.8rem;
          }
        }
      }
    }
  }
}
</style>
