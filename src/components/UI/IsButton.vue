<script setup>
import { computed } from 'vue';
const props = defineProps(['active', 'icon']);

const className = computed(() => ({
	'button--empty': props.icon,
}));
</script>
<template>
	<button class="button active" :class="className">
		<span class="button__icon" v-if="props.icon">
			<svg
				v-if="!props.active"
				width="20px"
				height="20px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
					stroke="#000000"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<svg
				v-if="props.active"
				width="17"
				height="20"
				viewBox="0 0 17 20"
				fill="#BA967D"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="basket"
					d="M16.5438 19.1647L15.3268 5.61138C15.2936 5.24125 14.9834 4.95774 14.6118 4.95774H12.1021V3.82582C12.1021 1.71626 10.3859 0 8.27646 0C6.1671 0 4.45112 1.71626 4.45112 3.82582V4.95774H1.93966C1.5681 4.95774 1.25788 5.24125 1.22467 5.61138L0.00287038 19.218C-0.015124 19.4188 0.0520678 19.6178 0.188079 19.7666C0.324089 19.9153 0.51638 20 0.71786 20H15.8337C15.8343 20 15.8351 20 15.8356 20C16.2322 20 16.5535 19.6786 16.5535 19.2821C16.5534 19.2422 16.5502 19.2029 16.5438 19.1647ZM5.88685 3.82582C5.88685 2.50792 6.95885 1.43572 8.27656 1.43572C9.59436 1.43572 10.6665 2.50792 10.6665 3.82582V4.95774H5.88685V3.82582ZM1.50311 18.5644L2.59598 6.39346H4.45112V7.67719C4.45112 8.07364 4.77244 8.39505 5.16898 8.39505C5.56553 8.39505 5.88685 8.07364 5.88685 7.67719V6.39346H10.6665V7.67719C10.6665 8.07364 10.9878 8.39505 11.3843 8.39505C11.7809 8.39505 12.1022 8.07364 12.1022 7.67719V6.39346H13.9556L15.0485 18.5644H1.50311Z"
					fill="#BA967D"
				/>
			</svg>
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
	transition: $transition;
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	align-items: center;

	&__icon {
		width: 20px;
		height: 20px;
		& svg path {
			transition: $transition;
		}
	}

	&:hover {
		background-color: var(--light);
		color: var(--accent);
		// border: 2px solid var(--accent);
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

.active {
}
</style>
