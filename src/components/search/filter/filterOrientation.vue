<template>
	<!-- Start Widget Wrapper  -->
	<div class="nuron-expo-filter-widget widget-shortby">
		<div class="inner">
			<h5 class="widget-title">Orientation</h5>
			<div class="content">
				<option-tag
          v-for="(value, title) in this.orientationArr"
					type="checkbox"
					name="stockOrientation"
					:optiontitle="title"
					:value="value"
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
			optionValue: '',
      orientationArr: {
        Horizontal: '1446',
        Panoramic: '1449',
        Square: '1448',
        Vertical: '1447',
      }
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
