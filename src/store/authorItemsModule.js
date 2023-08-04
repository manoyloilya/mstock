import axios from 'axios'

export const authorItemsModule = {
	state: () => ({
		items: [],
		limit: 12,
		page: 1,
		totalPages: 0,
		isItemsLoading: false
	}),
	mutations: {
		setAuthorItems(state, items) {
			state.items = items
		},

		setLoading(state, bool) {
			state.isItemsLoading = bool
		},

		setPage(state, page) {
			state.page = Math.ceil(page)
		},
		setTotalPages(state, totalPages) {
			state.totalPages = totalPages
		}
	},

	getters: {
		updateAuthorItems(state) {
			return [...state.items]
		}
	},
	actions: {
		async fetchAuthorItems({ state, commit }, author) {
			try {
				commit('setLoading', true)
				// commit('setAuthorItems', {})
				console.log(state.page)
				const response = await axios.get(
					'https://dev.bahamacoders.com/mstock/wp-json/wp/v2/stock?_embed',
					{
						params: {
							per_page: state.limit,
							page: state.page,
							author: author
						}
					}
				)
				commit('setTotalPages', Math.ceil(response.headers['x-wp-totalpages']))
				commit('setAuthorItems', response.data)
			} catch (e) {
				console.log(e)
			} finally {
				commit('setLoading', false)
			}
		}
	},
	namespaced: true
}
