<template>
  <div v-if="data">
    {{ data.hello }}
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@urql/vue";
const { data, error } = await useQuery({ query: "{hello}" });
</script>
