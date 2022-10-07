import { useFetch, useUrlSearchParams } from "@vueuse/core";
const CLIENT_SECRET = "5CmQZhXRRg6Qt43QWwsJdWf2jg5owXHps6yO1MGH";
const CLIENT_ID = 18072;
const TOKEN_URL = "https://osu.ppy.sh/oauth/token";
const API_URL = "https://osu.ppy.sh/api/v2";

export async function getOsuToken(recivedcode: string) {
  const data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: "authorization_code",
    code: recivedcode,
    redirect_url: "https://cryogon.netlify.app/osu",
  };
  const token = await fetch(TOKEN_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return token?.access_token;
}

export async function getToken() {
  const body = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: "client_credentials",
    scope: "public",
  };
  const { data: token } = await useFetch(TOKEN_URL, {
    beforeFetch({ options }) {
      options.method = "POST";
      options.body = JSON.stringify(body);
      options.mode = "no-cors";
      options.headers = {
        ...options.headers,
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      return {
        options,
      };
    },
  }).json();
  return token.value?.access_token;
}

export async function getBestScoresOfPerson(id: string, access_token: string) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + access_token,
  };
  const params = useUrlSearchParams("history");
  params.mode = "osu";
  params.limit = "5";
  return await useFetch(`${API_URL}/users/${id}/scores/best?${params}`, {
    beforeFetch({ options }) {
      options.headers = headers;
      options.method = "GET";
      return {
        options,
      };
    },
  }).json();
}
