<template>
	<div class="form-wrapper-one">
		<h4>Login</h4>
		<Form @submit="handleLogin" :validation-schema="schema">
			<div class="mb-5">
				<label for="username" class="form-label">Email address</label>
				<Field name="username" type="text" class="form-control" value="mstock_admin" />
				<ErrorMessage name="username" class="error-feedback" />
			</div>
			<div class="mb-5">
				<label for="password" class="form-label">Password</label>
				<Field name="password" type="password" class="form-control" value="mstock_pass" />
				<ErrorMessage name="password" class="error-feedback" />
			</div>
			<div class="mb-5 rn-check-box">
				<input type="checkbox" class="rn-check-box-input" id="exampleCheck1" />
				<label class="rn-check-box-label" for="exampleCheck1">Remember me leter</label>
			</div>
			<button :disabled="loading" type="submit" class="btn btn-primary mr--15">
				Log In
			</button>
			<a href="sign-up.html" class="btn btn-primary-alta">Sign Up</a>
			<div class="form-group">
				<div v-if="message" class="alert alert-danger" role="alert">
					{{ message }}
				</div>
			</div>
		</Form>
	</div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
	name: 'Login',
	components: {
		Form,
		Field,
		ErrorMessage
	},
	data() {
		const schema = yup.object().shape({
			username: yup.string().required('Username is required!'),
			password: yup.string().required('Password is required!')
		})

		return {
			loading: false,
			message: '',
			schema
		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn
		}
	},
	created() {
		if (this.loggedIn) {
			this.$router.push('/profile')
		}
	},
	methods: {
		handleLogin(user) {
			this.loading = true

			this.$store.dispatch('auth/login', user).then(
				() => {
					this.$router.push('/profile')
				},
				error => {
					this.loading = false
					this.message =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString()
				}
			)
		}
	}
}
</script>

<style scoped></style>
