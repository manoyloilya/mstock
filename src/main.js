import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import router from '@/router/router'
import _ from 'lodash'
import VueLazyload from 'vue-lazyload'

// import directives from '@/directives'
import store from '@/store'
import VeeValidate from 'vee-validate'

const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
})

// directives.forEach(directive => {
// 	app.directive(directive.name, directive)
// })

// createApp.use(VeeValidate);

app.use(router)
	.use(store)
	.use(_)
	.use(VueLazyload)
	// .use(VeeValidate)
	.mount('#app')
