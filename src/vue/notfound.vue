<template>
    <div class="parent404" style="
                      -moz-user-select: none;
                      -webkit-user-select: none;
                      -ms-user-select: none;
                      user-select: none;
                      -o-user-select: none;
                    " unselectable="on" onselectstart="return false;" onmousedown="return false;" id="myText">
        <p style="font-size: 50vh; color:black; font-family: handwriting;" id="subText">
            <RouterLink style="text-decoration: none; color: inherit;" to="/">?</RouterLink>
        </p>
    </div>
</template>

<style>
.parent404 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  filter: invert(1);
  mix-blend-mode: difference;
}
</style>