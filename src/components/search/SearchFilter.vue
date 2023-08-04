<template>
	<div class="order-2 order-lg-1 search-filter">
		<div class="nu-course-sidebar">
			<filter-type></filter-type>
			<filter-file-type></filter-file-type>
			<filter-color></filter-color>
			<filter-orientation></filter-orientation>
		</div>
	</div>
</template>

<script>
import FilterType from '@/components/search/filter/filterType'
import FilterFileType from '@/components/search/filter/filterFileType'
import FilterColor from '@/components/search/filter/filterColor'
import FilterOrientation from '@/components/search/filter/filterOrientation'
export default {
	components: { FilterType, FilterFileType, FilterColor, FilterOrientation }
}
</script>
