<template>
	<div
		class="rn-author-bg-area bg_image--9 bg_image ptb--150"
		:style="'background-image:url(' + currentUser.user_bg_image + ')'"
	>
		<div class="container">
			<div class="row"></div>
		</div>
	</div>

	<div class="rn-author-area mb--30 mt_dec--120">
		<div class="container">
			<div class="row padding-tb-50 align-items-center d-flex">
				<div class="col-lg-12">
					<div class="author-wrapper">
						<div class="author-inner">
							<div class="user-thumbnail">
								<img :src="currentUser.user_avatar" alt="" />
							</div>
							<div class="rn-author-info-content">
								<h4 class="title">
									{{ currentUser.user_display_name }}
								</h4>
								<div class="follow-area">
									<div class="follow followers">
										<span>186k <a href="#" class="color-body">followers</a></span>
									</div>
									<div class="follow following">
										<span>156 <a href="#" class="color-body">following</a></span>
									</div>
								</div>
								<div class="author-button-area">
									<span class="btn at-follw follow-button"
										><i data-feather="user-plus"></i> Follow</span
									>
									<span
										class="btn at-follw share-button"
										data-bs-toggle="modal"
										data-bs-target="#shareModal"
										><i data-feather="share-2"></i
									></span>
									<div class="count at-follw">
										<div class="share-btn share-btn-activation dropdown">
											<button
												class="icon"
												type="button"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<svg
													viewBox="0 0 14 4"
													fill="none"
													width="16"
													height="16"
													class="sc-bdnxRM sc-hKFxyN hOiKLt"
												>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
														fill="currentColor"
													></path>
												</svg>
											</button>

											<div class="share-btn-setting dropdown-menu dropdown-menu-end">
												<button
													type="button"
													class="btn-setting-text report-text"
													data-bs-toggle="modal"
													data-bs-target="#reportModal"
												>
													Report
												</button>
												<button type="button" class="btn-setting-text report-text">
													Claim Owenership
												</button>
											</div>
										</div>
									</div>
									<a href="edit-profile.html" class="btn at-follw follow-button edit-btn"
										><i data-feather="edit"></i
									></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="rn-authore-profile-area">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="tab-wrapper-one">
						<nav class="tab-button-one">
							<div class="nav nav-tabs" id="nav-tab" role="tablist">
								<button
									class="nav-link active"
									id="nav-home-tab"
									data-bs-toggle="tab"
									data-bs-target="#nav-home"
									type="button"
									role="tab"
									aria-controls="nav-home"
									aria-selected="true"
								>
									My Stock
								</button>
								<button
									class="nav-link"
									id="nav-profile-tab"
									data-bs-toggle="tab"
									data-bs-target="#nav-profile"
									type="button"
									role="tab"
									aria-controls="nav-profile"
									aria-selected="false"
								>
									Owned
								</button>
								<button
									class="nav-link"
									id="nav-contact-tab"
									data-bs-toggle="tab"
									data-bs-target="#nav-contact"
									type="button"
									role="tab"
									aria-controls="nav-contact"
									aria-selected="false"
								>
									Created
								</button>
								<button
									class="nav-link"
									id="nav-liked-tab"
									data-bs-toggle="tab"
									data-bs-target="#nav-liked"
									type="button"
									role="tab"
									aria-controls="nav-liked"
									aria-selected="false"
								>
									Liked
								</button>
							</div>
						</nav>
					</div>
				</div>
			</div>

			<div class="tab-content rn-bid-content" id="nav-tabContent">
				<div
					class="tab-pane row g-5 d-flex fade show active"
					id="nav-home"
					role="tabpanel"
					aria-labelledby="nav-home-tab"
				>
					<author-items></author-items>
				</div>
				<div
					class="tab-pane row g-5 d-flex fade"
					id="nav-profile"
					role="tabpanel"
					aria-labelledby="nav-profile-tab"
				>
					<!-- <stock-list :queryparams="{ per_page: 3 }"></stock-list> -->
				</div>
				<div
					class="tab-pane row g-5 d-flex fade"
					id="nav-contact"
					role="tabpanel"
					aria-labelledby="nav-contact-tab"
				>
					<!-- <stock-list></stock-list> -->
				</div>
				<div
					class="tab-pane row g-5 d-flex fade"
					id="nav-liked"
					role="tabpanel"
					aria-labelledby="nav-contact-tab"
				>
					<!-- <stock-list></stock-list> -->
				</div>
			</div>
		</div>
	</div>
	<div class="profile-content container">
		<h3>
			Hello, <strong>{{ currentUser.user_display_name }}</strong>
		</h3>
		<p>
			<strong>Token:</strong>
			{{ currentUser.token.substring(0, 20) }} ...
			{{ currentUser.token.substr(currentUser.token.length - 20) }}
		</p>
		<p>
			<strong>Nickname:</strong>
			{{ currentUser.user_nicename }}
		</p>
		<p>
			<strong>Email:</strong>
			{{ currentUser.user_email }}
		</p>
		<a href="#" class="btn btn-blue" @click="handleLogout">Log out</a>
	</div>
</template>

<script>
import AuthorItems from '@/components/sections/AuthorItems/AuthorItems'
export default {
	components: { AuthorItems },
	name: 'Profile',
	computed: {
		currentUser() {
			return this.$store.state.auth.user
		}
	},
	mounted() {
		if (!this.currentUser) {
			this.$router.push('/login')
		}
	},
	methods: {
		handleLogout(user) {
			this.$router.push('/')
			this.$store.dispatch('auth/logout', user)
		}
	}
}
</script>
