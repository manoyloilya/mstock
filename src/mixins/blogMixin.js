import { mapActions, mapState } from 'vuex'

export default {
	methods: {
		...mapActions({
			fetchStockItems: 'stock/fetchStockItems'
		})
	},

	computed: {
		...mapState({
			stockItems: state => state.stock.stockItems,
			isPostsLoading: state => state.post.isPostsLoading,
			page: state => state.post.page,
			limit: state => state.post.limit
		})
	}
}
