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
					<is-button
						><svg
							width="17"
							height="20"
							viewBox="0 0 17 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								id="basket"
								d="M16.5438 19.1647L15.3268 5.61138C15.2936 5.24125 14.9834 4.95774 14.6118 4.95774H12.1021V3.82582C12.1021 1.71626 10.3859 0 8.27646 0C6.1671 0 4.45112 1.71626 4.45112 3.82582V4.95774H1.93966C1.5681 4.95774 1.25788 5.24125 1.22467 5.61138L0.00287038 19.218C-0.015124 19.4188 0.0520678 19.6178 0.188079 19.7666C0.324089 19.9153 0.51638 20 0.71786 20H15.8337C15.8343 20 15.8351 20 15.8356 20C16.2322 20 16.5535 19.6786 16.5535 19.2821C16.5534 19.2422 16.5502 19.2029 16.5438 19.1647ZM5.88685 3.82582C5.88685 2.50792 6.95885 1.43572 8.27656 1.43572C9.59436 1.43572 10.6665 2.50792 10.6665 3.82582V4.95774H5.88685V3.82582ZM1.50311 18.5644L2.59598 6.39346H4.45112V7.67719C4.45112 8.07364 4.77244 8.39505 5.16898 8.39505C5.56553 8.39505 5.88685 8.07364 5.88685 7.67719V6.39346H10.6665V7.67719C10.6665 8.07364 10.9878 8.39505 11.3843 8.39505C11.7809 8.39505 12.1022 8.07364 12.1022 7.67719V6.39346H13.9556L15.0485 18.5644H1.50311Z"
								fill="#BA967D"
							/>
						</svg>
					</is-button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import './../assets/scss/vars.scss';
.card {
	max-width: 280px;
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
		width: -100px;
		height: 280px;
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
