<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <p class="glitch consola whiteFont">
    <span aria-hidden="true">{{ text }}</span>
    {{ text }}
    <span aria-hidden="true">{{ text }}</span>
  </p>
</template>

<style>
.glitch {
  font-size: 2vh;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  text-shadow: 0.05em 0 0 #FF84E8, -0.03em -0.04em 0 #FFA9E7,
    0.025em 0.04em 0 #645DD7;
  animation: glitch 725ms infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #FF84E8, -0.03em -0.04em 0 #FFA9E7,
      0.025em 0.04em 0 #645DD7;
  }

  15% {
    text-shadow: 0.05em 0 0 #FF84E8, -0.03em -0.04em 0 #FFA9E7,
      0.025em 0.04em 0 #645DD7;
  }

  16% {
    text-shadow: -0.05em -0.025em 0 #FF84E8, 0.025em 0.035em 0 #FFA9E7,
      -0.05em -0.05em 0 #645DD7;
  }

  49% {
    text-shadow: -0.05em -0.025em 0 #FF84E8, 0.025em 0.035em 0 #FFA9E7,
      -0.05em -0.05em 0 #645DD7;
  }

  50% {
    text-shadow: 0.05em 0.035em 0 #FF84E8, 0.03em 0 0 #FFA9E7,
      0 -0.04em 0 #645DD7;
  }

  99% {
    text-shadow: 0.05em 0.035em 0 #FF84E8, 0.03em 0 0 #FFA9E7,
      0 -0.04em 0 #645DD7;
  }

  100% {
    text-shadow: -0.05em 0 0 #FF84E8, -0.025em -0.04em 0 #FFA9E7,
      -0.04em -0.025em 0 #645DD7;
  }
}

.consola {
  font-family: "Consolas", monospace;
}

.handwriting {
  font-family: handwriting;
  z-index: 10;
  font-size: 20vh;
  color: hsl(10, 70%, 49%);
}

.whiteFont {
  color: #f3e9dc;
  line-height: 1.2;
}

</style>