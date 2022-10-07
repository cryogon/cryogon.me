<script setup lang="ts">
import { getOsuToken, getBestScoresOfPerson } from "@/composables";
import type { UseFetchReturn } from "@vueuse/core";

const body = new URLSearchParams({
  client_id: "18072",
  redirect_uri: "https://cryogon.netlify.app/osu",
  response_type: "code",
  scope: "public",
});
const authUrl = `https://osu.ppy.sh/oauth/authorize?${body}`;

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get("code");
let scores: any;
if (code) {
  const accessToken = await getOsuToken(code);
  scores = (await getBestScoresOfPerson(
    "24534724",
    accessToken
  )) as UseFetchReturn<JSON>;
}
</script>
<template>
  <article>
    <a :href="authUrl" v-if="!code">Authorize</a>
    <div v-else>
      {{ scores }}
    </div>
  </article>
</template>
