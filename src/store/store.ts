import Vue from 'vue'
import { RootState, MutationType, ActionType } from '../types'
import Vuex from 'vuex'

Vue.use(Vuex)

const RootState: RootState = {
	isMenuOpen: true,
	isAboutOpen: false,
	isBlogOpen: false,
	isPortfolioOpen: false
}

const mutations: MutationType = {
	TOGGLE_MENU(state) {
		state.isMenuOpen = !state.isMenuOpen
	},
	TOGGLE_ABOUT(state) {
		state.isAboutOpen = !state.isAboutOpen
	},
	TOGGLE_BLOG(state) {
		state.isBlogOpen = !state.isBlogOpen
	},
	TOGGLE_PORTFOLIO(state) {
		state.isPortfolioOpen = !state.isPortfolioOpen
	}
}

const actions: ActionType = {
	toggleMenu({ commit }, payload) {
		commit('TOGGLE_MENU')
		if (payload) {
			commit(`TOGGLE_${payload.toUpperCase()}`)
		}
	}
}

export default new Vuex.Store({
	state: RootState,
	mutations,
	actions
})
