<template>
	<div class="row fillHeight">
		<div class="col-3 boxOutline">
			<ul class="nav flex-column">
				<li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				</li>
			</ul>
		</div>
		<div class="col-9">
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