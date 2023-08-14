<template>
	<div class='nuron-form-check'>
		<input :type='type'
			   :name='name'
			   :id="'option-' + value"
			   :value='value'
			   @input='updateInput'
			   :checked="isChecked()"
		/>
		<label :class="bgcolor ? 'bg-color-' + bgcolor : ''" :for="'option-' + value">
			{{ optiontitle }}
		</label>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	props: {
		modelValue: [String, Number, Array],
		optiontitle: [String, Number],
		value: [String, Number],
		bgcolor: [String, Number],
		type: [String, Number],
		name: [String, Number]
	},
	methods: {
		isChecked() {
			return Object.values(_.split(this.query[this.name], ',').filter(Number)).includes(this.value);
		},
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	},
	computed: {
		...mapState({
			query: state => state.searchItems.query,
		})

	}
}
</script>
