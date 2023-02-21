<script lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue"

export const windowsWidthHeight=() => {
  let windowWidth=ref(window.innerWidth)
  let windowHeight=ref(window.innerHeight)

  const onWidthChange=() => windowWidth.value=window.innerWidth
  const onHeightChange=() => windowHeight.value=window.innerHeight
  onMounted(() => {
    window.addEventListener('resize', onWidthChange)
    window.addEventListener('resize', onHeightChange)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', onWidthChange)
    window.removeEventListener('resize', onHeightChange)
  })
  
  const width = computed(() => windowWidth.value)
  const height = computed(() => windowHeight.value)

  return { width, height }
}
</script>

<template>
  <div>
    <div class="screen">

    </div>
  </div>
</template>

<style scoped>
.screen {
  aspect-ratio: 4/3;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px solid white;
}
</style>
