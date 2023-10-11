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
		:isDescription="true"
		:product="store.getters.findProductById(route.params.id)"
	/>
</template>
