<template>
  <div v-if="fetching">Loading...</div>
  <div v-else-if="error">Oh no... {{ error }}</div>
  <div v-else>
    <ul v-if="data">
      <li v-for="episode in data.episodes.results" :key="episode.id">{{ episode.air_date }} - {{ episode.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@urql/vue";
const { fetching, data, error } = await useQuery({
  query: `{	episodes { results { id name air_date } } }`,
});
</script>
