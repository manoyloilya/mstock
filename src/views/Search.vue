<template>
	<div class="explore-area rn-section-gapTop">
		<div class="container-fluid px-5">
			<div class="row g-5">
				<search-filter></search-filter>
				<div class="order-1 order-lg-2 search-content">
					<search-content></search-content>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SearchFilter from '@/components/search/SearchFilter'
import SearchContent from '@/components/search/SearchContent'

export default {
	components: {
		SearchFilter,
		SearchContent
	}
}
</script>
