import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import music from '@/components/Music'
import form from '@/components/Form'
import detail from '@/components/Detail'
import map from '@/components/Map'

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
		},
		{
			path: '/form',
			name: 'Form',
			component: form
		},
		{
			path: '/detail/:hash',
			name: 'Detail',
			component: detail
		},
		{
			path: '/map',
			name: 'Map',
			component: map
		}

	]
})
