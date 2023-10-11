<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import IsCard from './../components/IsCard.vue';

const route = useRoute();
const store = useStore();

const productId = ref(null);
let product = ref(1);

onMounted(() => {
	store.dispatch('fetchProducts');
	productId.value = route.params.id;
	product.value = store.getters.findProductById(route.params.id);
});
</script>

<template>
	<h2 class="title">Описание товара</h2>

	<is-card
		v-if="store.getters.findProductById(route.params.id)"
		:product="store.getters.findProductById(route.params.id)"
	/>
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
