<template>
	<transition appear name="blog" mode="in-out">
		<section class="blog">
			<h1 class="blog__title">Blog</h1>

			<router-link to="/" class="blog__back">
				<arrow-up-bold-box></arrow-up-bold-box>
			</router-link>

			<!-- programatically render list of blog posts -->
			<template v-if="blogs.length">
				<section
					v-for="(blog, i) in blogs"
					:class="[
						'blog__container',
						{ 'blog__container--open': blogStatus[`${blog.name}Open`] }
					]"
					:key="i">

					<button
						:class="[
							'blog__toggle',
							{ 'blog__toggle--dimmed' : (!blogStatus[`${blog.name}Open`] && anyBlogOpen)}
						]"
						@click="openBlog(blog.name)">
						{{ blog.title }}
						<arrow-expand-vertical class="blog__toggle-arrow">
						</arrow-expand-vertical>
					</button>

					<transition appear name="fade" mode="in-out">
						<component
							v-if="blogStatus[`${blog.name}Open`]"
							class="blog__post"
							:is="`${blog.componentName}`">
						</component>
					</transition>

				</section>
			</template>

			<h2 v-else>
				Coming Soon.
			</h2>
		</section>
	</transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Swiper from '@/helpers/swipe'
import ArrowUpBoldBox from 'vue-material-design-icons/ArrowUpBoldBox.vue'
import ArrowExpandVertical from 'vue-material-design-icons/ArrowExpandVertical.vue'
import Blogs from '../static/blogs'
import { BlogInfo } from '../types'

function markdownComponnents() {
	return Blogs.reduce((acc: any, blog: BlogInfo) => {
		acc[blog.name] = () => import(`../markdowns/${blog.name}.md`)
		return acc
	}, {})
}

interface BlogStatus {
	[key: string]: boolean
}

@Component({
	components: {
		ArrowUpBoldBox,
		ArrowExpandVertical,
		...markdownComponnents()
	}
})
export default class Blog extends Vue {
	private blogs: BlogInfo[] = Blogs
	private blogStatus: BlogStatus = {}

	private	get anyBlogOpen(): boolean {
		const blogKeys = Object.keys(this.blogStatus)
		const blogsOpen = blogKeys.filter((blogKey) => this.blogStatus[blogKey] === true).length
		return blogsOpen > 0
	}

	private openBlog(name: string): void {
		this.blogStatus[`${name}Open`] = !this.blogStatus[`${name}Open`]
	}

	private created(): void {
		this.blogs.forEach((blog) => {
			Vue.set(this.blogStatus, `${blog.name}Open`, false)
		})
	}

	private mounted(): void {
		new Swiper('.blog').onDown(() => this.$router.push({ path: '/' })).run()
	}
}
</script>

<style lang="scss">
.blog-enter-active {
  animation: pageScreenIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.blog-leave-active {
  animation: pageScreenOutMobile 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @include tablet {
    animation: pageScreenOutTablet 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}

.fade-enter-active {
  transition: all .45s ease;
}
.fade-leave-active {
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.blog {
	position: absolute;
  padding: 15px;
  height: 100%;
	width: 100%;
	max-width: 1200px;
	color: $secondary-text;
  margin: 0 50%;
  transform: translateX(-50%);
  display: flex;
  justify-items: center;
	flex-direction: column;

	&__title {
		margin-bottom: 10px;
	}

	&__container {
		max-height: 0;
		min-height: 40px;
		margin-bottom: 10px;
		transition: max-height 0.25s ease-out;

		&--open {
			transition: max-height 0.45s ease-out;
			max-height: 1000px;
		}
	}

	&__post {
		margin: 20px 0;

		// styling for markdown
		h1 {
			background-color: $secondary-text-header;
			color: $primary-dark;
			mix-blend-mode: screen;
			width: 100%;
			font-size: 7vw;
			margin-bottom: 10px;

			@include tablet {
				font-size: 3.5vw;
			}
		}

		h2 {
			font-size: 6vw;
			margin-bottom: 10px;
			
			@include tablet {
				font-size: 3vw;
			}
		}

		h3 {
			font-size: 5vw;
			margin-bottom: 10px;
			
			@include tablet {
				font-size: 2.5vw;
			}
		}

		a {
			color: $primary-light-link;
			padding: 0 4px 4px 4px;
			border-radius: 5px;
			border: 2px solid transparent;

			&:visited {
				color: $secondary-dark;
			}

			&:focus,
			&:hover {
				transition-duration: 0.2s;
				outline: none;
				border: 2px solid $secondary-colour;
				color: $secondary-dark;
			}

			&:hover {
				background-color: $secondary-colour;
				color: $primary-text;
			}
		}
	}
	
	&__toggle {
		background: none;
		border: none;
		font-size: 16px;
		color: $secondary-text;
		border: 2px solid transparent;
		border-radius: 5px;
		padding: 5px 5px 1px 5px;
		margin-bottom: 10px;
		display: flex;
		align-items: flex-start;
		transition: opacity 0.2s ease-in;

		&--dimmed {
			transition: opacity 2s cubic-bezier(.64,0,.79,.46);
			opacity: 0.2;
		}

		&:focus,
		&:hover {
			transition-duration: 0.2s;
			outline: none;
			border: 2px solid $secondary-colour;
		}

		&:hover {
			background-color: $secondary-colour;
			color: $primary-text;
		}
	}

	&__toggle-arrow {
		margin: 1px 0 0 5px;
	}

	&__back {
		position: absolute;
		right: 20px;
		height: 26px;
		color: $secondary-colour ;
		border-radius: 5px;
		padding: 0px;
		border: 1px solid transparent;

		&:hover,
		&:focus {
			outline: none;
			color: $primary-light;
			border: 1px solid $primary-light;
		}

		@include tablet {
			transform: scale(1.8);
			right: 30px;
			top: 30px;
		}
	}
}
</style>
