<template>
	<div v-if="items.length > 0">
		<div class="row">
			<transition-group name="user-list">
				<stock-item v-for="stock in items" :stock="stock" :key="stock.id" />
			</transition-group>
		</div>
	</div>
	<h2 v-else>No Items</h2>
</template>

<script>
import StockItem from '@/components/sections/NewestItems/StockItem'
import { mapActions, mapState } from 'vuex'

export default {
	components: {
		StockItem
	},
	mounted() {
		this.fetchNewestItems()
	},
	methods: {
		...mapActions({
			fetchNewestItems: 'newestItems/fetchNewestItems'
		})
	},
	computed: {
		...mapState({
			items: state => state.newestItems.items
		})
	}
}
</script>
