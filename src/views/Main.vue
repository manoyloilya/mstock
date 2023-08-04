<template>
	<home-banner></home-banner>
	<categories></categories>
	<newest-items></newest-items>
</template>

<script>
import Categories from '@/components/Categories'
import HomeBanner from '@/components/HomeBanner'
import NewestItems from '@/components/sections/NewestItems/NewestItems'

export default {
	components: {
		Categories,
		HomeBanner,
		NewestItems
	}
}
</script>
