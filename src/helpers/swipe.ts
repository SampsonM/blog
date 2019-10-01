export default class Swipe {
	public xDown?: number | null
	public yDown?: number | null
	public xDiff?: number | null
	public yDiff?: number | null
	public element: HTMLElement | null

	constructor(element: HTMLElement | string) {
		this.element = typeof (element) === 'string' ? document.querySelector(element) : element

		if (this.element) {
			this.element.addEventListener('touchstart', (evt: any) => {
				this.xDown = evt.touches[0].clientX
				this.yDown = evt.touches[0].clientY
			}, false)
		}
	}

	public onLeft(callback?: any): this {
		this.onLeft = callback
		return this
	}

	public onRight(callback?: any): this {
		this.onRight = callback
		return this
	}

	public onUp(callback?: any): this {
		this.onUp = callback
		return this
	}

	public onDown(callback?: any): this {
		this.onDown = callback
		return this
	}

	public run(): void {
		if (this.element) {
			this.element.addEventListener('touchmove', (evt: any) => {
				this.handleTouchMove(evt)
			}, false)
		}
	}

	private handleTouchMove(evt: any): void {
		if (!this.xDown || !this.yDown) {
			return
		}

		const xUp = evt.touches[0].clientX
		const yUp = evt.touches[0].clientY

		this.xDiff = this.xDown - xUp
		this.yDiff = this.yDown - yUp

		if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) { // Most significant
			this.xDiff > 0
				? this.onLeft()
				: this.onRight()
		} else {
			this.yDiff > 0
				? this.onUp()
				: this.onDown()
		}

		// Reset values
		this.xDown = null
		this.yDown = null
	}
}
