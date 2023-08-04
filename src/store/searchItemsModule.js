import axios from 'axios'

export const searchItemsModule = {
	state: () => ({
		items: [],
		limit: 12,
		totalPages: 0,
		query: {
			page: 1,
			search: '',
			stockType: '',
			stockFileType: '',
			stockColor: '',
			stockOrientation: ''
		},
		isItemsLoading: false
	}),
	mutations: {
		setItems(state, items) {
			state.items = items
		},

		setLoading(state, bool) {
			state.isItemsLoading = bool
		},

		setSearch(state, query) {
			state.query.search = query
		},
		setStockType(state, type) {
			state.query.stockType = type
		},
		setStockFileType(state, fileType) {
			state.query.stockFileType = fileType
		},
		setStockOrientation(state, orientation) {
			state.query.stockOrientation = orientation
		},
		setStockColor(state, color) {
			state.query.stockColor = color
		},
		setPage(state, page) {
			state.query.page = Math.ceil(page)
		},
		setTotalPages(state, totalPages) {
			state.totalPages = totalPages
		}
	},
	actions: {
		async fetchItems({ state, commit }) {
			try {
				commit('setLoading', true)
				let params = {
					per_page: state.limit,
					page: state.query.page
				}
				if (state.query.stockType) {
					params.stock_type = state.query.stockType
				}
				if (state.query.stockFileType) {
					params.stock_file_type = state.query.stockFileType
				}
				if (state.query.stockColor) {
					params.stock_color = state.query.stockColor
				}
				if (state.query.stockOrientation) {
					params.stock_orientation = state.query.stockOrientation
				}
				if (state.query.search) {
					params.search = state.query.search
				}
				const response = await axios.get(
					'https://dev.bahamacoders.com/mstock/wp-json/wp/v2/stock?_embed',
					{
						params: params
					}
				)
				commit('setTotalPages', Math.ceil(response.headers['x-wp-totalpages']))
				commit('setItems', response.data)
			} catch (e) {
				console.log(e)
			} finally {
				commit('setLoading', false)
			}
		}
	},
	namespaced: true
}