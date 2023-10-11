import { createWebHistory, createRouter } from 'vue-router';
import Home from './src/pages/Home.vue';
import Cart from './src/pages/Cart.vue';
import Product from './src/pages/Product.vue';
const routes = [
	{
		path: '/',
		component: Home,
		meta: {
			layout: 'MainLayout',
		},
	},
	{
		name: 'product',
		path: '/:id',
		component: Product,
	},
	{
		path: '/cart',
		component: Cart,
		meta: {
			layout: 'MainLayout',
		},
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
