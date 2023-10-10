<script setup>
import IsButton from './UI/IsButton.vue';

const { product } = defineProps({
	product: {
		type: Object,
		required: true,
	},
});

const emits = defineEmits({
	onAddProduct: {
		type: Object,
	},
});
</script>

<template>
	<div class="card">
		<div class="card__inner">
			<div class="card__img">
				<img src="./../assets/images/camera.png" alt="" />
			</div>

			<div class="card__content">
				<p class="card__title">{{ product.title }}</p>
				<span class="card__subtitle">{{ product.description }}</span>

				<div class="card__bottom">
					<span class="card__price">{{ product.price }}</span>
					<is-button
						icon="true"
						:active="product"
						@click="emits('onAddProduct', product)"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import './../assets/scss/vars.scss';
.card {
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
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__content {
		padding: 20px;
		height: 100%;
		display: flex;
		flex-direction: column;
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
}
</style>
