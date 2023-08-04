<template>
	<!-- New items Start -->
	<div class="rn-new-items">
		<div class="container">
			<!-- <div class="row g-5"> -->
			<search-form></search-form>
			<div class="row stock-items-row" v-if="!isItemsLoading" :key="page">
				<stock-item v-for="stock in items" :stock="stock" :key="stock.id" />
			</div>
			<!-- </div> -->
		</div>
	</div>
	<nav class="pagination-wrapper" aria-label="Page navigation example" v-if="totalPages" :key="page">
		<ul class="pagination single-column-blog">
			<li v-if="page !== 1" class="page-item">
				<a class="page-link" href="#" @click="changePage(page - 1)">Previous</a>
			</li>

			<li v-for="pageNumber in totalPages" :key="pageNumber" class="page-item">
				<a
					v-if="
						page == pageNumber ||
							page == pageNumber - 1 ||
							page == pageNumber + 1 ||
							page == pageNumber - 2 ||
							page == pageNumber + 2 ||
							page == pageNumber - 3 ||
							page == pageNumber + 3 ||
							1 == pageNumber ||
							totalPages == pageNumber
					"
					class="page-link"
					@click="changePage(pageNumber)"
					href="#"
					:class="{
						active: page === pageNumber
					}"
				>
					{{ page == pageNumber - 3 || page == pageNumber + 3 ? '...' : pageNumber }}
				</a>
			</li>
			<li v-if="page !== totalPages" class="page-item">
				<a class="page-link" href="#" @click="changePage(page + 1)">Next</a>
			</li>
		</ul>
	</nav>
</template>

<script>
import StockItem from '@/components/sections/NewestItems/StockItem'
import { mapActions, mapMutations, mapState } from 'vuex'
import SearchForm from '@/components/search/SearchForm.vue'
export default {
	components: {
		StockItem,
		SearchForm
	},
	methods: {
		changePage(pageNumber) {
			this.$router.push({
				name: 'search',
				query: { page: pageNumber }
			})
			this.setPage(pageNumber)
			this.fetchItems()
		},
		...mapMutations({
			setPage: 'searchItems/setPage'
		}),
		...mapActions({
			fetchItems: 'searchItems/fetchItems'
		})
	},
	mounted() {
		if (this.$route.query.page) {
			this.setPage(this.$route.query.page)
		}
		console.log(this.$route)
		this.fetchItems()
	},
	computed: {
		...mapState({
			items: state => state.searchItems.items,
			page: state => state.searchItems.query.page,
			totalPages: state => state.searchItems.totalPages,
			type: state => state => state.searchItems.query.stockType,
			isItemsLoading: state => state.searchItems.isItemsLoading
		})
	}
}
</script>
