<template>
	<!-- Start Widget Wrapper  -->
	<div class="nuron-expo-filter-widget widget-shortby">
		<div class="inner">
			<h5 class="widget-title">Category</h5>
			<div class="content">
				<option-tag
          v-for="(value, title) in this.fileTypeArr"
					type="radio"
					name="stockType"
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
import { mapActions, mapMutations } from 'vuex'
import OptionTag from '@/components/search/filter/options/optionTag.vue'
export default {
	components: { OptionTag },
	data() {
		return {
			optionValue: '',
      fileTypeArr: {
        Photos: '2872',
        Vectors: '2873',
        PSD: '2874',
        Icons: '2875',
      }
		}
	},
	methods: {
		changeType() {
			this.setPage(1)
			this.setStockType(this.optionValue)
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
