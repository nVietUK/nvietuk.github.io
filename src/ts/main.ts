import { createApp } from 'vue'
import '@/css/style.scss'
import main from '@/vue/main.vue'
import routerweb from '@/vue/router.vue'
import { createRouter, createWebHistory } from 'vue-router'
import home from '@/vue/myProfile.vue'
import notfoundp from '@/vue/notfound.vue'
import pacman from '@/vue/pacman.vue'

// Vue router
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/home', name: 'home', component: home },
		{ path: '/', name: 'router', component: main },
		{ path: '/:pathMatch(.*)*', component: notfoundp },
		{ path: '/pacman', name: 'pacman-game', component: pacman}
	]
})

createApp(routerweb)
	.use(router)
	.mount('#router')