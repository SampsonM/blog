<template>
  <div :class="['app', { 'menu-closed': !isMenuOpen }]">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, Action, Mutation } from 'vuex-class'

@Component
export default class App extends Vue {
	@State private isMenuOpen!: boolean
	@Action private toggleMenu: any
	@Mutation private TOGGLE_MENU: any

	private created(): void {
		// if page opens on main menu, show the border
		if (window.location.href.split('/')[3] === '') {
			this.TOGGLE_MENU(true)
		}

		this.$router.beforeEach((to, from, next): void => {
			const pageTo = to.path.split('/')[1]

			switch (pageTo.toLowerCase()) {
				case '':
					this.TOGGLE_MENU(true)
					break
				case 'blog':
					this.TOGGLE_MENU(false)
					break
				case 'about':
					this.TOGGLE_MENU(false)
					break
			}

			next()

		})
	}
}
</script>

<style lang="scss">
.app {
  display: block;
  position: relative;
  height: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  height: 100%;
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  transition-duration: 0.3s;
  border: 8px solid;
	border-image-source: linear-gradient(45deg, #656929 25%, #024934 100%);
  border-image-slice: 1;
  background: linear-gradient(45deg, $primary-dark, #03533b);
  background-size: 400% 400%;
  animation: gradient 18s ease infinite;
}

.menu-closed {
  animation: none;
  animation: gradientMenuClosed 3s ease-in 0s;
  background-position:0% 100%;
  border-width: 0;
}

.reactive-img {
	width: 100%;
}

@include desktop {
	.reactive-img {
		width: auto;
		height: 320px;
	}
}
</style>
