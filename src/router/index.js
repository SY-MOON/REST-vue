import Login from '@/components/login'
import Main from '@/components/main'

const routes = [
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
	{
		path: '/',
		name: 'main',
		component: Main,
	}
]

export default routes