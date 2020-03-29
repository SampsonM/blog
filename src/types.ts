import { ActionTree, MutationTree } from 'vuex'

export interface RootState {
	isMenuOpen: boolean
	isAboutOpen: boolean
	isBlogOpen: boolean
	isPortfolioOpen: boolean
}

export interface MutationType extends MutationTree<RootState> {
	TOGGLE_MENU: (state: RootState) => void
	TOGGLE_ABOUT: (state: RootState) => void
	TOGGLE_BLOG: (state: RootState) => void
	TOGGLE_PORTFOLIO: (state: RootState) => void
}

export interface ActionType extends ActionTree<RootState, any> {
	toggleMenu: (context: Context, payload: string) => void
}

interface Context {
	commit: (payload: MutationNames) => void
}

type MutationNames = 'TOGGLE_ABOUT' | 'TOGGLE_BLOG' | 'TOGGLE_MENU' | 'TOGGLE_PORTFOLIO' | string

export interface RgbStartStopValues {
	[key: string]: number[]
	start: number[]
	stop: number[]
}

export interface BlogInfo {
	name: string
	componentName: string
	title: string
}
