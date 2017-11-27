import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import music from '@/components/Music'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Index',
			component: index
		},
		{
			path: '/music',
			name: 'Music',
			component: music
		}

	]
})
