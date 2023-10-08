import { createStore } from 'vuex';
import axios from 'axios';

export const store = createStore({
	state() {
		return {
			favorites: [
				{
					id: 1,
					isFavoriteStatus: true,
				},
				{
					id: 2,
					isFavoriteStatus: true,
				},
				{
					id: 3,
					isFavoriteStatus: false,
				},
				{
					id: 4,
					isFavoriteStatus: true,
				},
				{
					id: 5,
					isFavoriteStatus: false,
				},
				{
					id: 6,
					isFavoriteStatus: true,
				},
				{
					id: 7,
					isFavoriteStatus: true,
				},
			],
			isOpenMenu: false,
			goods: [],
		};
	},
	getters: {
		getFavorites(state) {
			return state.favorites;
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

		setGoods(state, goods) {
			this.state.goods = goods;
		},
	},
	actions: {
		fetchGoods({ commit }) {
			return axios
				.get('api/product.json', {
					headers: {
						'Access-Control-Allow-Origin': '*',
					},
				})
				.then((response) => {
					commit('setGoods', response.data);
					console.log('response', response.data);
				});
		},
		localStorageFavoriteStatus({ commit, state }, id) {
			commit('changeFavoriteStatus', id);
			localStorage.setItem('favorites', JSON.stringify(state.favorites));
		},
	},
});
