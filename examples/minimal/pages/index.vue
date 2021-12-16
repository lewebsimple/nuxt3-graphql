<template>
  <div v-if="error">Oh no... {{ error }}</div>
  <div v-else>
    <h1 v-if="data">
      {{ data.hello }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const { error, data } = await useHelloQuery();
</script>
