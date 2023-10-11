import { createStore } from 'vuex';
import axios from 'axios';

export const store = createStore({
	state() {
		return {
			favorites: [],
			isOpenMenu: false,
			products: [],
		};
	},
	getters: {
		getFavorites: (state) => {
			return state.favorites;
		},
		getFavoritesCount: (state) => {
			return state.favorites.length;
		},

		findProductById: (state) => (id) => {
			return state.products.find((product) => product.id === id);
		},
	},
	mutations: {
		setFavoriteStatus(state) {
			if (localStorage.getItem('favorites')) {
				state.favorites = JSON.parse(localStorage.getItem('favorites'));
			}
		},

		changeFavoriteStatus(state, id) {
			const findItem = state.favorites.find((item) => item.id === id);
			if (findItem) {
				findItem.isFavoriteStatus = !findItem.isFavoriteStatus;
			}
		},

		changeMenu(state) {
			state.isOpenMenu = !state.isOpenMenu;
			document.querySelector('body')?.classList.toggle('active');
		},

		setProducts(state, products) {
			this.state.products = products;
		},

		addProduct(state, product) {
			if (!this.state.favorites.find((item) => item.id === product.id)) {
				this.state.favorites.push(product);
			} else {
				this.state.favorites = this.state.favorites.filter(
					(item) => item.id !== product.id
				);
			}
		},
		initialData(state) {
			const favorites = JSON.parse(localStorage.getItem('favorites'));
			store.state.favorites = favorites;
		},

		setLocalStorage(state) {
			localStorage.setItem('favorites', JSON.stringify(state.favorites));
		},

		removeProduct(state, product) {
			this.state.favorites = this.state.favorites.filter(
				(item) => item.id !== product.id
			);
		},
	},
	actions: {
		fetchProducts({ commit }) {
			return axios
				.get('api/product.json', {
					headers: {
						'Access-Control-Allow-Origin': '*',
					},
				})
				.then((response) => {
					commit('setProducts', response.data);
				});
		},

		addLocalStorageFavorites({ commit, state }, product) {
			commit('addProduct', product);
			commit('setLocalStorage');
		},
		removeLocalStorageFavorites({ commit, state }, product) {
			commit('addProduct', product);
			commit('setLocalStorage');
		},
	},
});
