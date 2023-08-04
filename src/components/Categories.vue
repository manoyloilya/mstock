<template>
	<!-- start category area -->
	<div class="category-area pt--70">
		<div class="container">
			<div class="row g-5">
				<!-- start single category -->
				<div
					class="col-lg-3 col-xl-2 col-md-4 col-sm-6"
					data-sal-delay="200"
					data-sal="slide-up"
					data-sal-duration="800"
				>
					<a class="category-style-one" href="#">
						<i class="feather-image"></i>
						<span class="category-label">Vectors</span>
					</a>
				</div>
				<!-- end single category -->
				<!-- start single category -->
				<div
					class="col-lg-3 col-xl-2 col-md-4 col-sm-6"
					data-sal-delay="300"
					data-sal="slide-up"
					data-sal-duration="800"
				>
					<a class="category-style-one" href="#">
						<i class="feather-music"></i>
						<span class="category-label">Illustrations</span>
					</a>
				</div>
				<!-- end single category -->
				<!-- start single category -->
				<div
					class="col-lg-3 col-xl-2 col-md-4 col-sm-6"
					data-sal-delay="400"
					data-sal="slide-up"
					data-sal-duration="800"
				>
					<a class="category-style-one" href="#">
						<i class="feather-map"></i>
						<span class="category-label">Mockups</span>
					</a>
				</div>
				<!-- end single category -->
				<!-- start single category -->
				<div
					class="col-lg-3 col-xl-2 col-md-4 col-sm-6"
					data-sal-delay="500"
					data-sal="slide-up"
					data-sal-duration="800"
				>
					<a class="category-style-one" href="#">
						<i class="feather-search"></i>
						<span class="category-label">Templates</span>
					</a>
				</div>
				<!-- end single category -->
				<!-- start single category -->
				<div
					class="col-lg-3 col-xl-2 col-md-4 col-sm-6"
					data-sal-delay="600"
					data-sal="slide-up"
					data-sal-duration="800"
				>
					<a class="category-style-one" href="#">
						<i class="feather-grid"></i>
						<span class="category-label">Photos</span>
					</a>
				</div>
				<!-- end single category -->
				<!-- start single category -->
				<div
					class="col-lg-3 col-xl-2 col-md-4 col-sm-6"
					data-sal-delay="700"
					data-sal="slide-up"
					data-sal-duration="800"
				>
					<a class="category-style-one" href="#">
						<i class="feather-activity"></i>
						<span class="category-label">Backgrounds</span>
					</a>
				</div>
				<!-- end single category -->
			</div>
		</div>
	</div>
	<!-- end category area -->
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import sal from 'sal.js'

export default {
	props: {},

	mounted() {
		sal()
	}
}
</script>

<style></style>
