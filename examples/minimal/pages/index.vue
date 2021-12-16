<template>
  <div v-if="fetching">Loading...</div>
  <div v-else-if="error">Oh no... {{ error }}</div>
  <div v-else>
    <h1 v-if="data">
      {{ data.hello }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import { useHelloQuery } from "~/generated/operations";
const { fetching, error, data } = useHelloQuery();
</script>
