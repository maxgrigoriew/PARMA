<script setup>
import { ref, computed, onMounted } from 'vue';
import IsButton from './../components/UI/IsButton.vue';
import IsCard from './../components/IsCard.vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
	store.commit('initialData');
});
</script>

<template>
	<div class="about">
		<h2 class="title">Корзина</h2>
		<ul class="card-list" v-if="store.getters.getFavorites.length > 0">
			<transition-group>
				<li
					class="card-list__item"
					v-for="product in store.getters.getFavorites"
					:key="product.id"
				>
					<is-card
						:isRow="true"
						:product="product"
						@onRemoveProduct="
							store.dispatch('removeLocalStorageFavorites', product)
						"
					/>
				</li>
			</transition-group>
		</ul>
		<p v-else>Корзина пуста</p>
	</div>
</template>

<style lang="scss">
@import '../assets/scss/vars';
.card-list {
	&__item {
		margin-bottom: 15px;
	}
}
</style>
