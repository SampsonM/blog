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
		if (this.xDown) {
			evt.preventDefault()
		}

		const xUp = evt.touches[0].clientX
		const yUp = evt.touches[0].clientY

		this.xDiff = this.xDown - xUp
		this.yDiff = this.yDown - yUp

		if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) {
			if (this.xDiff < -20) {
				this.onLeft()
			} else if (this.xDiff > 10) {
				this.onRight()
			}
		} else {
			if (this.yDiff > 30) {
				this.onUp()
			} else if (this.yDiff < -30) {
				this.onDown()
			}
		}

		this.xDown = null
		this.yDown = null
	}
}
