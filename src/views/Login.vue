<template>
	<!-- login form -->
	<div class="login-area rn-section-gapTop">
		<div class="container">
			<div class="row g-5">
				<div class=" offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
					<login-form></login-form>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="social-share-media form-wrapper-one">
						<h6>Another way to log in</h6>
						<p>Lorem ipsum dolor sit, amet sectetur adipisicing elit.cumque.</p>
						<button class="another-login login-facebook">
							<img class="small-image" src="assets/images/icons/google.png" alt="" />
							<span>Log in with Google</span>
						</button>
						<button class="another-login login-facebook">
							<img class="small-image" src="assets/images/icons/facebook.png" alt="" />
							<span>Log in with Facebook</span>
						</button>
						<button class="another-login login-twitter">
							<img class="small-image" src="assets/images/icons/tweeter.png" alt="" />
							<span>Log in with Twitter</span>
						</button>
						<button class="another-login login-linkedin">
							<img class="small-image" src="assets/images/icons/linkedin.png" alt="" />
							<span>Log in with linkedin</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- login form end -->
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
	components: {
		LoginForm
	},
	methods: {},

	computed: {},

	mounted() {}
}
</script>

<style scoped></style>
