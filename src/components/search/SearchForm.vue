<template>
	<form class="search-form-wrapper" action="#">
		<input :value="$route.query.search" type="search" placeholder="Search Here" aria-label="Search" @input="setSearchQuery" />
		<div class="search-icon">
			<button @click="clearSearchQuery">
				<i :class="search ? 'feather-x' : 'feather-search'"></i>
			</button>
		</div>
		<select name="per_page" id="per_page" @input="setPerPage">
			<option
          v-for='value in this.limitOptions'
          :selected='this.limit === value'
          :value='value'
      >
        {{ value }}
      </option>
		</select>
	</form>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import SearchFilter from '@/components/search/SearchFilter'
import SearchContent from '@/components/search/SearchContent'

export default {
	data() {
		return {
			typing: false,
      limitOptions: ['50', '30', '20', '10']
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
		clearSearchQuery(event) {
			this.setPage(1)
			this.setSearch("")
			this.fetchItems()
			event.preventDefault()
		},
		setPerPage(event) {
			this.setLimit(event.target.value)
			this.fetchItems()
		},
		...mapMutations({
			setSearch: 'searchItems/setSearch',
			setPage: 'searchItems/setPage',
			setLoading: 'searchItems/setLoading',
			setLimit: 'searchItems/setLimit'
		}),
		...mapActions({
			fetchItems: 'searchItems/fetchItems'
		})
	},
	computed: {
		...mapState({
			search: state => state.searchItems.query.search,
			limit: state => state.searchItems.query.limit,
			isItemsLoading: state => state.searchItems.isItemsLoading
		})
	}
}
</script>
