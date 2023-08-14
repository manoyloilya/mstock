<template>
	<!-- Start Widget Wrapper  -->
	<div class="nuron-expo-filter-widget widget-shortby">
		<div class="inner">
			<h5 class="widget-title">Category</h5>
			<div class="content">
				<option-tag
					type="radio"
					name="stockType"
					optiontitle="Photos"
					value="2872"
					v-model="optionValue"
					@input="changeType"
				></option-tag>
				<option-tag
					type="radio"
					name="stockType"
					optiontitle="Vectors"
					value="2873"
					v-model="optionValue"
					@input="changeType"
				></option-tag>
				<option-tag
					type="radio"
					name="stockType"
					optiontitle="PSD"
					value="2874"
					v-model="optionValue"
					@input="changeType"
				></option-tag>
				<option-tag
					type="radio"
					name="stockType"
					optiontitle="Icons"
					value="2875"
					v-model="optionValue"
					@input="changeType"
				></option-tag>
			</div>
		</div>
	</div>
	<!-- End Widget Wrapper  -->
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import OptionTag from '@/components/search/filter/options/optionTag.vue'
export default {
	components: { OptionTag },
	data() {
		return {
			optionValue: ''
		}
	},
	methods: {
		changeType() {
			this.setPage(1)
			this.setStockType(this.optionValue)

			// this.$router.push({
			// 	name: 'search',
			// 	query: { page: 1, ...(this.$route.query, {stock_type: this.optionValue}) }
			// })
			this.fetchItems()
		},
		...mapMutations({
			setPage: 'searchItems/setPage',
			setStockType: 'searchItems/setStockType'
		}),
		...mapActions({
			fetchItems: 'searchItems/fetchItems'
		})
	}
}
</script>
