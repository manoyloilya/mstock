<template>
	<form class="search-form-wrapper" action="#">
		<input type="search" placeholder="Search Here" aria-label="Search" @input="setSearchQuery" />
		<div class="search-icon">
			<button>
				<i :class="search ? 'feather-x' : 'feather-search'"></i>
			</button>
		</div>
	</form>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import SearchFilter from '@/components/search/SearchFilter'
import SearchContent from '@/components/search/SearchContent'

export default {
	data() {
		return {
			typing: false
		}
	},
	components: {
		SearchFilter,
		SearchContent
	},

	methods: {
		setSearchQuery(event) {
			clearTimeout(this.typing)
			this.typing = setTimeout(delayFetch.bind(this), 1000)
			function delayFetch() {
				this.setPage(1)
				this.setSearch(event.target.value)
				this.fetchItems()
			}
		},
		...mapMutations({
			setSearch: 'searchItems/setSearch',
			setPage: 'searchItems/setPage',
			setLoading: 'searchItems/setLoading'
		}),
		...mapActions({
			fetchItems: 'searchItems/fetchItems'
		})
	},
	computed: {
		...mapState({
			search: state => state.searchItems.search,
			isItemsLoading: state => state.searchItems.isItemsLoading
		})
	}
}
</script>
