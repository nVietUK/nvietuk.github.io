<script setup lang="ts">
import myProfile from '@/vue/Home.vue'
</script>

<template>
	<div class="row fillHeight">
		<div class="col-3 boxOutline" style="padding-left: 0%; padding-right: 0%;">
			<ul class="nav flex-column">
				<li class="nav-item active">
					<router-link to="/home" class="nav-link" href="#myProfile" data-toggle="tab">My profile</router-link>
				</li>
				<li class="nav-item">
					<router-link to="" class="nav-link" href="#myGames" data-toggle="tab">Games</router-link>
				</li>
				<li class="nav-item">
					<router-link to="" class="nav-link" href="#myCodes" data-toggle="tab">Codes</router-link>
				</li>
			</ul>
		</div>
		<div class="col-9">
			<div class="tab-content well">
				<div class="tab-pane active" id="myProfile">
					<myProfile></myProfile>
				</div>
				<div class="tab-pane" id="myGames">
					<a>lmao</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.fillHeight {
	height: 100%;
}

a {
	color: #EEEEEE !important;
}

a:hover,
a:focus-within {
	background-color: #CF0A0A;
	-webkit-transition: background-color 10ms ease-in-out;
	-ms-transition: background-color 10ms ease-in-out;
	transition: background-color 10ms ease-in-out;
}
</style>