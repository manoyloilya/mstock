<template>
	<div class="nuron-form-check">
		<input :type="type" :name="name" :id="'option-' + value" :value="value" @input="updateInput" />
		<label :class="bgcolor ? 'bg-color-' + bgcolor : ''" :for="'option-' + value">{{
			optiontitle
		}}</label>
	</div>
</template>

<script>
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
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	}
}
</script>
