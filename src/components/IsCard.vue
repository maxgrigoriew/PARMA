<script setup>
import IsButton from './UI/IsButton.vue';
</script>

<template>
	<div class="card">
		<div class="card__inner">
			<div class="card__img">
				<img src="./../assets/images/camera.png" alt="" />
			</div>

			<div class="card__content">
				<p class="card__title">Cashmere II</p>
				<span class="card__subtitle">Покрывало</span>

				<div class="card__bottom">
					<span class="card__price">200000 Р</span>
					<is-button icon="true" />
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
	&__inner {
		display: flex;
		flex-direction: column;
	}
	&__img {
		background: #bababa;
		// width: -100px;
		height: 280px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__content {
		padding: 20px;
	}
	&__title {
		font-size: 24px;
		line-height: 1;
	}
	&__subtitle {
		display: inline-block;
		color: var(--gray);
		font-size: 14px;
		line-height: 1;
		margin-bottom: 66px;
	}
	&__bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>
