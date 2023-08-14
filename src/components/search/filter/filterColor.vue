<template>
	<!-- Start Widget Wrapper  -->
	<div class="nuron-expo-filter-widget widget-color">
		<div class="inner">
			<h5 class="widget-title">Color</h5>
			<div class="content">
				<option-tag
					v-for="(value, color) in this.colors"
					type="radio"
					name="stockColor"
					:optiontitle="color"
					:value="value"
					:bgcolor="color"
					:key="value"
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
			optionValue: '',
			colors: {
				all: '',
				black: '1483',
				blue: '1481',
				cyan: '1480',
				gray: '1484',
				green: '1479',
				orange: '1476',
				pink: '1477',
				purple: '1482',
				red: '1475',
				white: '1485',
				yellow: '1478'
			}
		}
	},
	methods: {
		changeType() {
			this.setPage(1)
			this.setStockColor(this.optionValue)
			this.fetchItems()
		},
		...mapMutations({
			setPage: 'searchItems/setPage',
			setStockColor: 'searchItems/setStockColor'
		}),
		...mapActions({
			fetchItems: 'searchItems/fetchItems'
		})
	}
}
</script>
