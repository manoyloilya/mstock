import axios from 'axios'
import router from '@/router/router'

export const searchItemsModule = {
	state: () => ({
		items: [],
		totalPages: 0,
		query: {
			page: 1,
			limit: 50,
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
		setLimit(state, limit) {
			state.query.limit = limit
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
		setQuery(state, query) {
			state.query = query
		},
		setTotalPages(state, totalPages) {
			state.totalPages = totalPages
		}
	},

	actions: {
		getRouteParams() {
			console.log(this.$route.query.page)
			return '0'
		},
		async fetchItems({ state, commit }) {
			try {
				commit('setLoading', true)
				let params = {
					per_page: (state.query.limit) ? state.query.limit : 50,
					page: state.query.page
				}
				if (state.query.stockType) params.stock_type = state.query.stockType
				if (state.query.stockFileType) params.stock_file_type = state.query.stockFileType
				if (state.query.stockColor) params.stock_color = state.query.stockColor
				if (state.query.stockOrientation) params.stock_orientation = state.query.stockOrientation
				if (state.query.search) params.search = state.query.search

				const response = await axios.get(
					'https://dev.bahamacoders.com/mstock/wp-json/wp/v2/stock',
					{
						params: params
					}
				)
				commit('setTotalPages', Math.ceil(response.headers['x-wp-totalpages']))
				commit('setItems', response.data)

				const newRouteQueryFiltered = _.pickBy(state.query, value => value !== '')
				const newRouteQuerySnakeCase = _.mapKeys(newRouteQueryFiltered, (value, key) => _.snakeCase(key))
				router.push({
					query: newRouteQuerySnakeCase
				})
			} catch (e) {
				console.log(e)
			} finally {
				commit('setLoading', false)
			}
		}
	},

	methods: {},
	namespaced: true
}
