import { createStore } from 'vuex'
import { newestItemsModule } from '@/store/newestItemsModule'
import { authorItemsModule } from '@/store/authorItemsModule'
import { searchItemsModule } from '@/store/searchItemsModule'
import { auth } from '@/store/auth.module'

export default createStore({
	state: {
		isAuth: false
	},
	modules: {
		newestItems: newestItemsModule,
		authorItems: authorItemsModule,
		searchItems: searchItemsModule,
		auth
	}
})
