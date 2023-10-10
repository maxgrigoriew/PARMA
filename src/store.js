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
		getProductsCount(state) {
			return state.favorites.length;
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

			document.querySelector('body')?.classList.add('active');
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
					console.log('response', response.data);
				});
		},
		localStorageFavoriteStatus({ commit, state }, id) {
			commit('changeFavoriteStatus', id);
			localStorage.setItem('favorites', JSON.stringify(state.favorites));
		},
	},
});
