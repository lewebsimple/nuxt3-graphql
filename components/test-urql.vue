<template>
  <div>
    {{ data.hello }}
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@urql/vue";
const { data, error } = await useQuery({ query: "{hello}" });
</script>
