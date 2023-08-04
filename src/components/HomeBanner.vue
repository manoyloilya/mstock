<template>
	<!-- start banner area -->
	<div class="banner-area banner-12 bg_image--23 bg_image with-down-shadow">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="banner-xii-wrapper">
						<div class="banner-content-wrapper">
							<p class="pre-title">Nuron marketplace</p>
							<h1 class="title">
								Dive into image marketplace with a relevant Product
							</h1>
							<p class="post-title">
								Unit of data stored on a digital ledger, called a blockchain, that certifies a
								digital asset to be unique and therefore not interchangeable
							</p>
							<form class="search-form-wrapper" action="#">
								<input type="search" placeholder="Search Here" aria-label="Search" />
								<div class="search-icon">
									<button>
										<i class="feather-search"></i>
									</button>
								</div>
							</form>
							<div class="wallet-image-wrapper">
								<a href="#" class="avatar" data-tooltip="BITLY">
									<img src="assets/images/icons/wallet/4.png" alt="wallet_image" />
								</a>
								<a href="#" class="avatar" data-tooltip="D-Coin">
									<img src="assets/images/icons/wallet/7.png" alt="wallet_image" />
								</a>
								<a href="#" class="avatar" data-tooltip="Trans Card">
									<img src="assets/images/icons/wallet/8.png" alt="wallet_image" />
								</a>
								<a href="#" class="avatar" data-tooltip="Meta Mask">
									<img src="assets/images/icons/wallet/1.png" alt="wallet_image" />
								</a>
								<a href="#" class="avatar" data-tooltip="E-Currency">
									<img src="assets/images/icons/wallet/3.png" alt="wallet_image" />
								</a>
								<a href="#" class="avatar" data-tooltip="BitCoin">
									<img src="assets/images/icons/wallet/2.png" alt="wallet_image" />
								</a>
								<a href="#" class="avatar" data-tooltip="Attar Process">
									<img src="assets/images/icons/wallet/6.png" alt="wallet_image" />
								</a>
								<a href="#" class="avatar" data-tooltip="Mark JOrdan">
									<img src="assets/images/icons/wallet/5.png" alt="wallet_image" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End banner area -->
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import sal from 'sal.js'

export default {
	mounted() {
		sal()
	}
}
</script>

<style></style>
