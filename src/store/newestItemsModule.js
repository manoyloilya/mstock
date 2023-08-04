import axios from 'axios'

export const newestItemsModule = {
	state: () => ({
		items: [],
		limit: 12,
		isPostsLoading: false
	}),
	mutations: {
		setNewestItems(state, items) {
			state.items = items
		},

		setLoading(state, bool) {
			state.isPostsLoading = bool
		}
	},
	actions: {
		async fetchNewestItems({ state, commit }) {
			try {
				commit('setLoading', true)
				const response = await axios.get(
					'https://dev.bahamacoders.com/mstock/wp-json/wp/v2/stock?_embed',
					{
						params: {
							per_page: state.limit
						}
					}
				)
				commit('setNewestItems', response.data)
			} catch (e) {
				console.log(e)
			} finally {
				commit('setLoading', false)
			}
		}
	},
	namespaced: true
}
