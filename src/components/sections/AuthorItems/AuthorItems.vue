<template>
	<!-- New items Start -->
	<div class="rn-new-items rn-section-gapTop">
		<div class="container">
			<div class="row mb--50 align-items-center">
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<h3 class="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
						My Items
					</h3>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
					<div
						class="view-more-btn text-start text-sm-end"
						data-sal-delay="150"
						data-sal="slide-up"
						data-sal-duration="800"
					>
						<a class="btn-transparent" href="#">VIEW ALL<i data-feather="arrow-right"></i></a>
					</div>
				</div>
			</div>
			<div class="row g-5">
				<div class="row" v-if="!isItemsLoading" :key="page">
					<stock-item v-for="stock in items" :stock="stock" :key="stock.id" />
				</div>
			</div>
		</div>
	</div>
	<pagination></pagination>
</template>

<script>
import StockItem from '@/components/sections/NewestItems/StockItem'
import { mapActions, mapMutations, mapState } from 'vuex'
import Pagination from '@/components/search/Pagination'
export default {
	components: {
    Pagination,
		StockItem
	},
	methods: {
		changePage(pageNumber) {
			this.setPage(pageNumber)
			this.fetchAuthorItems(this.author)
		},
		...mapMutations({
			setPage: 'authorItems/setPage'
		}),
		...mapActions({
			fetchAuthorItems: 'authorItems/fetchAuthorItems'
		})
	},
	mounted() {
		this.fetchAuthorItems(this.author)
	},
	computed: {
		...mapState({
			items: state => state.authorItems.items,
			page: state => state.authorItems.page,
			totalPages: state => state.authorItems.totalPages,
			author: state => state.auth.user.user_id,
			isItemsLoading: state => state.authorItems.isItemsLoading
		})
	}
}
</script>
