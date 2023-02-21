import { createApp } from 'vue'
import '../css/style.css'
import App from '../vue/main.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({ components, directives, })

createApp(App).use(vuetify).mount('#app')