<template>
	<!-- New items Start -->
	<div class="rn-new-items rn-section-gapTop">
		<div class="container">
			<div class="row mb--50 align-items-center">
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<h3 class="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
						Newest Items
					</h3>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
					<div
						class="view-more-btn text-start text-sm-end"
						data-sal-delay="150"
						data-sal="slide-up"
						data-sal-duration="800"
					>
						<a class="btn-transparent" href="#">VIEW ALL<i data-feather="arrow-right"></i></a>
					</div>
				</div>
			</div>
			<div class="row g-5">
				<newest-items-list></newest-items-list>
			</div>
		</div>
	</div>
</template>

<script>
import NewestItemsList from '@/components/sections/NewestItems/NewestItemsList'
export default {
	components: {
		NewestItemsList
	}
}
</script>
