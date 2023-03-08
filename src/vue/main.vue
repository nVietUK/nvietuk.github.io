<script setup lang="ts">
import myProfile from '@/vue/myProfile.vue'
import gameDino from '@/vue/dinogame.vue'
</script>

<template>
	<div class="row fillHeight">
		<div class="col-3 boxOutline" style="padding-left: 0%; padding-right: 0%;">
			<ul class="nav flex-column">
				<li class="nav-item">
					<router-link to="/home" class="nav-link mainTab1" data-toTab="#myProfile">My profile</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/" class="nav-link mainTab1" data-toTab="#myGames">Games</router-link>
				</li>
				<li class="nav-item">
					<router-link to="" class="nav-link mainTab1" data-toTab="#myCodes">Codes</router-link>
				</li>
			</ul>
		</div>
		<div class="col-9">
			<div class="tab-content fillHeight">
				<div class="tab-pane mainPane1" id="myProfile">
					<myProfile></myProfile>
				</div>
				<div class="tab-pane mainPane1 fillHeight" id="myGames">
					<div class="row fillHeight">
						<div class="col-3 boxOutline" style="padding-left: 0%; padding-right: 0%;">
							<ul class="nav flex-column">
								<li class="nav-item active">
									<router-link to="/dinogame" class="nav-link mainTab2" data-toTab="#gameDino">Dino</router-link>
								</li>
							</ul>
						</div>
						<div class="col-9">
							<div class="tab-content fillHeight">
								<div class="tab-pane mainPane2 active fillHeight" id="gameDino">
									<gameDino></gameDino>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.mainTab1 {}

.mainPane1 {}

.mainTab2 {}

.mainPane2 {}

.theDinoGame {}

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