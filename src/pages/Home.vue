<script setup>
import { ref, computed, onMounted } from 'vue';
import IsButton from './../components/UI/IsButton.vue';
import IsCard from './../components/IsCard.vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
	store.dispatch('fetchGoods');
});
</script>

<template>
	<ul class="card-list">
		<li class="card-list__item" v-for="good in 4" :key="good">
			<a href="#">
				<is-card />
			</a>
		</li>
	</ul>

	<is-button>Показать еще</is-button>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vars';

.card-list {
	display: grid;
	grid-template-columns: repeat(4, 280px);
	gap: 40px;
	justify-content: space-between;
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
