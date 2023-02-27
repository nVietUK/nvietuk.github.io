import { createApp } from 'vue'
import '../css/style.css'
import main from '@/vue/main.vue'
import routerweb from '@/vue/router.vue'
import { createRouter, createWebHistory } from 'vue-router'
import home from '@/vue/Home.vue'
import notfoundp from '@/vue/notfound.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives,
})

// Vue router
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/home', name: 'home', component: home },
		{ path: '/', name: 'router', component: main },
		{ path: '/:pathMatch(.*)*', component: notfoundp },
	]
})

createApp(routerweb)
	.use(router)
	.use(vuetify)
	.mount('#router')