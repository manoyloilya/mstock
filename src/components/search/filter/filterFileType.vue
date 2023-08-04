<template>
	<!-- Start Widget Wrapper  -->
	<div class="nuron-expo-filter-widget widget-shortby">
		<div class="inner">
			<h5 class="widget-title">File Type</h5>
			<div class="content">
				<option-tag
					type="checkbox"
					name="file_type"
					optiontitle="AI"
					value="1443"
					v-model="optionValue"
					@input="changeType"
				></option-tag>
				<option-tag
					type="checkbox"
					name="file_type"
					optiontitle="EPS"
					value="1444"
					v-model="optionValue"
					@input="changeType"
				></option-tag>
				<option-tag
					type="checkbox"
					name="file_type"
					optiontitle="JPG"
					value="1445"
					v-model="optionValue"
					@input="changeType"
				></option-tag>
				<option-tag
					type="checkbox"
					name="file_type"
					optiontitle="PSD"
					value="1442"
					v-model="optionValue"
					@input="changeType"
				></option-tag>
			</div>
		</div>
	</div>
	<!-- End Widget Wrapper  -->
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import OptionTag from '@/components/search/filter/options/optionTag.vue'
export default {
	components: { OptionTag },
	data() {
		return {
			optionValue: []
		}
	},
	methods: {
		changeType() {
			let stockFileTypeArr = this.stockFileType.split(',').filter(Number)
			if (stockFileTypeArr.includes(this.optionValue)) {
				const index = stockFileTypeArr.indexOf(this.optionValue)
				stockFileTypeArr.splice(index, 1)
			} else {
				stockFileTypeArr.push(this.optionValue)
			}
			this.setPage(1)
			this.setStockFileType(stockFileTypeArr.toString())
			this.fetchItems()
		},
		...mapMutations({
			setPage: 'searchItems/setPage',
			setStockFileType: 'searchItems/setStockFileType'
		}),
		...mapActions({
			fetchItems: 'searchItems/fetchItems'
		})
	},
	computed: {
		...mapState({
			stockFileType: state => state.searchItems.stockFileType
		})
	}
}
</script>
