<script setup lang="ts">
const games = await $fetch('/api/games')
</script>

<template>
  {{ games }}
</template>
