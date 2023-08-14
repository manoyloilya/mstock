<template>
	<!-- Start Widget Wrapper  -->
	<div class="nuron-expo-filter-widget widget-shortby">
		<div class="inner">
			<h5 class="widget-title">Orientation</h5>
			<div class="content">
				<option-tag
					type="checkbox"
					name="stockOrientation"
					optiontitle="Horizontal"
					value="1446"
					v-model="optionValue"
					@input="changeType"
				></option-tag>
				<option-tag
					type="checkbox"
					name="stockOrientation"
					optiontitle="Panoramic"
					value="1449"
					v-model="optionValue"
					@input="changeType"
				></option-tag>
				<option-tag
					type="checkbox"
					name="stockOrientation"
					optiontitle="Square"
					value="1448"
					v-model="optionValue"
					@input="changeType"
				></option-tag>
				<option-tag
					type="checkbox"
					name="stockOrientation"
					optiontitle="Vertical"
					value="1447"
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
import OptionTag from '@/components/search/filter/options/optionTag'
export default {
	components: { OptionTag },
	data() {
		return {
			optionValue: ''
		}
	},
	methods: {
		changeType() {
			let stockOrientationArr = _.split(this.stockOrientation, ',').filter(Number)
			if (stockOrientationArr.includes(this.optionValue)) {
				const index = stockOrientationArr.indexOf(this.optionValue)
				stockOrientationArr.splice(index, 1)
			} else {
				stockOrientationArr.push(this.optionValue)
			}
			this.setStockOrientation(stockOrientationArr.toString())
			this.setPage(1)
			this.fetchItems()
		},
		...mapMutations({
			setPage: 'searchItems/setPage',
			setStockOrientation: 'searchItems/setStockOrientation'
		}),
		...mapActions({
			fetchItems: 'searchItems/fetchItems'
		})
	},
	computed: {
		...mapState({
			stockOrientation: state => state.searchItems.query.stockOrientation
		})
	}
}
</script>
