import Vue from 'vue'
import { RootState, MutationType, ActionType } from '../types'
import Vuex from 'vuex'

Vue.use(Vuex)

const RootState: RootState = {
	isMenuOpen: false,
	isAboutOpen: false,
	isBlogOpen: false
}

const mutations: MutationType = {
	TOGGLE_MENU(state, payload) {
		state.isMenuOpen = payload
	},
	TOGGLE_ABOUT(state) {
		state.isAboutOpen = !state.isAboutOpen
	},
	TOGGLE_BLOG(state) {
		state.isBlogOpen = !state.isBlogOpen
	}
}

const actions: ActionType = {
	toggleMenu({ commit }, payload) { /* yet to be implemented */ }
}

export default new Vuex.Store({
	state: RootState,
	mutations,
	actions
})
