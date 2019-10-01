import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/_reset.scss'
import './assets/styles/_animations.scss'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
