<script setup lang="ts">
import Heart from './heart.vue'
</script>

<template>
  <div class="screen">
    <Heart></Heart>
  </div>
</template>

<style scoped>
.screen {
  aspect-ratio: 4/3;
  height: 80vh;
  display: table;
  outline: 2px solid white;
}
</style>