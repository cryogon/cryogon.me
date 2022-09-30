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
    "What's Up",
    "क्या चल रहा है",
    "調子はどう",
    "ਕੀ ਹੋ ਰਿਹਾ ਹੈ",
    "뭐야",
    "quoi de neuf",
  ],
});
</script>
<template>
  <div class="introContainer">
    <span ref="target" id="name"> </span>
    <div class="intro">
      <p>
        Hey, I am Jatin Thakur, a student at Govt. College Kullu, India. A
        novice Full Stack Web Developer, currently working with the Vue and
        TypeScript.
      </p>
      <p>Have Work with C/C++, C#, JS and TS.</p>
      <p>
        Love to create new things, just need new Ideas, currently learning how
        to make good designs and also working on few other projects (current
        task is to make this portfolio). You can find my
        <router-link to="/projects">projects</router-link> here and all of my
        previous projects as well as future projects will be open source, So
        feel free to contribute in it if you want
      </p>
      <p>
        Aside from programming, I love travelling, trekking, anime and gaming.
        Currently dead on social media but will continue to post future updates
        on it in near future (I hope so).
      </p>
      <p>
        You can find me on <a href="https://github.com/cryogon">Github</a>,
        <a href="https://twitter.com/Jatin69123235">Twitter</a> and
        <a href="https://www.instagram.com/cryogonjs/">Instagram</a>.<br />
        Mail Me at <a href="mailto:jtkalga@gmail.com">jtkalga@gmail.com</a>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.introContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  #name {
    font-size: calc(4vw + 10px);
    padding-block: 0.5rem;
    padding-inline: 1rem;
    width: 50vw;
  }
  .intro {
    border-inline-start: 2px solid;
    padding-inline-start: 0.4rem;
    grid-column: 2 / 3;
    min-height: 1rem;
    max-width: 40vw;
    p {
      font-weight: 500;
      margin-block: 0.3rem;
    }
  }
}
</style>
