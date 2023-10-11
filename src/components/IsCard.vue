<script setup>
import { computed } from 'vue';
import IsButton from './UI/IsButton.vue';

const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
	statusIcon: {
		type: Boolean,
		required: true,
		default: false,
	},

	isRow: {
		type: Boolean,
		default: false,
	},
	isDescription: {
		type: Boolean,
		default: true,
	},
});

const emits = defineEmits({
	onAddProduct: {
		type: Object,
	},
	onRemoveProduct: {
		type: Object,
	},
});

const className = computed(() => ({
	'card--row': props.isRow,
	'card--description': props.isDescription,
}));
</script>

<template>
	<div class="card" :class="className">
		<div class="card__inner">
			<div class="card__img">
				<img src="./../assets/images/camera.png" alt="" />
			</div>

			<div class="card__content" @click.prevent>
				<p class="card__title">{{ product.title }}</p>
				<span class="card__subtitle">{{ product.description }}</span>

				<div class="card__bottom">
					<span class="card__price">{{ product.price }} р.</span>
					<is-button
						v-if="!isRow && !isDescription"
						icon="true"
						:active="statusIcon"
						@click.prevent="emits('onAddProduct', product)"
					/>
				</div>
			</div>
			<is-button
				class="card__close"
				v-if="isRow"
				:close="isRow"
				@click="emits('onRemoveProduct', product)"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import './../assets/scss/vars.scss';
.card {
	position: relative;
	overflow: hidden;
	border-radius: 10px;
	background: #fff;
	box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
	height: 100%;
	&__inner {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	&__img {
		background: #bababa;
		height: 280px;
		img {
			margin: 0 auto;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__content {
		padding: 20px;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		cursor: auto;
	}
	&__title {
		font-size: 24px;
		line-height: 1;
		margin-bottom: 5px;
	}
	&__subtitle {
		display: inline-block;
		color: var(--gray);
		font-size: 14px;
		line-height: 1;
		margin-bottom: 10px;
	}
	&__bottom {
		margin-top: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__close {
		position: absolute;
		top: 10px;
		right: 10px;
	}
	&.card--row {
		max-width: 700px;
		border-radius: 0;
		.card__inner {
			flex-direction: row;
		}
		.card__content {
			padding: 20px 30px 20px 20px;
			min-height: 200px;
		}

		.card__img {
			height: auto;
			img {
				width: 200px;
				min-height: 200px;
			}
		}
	}

	&.card--description {
		max-width: 100%;
		border-radius: 0;
		.card__inner {
			flex-direction: row;
		}
		.card__content {
			padding: 40px;
		}

		.card__img {
			height: auto;
			img {
				width: 400px;
				min-height: 400px;
			}
		}
	}
}

@media (max-width: 992px) {
	.card.card--row {
		.card__inner {
			flex-direction: column;
		}
		.card__content {
			padding: 20px 30px 20px 20px;
			min-height: 200px;
		}

		.card__img {
			height: auto;
			img {
				width: 200px;
				min-height: 200px;
			}
		}
	}
	.card.card--description {
		.card__inner {
			flex-direction: row;
		}
		.card__content {
			padding: 40px;
		}

		.card__img {
			height: auto;
			img {
				width: 300px;
				min-height: 300px;
			}
		}
	}
}

@media (max-width: 768px) {
	.card.card--description {
		.card__inner {
			flex-direction: column;
		}
		.card__content {
			padding: 20px;
		}
	}
}
</style>
