<template>
	<!-- New items Start -->
	<div class='rn-new-items'>
		<div class='container'>
			<!-- <div class="row g-5"> -->
			<search-form></search-form>
			<div class='row stock-items-row' v-if='!isItemsLoading' :key='$route.fullPath'>
				<stock-item v-if='items.length' v-for='stock in items' :stock='stock' :key='stock.id' />
				<h4 v-else>No items found</h4>
			</div>
			<!-- </div> -->
		</div>
	</div>
	<pagination></pagination>
</template>

<script>
import StockItem from '@/components/sections/NewestItems/StockItem'
import { mapActions, mapMutations, mapState } from 'vuex'
import SearchForm from '@/components/search/SearchForm.vue'
import { merge } from 'lodash'
import Pagination from '@/components/search/Pagination'

export default {
	components: {
    Pagination,
		StockItem,
		SearchForm
	},
	methods: {
		changePage(pageNumber) {
			this.$router.push({
				query: { ...this.$route.query, page: pageNumber }
			})
			this.setPage(pageNumber)
			this.fetchItems()
		},
		...mapMutations({
			setPage: 'searchItems/setPage',
			setQuery: 'searchItems/setQuery'
		}),
		...mapActions({
			fetchItems: 'searchItems/fetchItems'
		})
	},
	beforeMount() {
		const routeQuery = _.mapKeys(this.$route.query, (value, key) => _.camelCase(key))
		this.setQuery(routeQuery)
		this.fetchItems()
	},
	computed: {
		...mapState({
			items: state => state.searchItems.items,
			page: state => state.searchItems.query.page,
			totalPages: state => state.searchItems.totalPages,
			query: state => state.searchItems.query,
			isItemsLoading: state => state.searchItems.isItemsLoading
		})
	}
}
</script>
