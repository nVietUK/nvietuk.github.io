import Vue from 'vue'
import '../css/style.css'
import App from '../vue/App.vue'
import VueAspectRatio from 'vue-aspect-ratio'

// vue-aspect-ratio
Vue.defineComponent("vue-aspect-ratio", VueAspectRatio)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({ components, directives, })

Vue.createApp(App).use(vuetify).mount('#app')
