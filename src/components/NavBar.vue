<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
  <nav>
    <h2 id="logo">cryogon</h2>
    <ul class="navItemContainer">
      <li class="navItem">
        <a>
          <fa-icon icon="home" />
        </a>
      </li>
      <li class="navItem">
        <a href="https://github.com/cryogon">
          <fa-icon icon="fa-brands fa-github" />
        </a>
      </li>
      <li class="navItem">
        <a href="https://twitter.com/Jatin69123235">
          <fa-icon icon="fa-brands fa-twitter" />
        </a>
      </li>
      <li class="navItem">
        <a @click="toggleDark()" class="toggleContainer">
          <fa-icon class="icon left" icon="sun" v-if="isDark" />
          <fa-icon class="icon right" icon="moon" v-else />
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
  .navItemContainer {
    display: flex;
    justify-content: space-between;
    width: 20vw;
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
