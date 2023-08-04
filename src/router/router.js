import Main from '@/views/Main'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login'
import Search from '@/views/Search'

const Profile = () => import('@/components/Profile.vue')

const routes = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/search',
		name: 'search',
		component: Search
	},
	// {
	// 	path: '/search/page/:page/category/:category',
	// 	component: Search
	// },
	// {
	// 	path: '/category/:category',
	// 	component: Main
	// },
	{
		path: '/profile',
		name: 'profile',
		// lazy-loaded
		component: Profile
	}
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
})

export default router
