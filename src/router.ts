import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import Home from './views/Home.vue'
import Blogs from './static/blogs'
import { BlogInfo } from './types'
import { nextTick } from 'vue/types/umd'

Vue.use(Router)

const blogRoutes = Blogs.map((blog: BlogInfo, i: number): RouteConfig => {
	return {
		path: `/blog/${blog.url}`,
		name: blog.name,
		component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue'),
		meta: {
			blogComponentName: blog.componentName
		}
	}
})

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
		},
		...blogRoutes
	]
})
