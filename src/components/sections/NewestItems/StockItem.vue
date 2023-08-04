<template :key="stock.id">
	<!-- start single product -->
	<div
		:key="stock.id"
		:id="'stock-' + stock.id"
		data-sal="slide-up"
		data-sal-delay="150"
		data-sal-duration="800"
		class="stock-item"
	>
		<div class="product-style-one no-overlay">
			<div class="card-thumbnail">
				<a href="product-details.html">
					<img
						v-if="
							stock._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url !== ''
						"
						:src="stock._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url"
						alt=""
					/>
				</a>
			</div>
			<div class="product-share-wrapper">
				<div class="profile-share">
					<a href="author.html" class="avatar" :data-tooltip="stock._embedded.author[0].name">
						<img :src="stock.author_avatar" alt="Nft_Profile" />
					</a>
					<a class="more-author-text" href="#">
						{{ stock._embedded.author[0].name }}
					</a>
				</div>
				<div class="react-area">
					<svg
						viewBox="0 0 17 16"
						fill="none"
						width="16"
						height="16"
						class="sc-bdnxRM sc-hKFxyN kBvkOu"
					>
						<path
							d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
							stroke="currentColor"
							stroke-width="2"
						></path>
					</svg>
				</div>
			</div>
			<a href="product-details.html">
				<span class="product-name">{{ stock.title.rendered }}</span>
			</a>
		</div>
	</div>
	<!-- end single product -->
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import sal from 'sal.js'

export default {
	props: {
		stock: {
			type: Object,
			required: true
		}
	},

	mounted() {
		sal()
	}
}
</script>

<style></style>
