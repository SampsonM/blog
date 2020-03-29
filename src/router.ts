import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Blogs from './static/blogs'
import { BlogInfo } from './types'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue')
		}
	]
})
