<template>
    <div class="screen" id="mainScreen">
        <div class="fillScreen container boxOutline">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style>
.screen {
    aspect-ratio: 4/3;
    padding: 2px;
    outline: 100vw solid black;
    overflow: hidden;
}

.screenHeight {
    height: 80vh;
}

.screenWidth {
    width: 80vw;
}

.fillScreen {
    width: 100%;
    height: 100%;
}

.boxOutline {
    outline: 2px solid #EEEEEE;
}
</style>

<script setup lang="ts">
import $ from 'jquery';
$(window).resize(function () {
    const mainScreen = $('#mainScreen')
    const windowWidth = $(window).width() ?? screen.width, windowHeight = $(window).height() ?? screen.height;
    if (windowHeight / windowWidth < 3 / 4) { mainScreen.removeClass('screenWidth').addClass('screenHeight'); }
    else { mainScreen.addClass('screenWidth').removeClass('screenHeight'); }
})

$(document).ready(function () {
    // frame resizing
    const mainScreen = $('#mainScreen')
    const windowWidth = $(window).width() ?? screen.width, windowHeight = $(window).height() ?? screen.height;
    if (windowHeight / windowWidth < 3 / 4) { mainScreen.addClass('screenHeight'); }
    else { mainScreen.addClass('screenWidth'); }

    // nav magic
    const mainTabs = document.querySelectorAll(".nav-link");
    const mainTabContents = document.querySelectorAll(".tab-pane");
    mainTabs.forEach((tab) => {
        tab.addEventListener("mouseover", () => {
            mainTabs.forEach((tab) => tab.classList.remove("active"));
            mainTabContents.forEach((tabContent) => tabContent.classList.remove("active"));
            tab.classList.add("active");
            document.querySelector(tab.getAttribute("data-toTab")!)?.classList.add("active");
        });
    });
})
</script>