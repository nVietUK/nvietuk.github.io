<script setup lang="ts">
import glitchText from './glitchText.vue'
</script>

<template>
  <div class="screen">
    <div class="redBack fillDiv contentCenter">
      <div class="divMultiTextLine">
        <glitchText text="&#160;&#160;&#160;&#160;&#160;&#160;&#BBGGGGBB#&&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#BBGGGGBB#&&#160;&#160;&#160;&#160;&#160;&#160;" />
        <glitchText text="&#160;&#160;&#160;&#160;#GPPPPPPPPPPPPGB&&#160;&#160;&#160;&#160;&BGPPPPPPPPPPPPG#&#160;&#160;&#160;&#160;" />
        <glitchText text="&#160;&#160;#GPPPPPPPPPPPPPPPPPB&#160;&#160;BPPPPPPPPPPPPPPPPPG#&#160;&#160;" />
        <glitchText text="&#160;#PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP#&#160;" />
        <glitchText text="&#160;PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP&#160;" />
        <glitchText text="&PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP&" />
        <glitchText text="&PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP&" />
        <glitchText text="&PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP&" />
        <glitchText text="&#160;BPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPB&#160;" />
        <glitchText text="&#160;&GPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPG&&#160;" />
        <glitchText text="&#160;&#160;&GPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPG&&#160;&#160;" />
        <glitchText text="&#160;&#160;&#160;&#160;BPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPB&#160;&#160;&#160;&#160;" />
        <glitchText text="&#160;&#160;&#160;&#160;&#160;&BPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPB&&#160;&#160;&#160;&#160;&#160;" />
        <glitchText text="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&BPPPPPPPPPPPPPPPPPPPPPPPPPPPPB&&#160;&#160;&#160;&#160;&#160;&#160;&#160;" />
        <glitchText text="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;#GPPPPPPPPPPPPPPPPPPPPPPG#&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" />
        <glitchText text="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&BPPPPPPPPPPPPPPPPPPB&&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" />
        <glitchText text="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&BGPPPPPPPPPPPPGB&&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" />
        <glitchText text="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;#GPPPPPPPPG#&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" />
        <glitchText text="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&BPPPPB&&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" />
        <glitchText text="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&BB&&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" />
      </div>

      <pre class="handwriting" style="position: absolute;">Anh yêu bé</pre>
    </div>
  </div>
</template>

<style scoped>
.divMultiTextLine {
  display: inline-flex;
  flex-direction: column;
  align-items: center ;
}

.screen {
  aspect-ratio: 4/3;
  height: 80vh;
  display: table;
  outline: 2px solid white;
}

.fillDiv {
  height: 100%;
  width: 100%;
}

.fillWidth {
  width: 100%;
}

.redBack {
  background-color: #BAD7E9;
}

.contentCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>