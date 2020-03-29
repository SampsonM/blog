<template>
  <div :class="['app', { 'menu-closed': !isMenuOpen }]">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import { RgbStartStopValues } from './types'

@Component
export default class App extends Vue {
	@State private isMenuOpen!: boolean
	@Action private toggleMenu: any

	private created(): void {
		if (window.location.href.split('/')[3] !== '' && this.isMenuOpen) {
			this.toggleMenu()
		}

		this.$router.beforeEach((to, from, next) => {
			const pageLeft = from.path.split('/')[1]
			this.toggleMenu(pageLeft)
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
</style>
