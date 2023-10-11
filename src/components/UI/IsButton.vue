<script setup>
import { computed } from 'vue';
const props = defineProps(['active', 'icon', 'disabled', 'close']);

const className = computed(() => ({
	'button--empty': props.icon,
	'button--disabled': props.disabled,
	'button--close': props.close,
}));
</script>
<template>
	<button class="button" :class="className">
		<span
			class="button__icon"
			:class="{ active: props.active }"
			v-if="props.icon"
		>
		</span>
		<slot />
	</button>
</template>
<style lang="scss">
@import '../../assets/scss/vars';
.button {
	border-radius: 4px;
	background: var(--light);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	border: 2px solid transparent;
	padding: 3px 18px;
	color: #6a6a6a;
	transition: var(--transition);
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	align-items: center;

	&__icon {
		width: 20px;
		height: 20px;
		overflow: hidden;
		display: flex;
		align-items: center;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			width: 20px;
			height: 20px;
			background-image: url('./../../assets/images/basket.svg');
			background-repeat: no-repeat;
			background-position: center;
			transition: var(--transition);
			top: 0;
			left: 0;
		}
		&::after {
			content: '';
			position: absolute;
			width: 20px;
			height: 20px;
			background-image: url('./../../assets/images/heart.svg');
			background-repeat: no-repeat;
			background-position: center;
			top: 0;
			right: 0;
			transition: var(--transition);
			transform: translateX(-100%);
		}
	}

	&__icon.active {
		&::before {
			transform: translateX(100%);
		}
	}
	&__icon.active {
		&::after {
			transform: translateX(0);
		}
	}

	&:hover {
		background-color: var(--light);
		color: var(--accent);
	}
}

.button--empty {
	padding: 2px;
	box-shadow: none;
	& svg path {
		fill: var(--accent);
	}
	&:hover {
		fill: var(--accent);
	}
}

.button--disabled {
	pointer-events: none;
	opacity: 0.5;
}

.button--close {
	overflow: hidden;
	background-color: transparent;
	padding: 0;
	margin: 0;
	box-shadow: none;
	width: 16px;
	height: 16px;
	border-radius: 0;
	position: relative;
	border: 1px solid transparent;

	&:hover {
		background-color: transparent;

		&::before,
		&::after {
			background-color: var(--accent);
		}
	}
	&::before {
		content: '';
		position: absolute;
		top: -1px;
		left: 0;
		width: 20px;
		height: 2px;
		background-color: #333;
		transform: rotate(45deg);
		transform-origin: left;
		border-radius: 2px;
		transition: var(--transition);
	}
	&::after {
		content: '';
		position: absolute;
		top: -1px;
		right: 0;
		width: 20px;
		height: 2px;
		background-color: #333;
		transform: rotate(-45deg);
		transform-origin: right;
		border-radius: 2px;
		transition: var(--transition);
	}
}
</style>
