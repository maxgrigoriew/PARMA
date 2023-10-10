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
	if (limitProducts.value < store.state.products.length) {
		limitProducts.value += 4;
	}
};

onMounted(() => {
	store.dispatch('fetchProducts');
});
</script>

<template>
	<ul class="card-list">
		<transition-group>
			<li class="card-list__item" v-for="product in products" :key="product.id">
				<a href="#" class="card-list__link">
					<is-card
						:product="product"
						@onAddProduct="store.commit('addProduct', product)"
					/>
				</a>
			</li>
		</transition-group>
	</ul>

	<div class="button-wrapper">
		<is-button @click="addProducts">Показать еще</is-button>
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
