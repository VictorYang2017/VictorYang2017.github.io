import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/actorslist',
		name: 'ActorsList',
		component: () => import('../views/ActorsList.vue'),
	},
	{
		path: '/actorslist/:actorId',
		name: 'ActorDetails',
		component: () => import('../views/ActorDetails.vue'),
		props(route) {
			return {
				actorId: route.params.actorId,
			};
		},
	},
];

const router = createRouter({
	// history: createWebHistory('/projects/projects2020/vue-two/'),
	history: createWebHistory(),
	routes,
});

export default router;
