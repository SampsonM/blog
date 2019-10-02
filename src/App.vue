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

	private mounted(): void {
		this.setGradient()
	}

	private setGradient(): void {
		const app: HTMLElement | null = document.querySelector('.app')

		// rgb vals of the gradients
		const gradients: RgbStartStopValues[] = [
			{ start: [204, 192, 64], stop: [63, 77, 30] },
			{ start: [3, 101, 72], stop: [2, 73, 52] }
		]
		// how long for each transition
		const transitionTime = 4

		// internal type consts
		let currentIndex: number = 0 // where we are in the gradients array
		let nextIndex: number = 1 // what index of the gradients array is next
		let stepsCount: number = 0 // steps counter
		const stepsTotal = Math.round(transitionTime * 60) // total amount of steps
		const rgbSteps: RgbStartStopValues = { // how much to alter each rgb value
			start: [0, 0, 0],
			stop: [0, 0, 0]
		}
		const rgbValues: RgbStartStopValues = { // the current rgb values, gets altered by rgb steps on each interval
			start: [0, 0, 0],
			stop: [0, 0, 0]
		}

		let appStyle: any

		if (app) {
			appStyle = app.style
		}
		let color1: any
		let color2: any

		// sets next current and next index of gradients array
		function setNextGradientNumber(num: number) {
			return (num + 1 < gradients.length) ? num + 1 : 0
		}

		// work out how big each rgb step is
		function calcStepSize(a: number, b: number) {
			return (a - b) / stepsTotal
		}

		// populate the rgbValues and rgbSteps objects
		function calcSteps() {
			for (const startStop in rgbValues) {
				if (rgbValues[startStop]) {
					for (let i = 0; i < 3; i++) {
						rgbValues[startStop][i] = gradients[currentIndex][startStop][i]
						rgbSteps[startStop][i] = calcStepSize(gradients[nextIndex][startStop][i], rgbValues[startStop][i])
					}
				}
			}
		}

		// update current rgb vals, update DOM element with new CSS background
		function updateGradient() {
			// update the current rgb vals
			for (const key in rgbValues) {
				if (rgbValues[key]) {
					for (let i = 0; i < 3; i++) {
						rgbValues[key][i] += rgbSteps[key][i]
					}
				}
			}

			const tColor1 = `rgb(${rgbValues.start[0]}, ${rgbValues.start[1]}, ${rgbValues.start[2]})`
			const tColor2 = `rgb(${rgbValues.stop[0]}, ${rgbValues.stop[1]}, ${rgbValues.stop[2]}`

			if (tColor1 !== color1 || tColor2 !== color2) {

				color1 = tColor1
				color2 = tColor2

				appStyle.borderImageSource = `linear-gradient(45deg, ${color1} 25%, ${color2} 100%)`
				console.log('test', appStyle.borderImageSource)
			}

			stepsCount++

			if (stepsCount > stepsTotal) {
				stepsCount = 0
				currentIndex = setNextGradientNumber(currentIndex)
				nextIndex = setNextGradientNumber(nextIndex)

				calcSteps()
				window.requestAnimationFrame(updateGradient)
			}
		}

		calcSteps()

		window.requestAnimationFrame(updateGradient)
	}
}
</script>

<style lang="scss">
.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  height: 100%;
  overflow: auto;
  transition-duration: 0.3s;
  border: 8px solid;
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
