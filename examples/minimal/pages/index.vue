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
import { HelloDocument } from "~/generated/operations";
import { useQuery } from "@urql/vue";
const { fetching, error, data } = await useQuery({ query: HelloDocument });
</script>
