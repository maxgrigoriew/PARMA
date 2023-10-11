<script setup>
import { ref, computed, onMounted } from 'vue';
import IsButton from './../components/UI/IsButton.vue';
import IsCard from './../components/IsCard.vue';
import { useStore } from 'vuex';

const store = useStore();
let limitProducts = ref(4);
let text = ref(false);

const products = computed(() => {
	return store.state.products.slice(0, limitProducts.value);
});

const addProducts = () => {
	if (checkLimit) {
		limitProducts.value += 4;
	}
};

const checkProductInFavorite = (product) => {
	return store.state.favorites.find((item) => item.id === product.id);
};
const checkLimit = computed(
	() => limitProducts.value < store.state.products.length
);

onMounted(() => {
	store.commit('initialData');
	store.dispatch('fetchProducts');
});
</script>

<template>
	<h2 class="title">Список товаров</h2>
	<ul class="card-list">
		<transition-group>
			<li class="card-list__item" v-for="product in products" :key="product.id">
				<router-link
					:to="{ name: 'product', params: { id: product.id } }"
					class="card-list__link"
				>
					<is-card
						:product="product"
						:statusIcon="checkProductInFavorite(product)"
						@onAddProduct="store.dispatch('addLocalStorageFavorites', product)"
					/>
				</router-link>
			</li>
		</transition-group>
	</ul>

	<div class="button-wrapper">
		<is-button @click="addProducts" :disabled="!checkLimit"
			>Показать еще</is-button
		>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vars';

.card-list {
	display: grid;
	grid-template-columns: repeat(4, 280px);
	gap: 40px;
	justify-content: space-between;

	&__link {
		height: 100%;
	}
}

.button-wrapper {
	padding-top: 40px;
	display: flex;
	justify-content: flex-end;
}

@media (max-width: 1280px) {
	.card-list {
		justify-content: space-around;
		grid-template-columns: repeat(3, 280px);
	}
}
@media (max-width: 992px) {
	.card-list {
		grid-template-columns: repeat(2, 280px);
	}
}

@media (max-width: 678px) {
	.card-list {
		grid-template-columns: repeat(1, 280px);
	}
}
</style>
