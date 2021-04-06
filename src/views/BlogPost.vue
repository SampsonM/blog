<template>
	<div>
		<router-link 
			:to="getToLink(blog)" 
			:class="[
				'blog__toggle',
				{ 'blog__toggle--dimmed' : (!blogStatus[`${blog.name}Open`] && anyBlogOpen)}
			]"
		>
			{{ blog.title }}
			<arrow-expand-vertical class="blog__toggle-arrow"></arrow-expand-vertical>
		</router-link>

		<transition appear name="fade" mode="in-out">
			<component
				class="blog__post"
				:is="$router.currentRoute.meta.blogComponentName">
			</component>
		</transition>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ArrowUpBoldBox from 'vue-material-design-icons/ArrowUpBoldBox.vue'
import ArrowExpandVertical from 'vue-material-design-icons/ArrowExpandVertical.vue'
import Blogs from '../static/blogs'
import { BlogInfo } from '@/types'

function markdownComponents() {
	return Blogs.reduce((acc: any, blog: BlogInfo) => {
		acc[blog.name] = () => import(`../markdowns/${blog.name}.md`)
		return acc
	}, {})
}

@Component({
	components: {
		ArrowUpBoldBox,
		ArrowExpandVertical,
		...markdownComponents()
	}
})
export default class BlogPost extends Vue {

}
</script>

<style lang="scss">
</style>
