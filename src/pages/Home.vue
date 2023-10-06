<script setup>
import { ref, computed, onMounted } from 'vue';
import IsInput from './../components/UI/IsInput.vue';
import IsButton from './../components/UI/IsButton.vue';
import IsCard from './../components/IsCard.vue';
import { useStore } from 'vuex';

const store = useStore();

const limitChildren = ref(5);

const parentName = computed({
	get() {
		return store.state.parent.name;
	},
	set(value) {
		store.commit('setParentName', value);
	},
});

const parentAge = computed({
	get() {
		return store.state.parent.age;
	},
	set(value) {
		store.commit('setParentAge', value);
	},
});

const addChild = () => store.commit('addChild');

const removeChild = (id) => store.commit('removeChild', id);

const saveForm = () => {
	store.commit('saveForm');
};

const childrenCount = computed(() =>
	store.state.children.length < limitChildren.value ? true : false
);

onMounted(() => store.commit('initialData'));
</script>

<template>
	<ul class="card-list">
		<li class="card-list__item" v-for="good in 4" :key="good">
			<is-card />
		</li>
	</ul>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vars';

.card-list {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 107px;
}
</style>
