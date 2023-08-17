<template>
	<!-- New items Start -->
	<div class='rn-new-items'>
		<div class='container'>
			<search-form></search-form>
			<div class='row stock-items-row' v-if='!isItemsLoading && items.length' :key='$route.fullPath'>
				<stock-item v-for='stock in items' :stock='stock' :key='stock.id' />
			</div>
      <h4 v-else>No items found</h4>
		</div>
	</div>
  <pagination v-on:page-updated="changePage($event)" :totalPages='totalPages' :page='page'></pagination>
</template>

<script>
import StockItem from '@/components/sections/NewestItems/StockItem'
import { mapActions, mapMutations, mapState } from 'vuex'
import SearchForm from '@/components/search/SearchForm.vue'
import Pagination from '@/components/search/Pagination'

export default {
	components: {
    Pagination,
		StockItem,
		SearchForm
	},
	methods: {
		changePage(pageNumber) {
		  console.log('page updated' + pageNumber)
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
