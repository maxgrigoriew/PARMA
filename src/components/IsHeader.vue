<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
</script>
>
<template>
	<header class="header" :class="{ active: store.state.isOpenMenu }">
		<div class="container">
			<div class="header__inner">
				<a class="header__logo">
					<img src="./../assets/images/logo.png" alt="Логотип компании Alef" />
				</a>
				<nav class="nav" :class="{ active: store.state.isOpenMenu }">
					<ul class="nav__list">
						<li class="nav__item">
							<router-link to="/" class="nav__link">Главная</router-link>
						</li>
						<li class="nav__item">
							<span class="nav__link-cart-counter">{{
								store.getters.getProductsCount
							}}</span>

							<router-link to="/about" class="nav__link">Корзина</router-link>
						</li>
					</ul>
				</nav>

				<button
					class="header__burger"
					:class="{ active: store.state.isOpenMenu }"
					@click="store.commit('changeMenu')"
				>
					<span class="line line1"></span>
					<span class="line line2"></span>
					<span class="line line3"></span>
				</button>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
@import './../assets/scss/vars.scss';
.header {
	&__inner {
		padding: 0 20px;
		min-height: 100px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__logo {
		max-width: 145px;
	}
	&__burger {
		display: none;
	}
}

.nav {
	&__list {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}
	&__item {
		position: relative;
	}
	&__link {
		color: inherit;
		font-family: inherit;
		font-size: 14px;
		transition: var(--transition);
		&:hover {
			color: var(--accent);
		}
		&-cart-counter {
			position: absolute;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			top: -12px;
			right: -8px;
			// height: 20px;
			min-width: 20px;
			background-color: var(--accent);
			color: var(--light);
			border-radius: 20px;
			font-size: 12px;
			border: 1px solid var(--accent);
			padding: 3px;
			line-height: 1;
		}
	}
}

@media (max-width: 678px) {
	.header {
		background-color: var(--light);
		&__inner {
			padding: 0;
			min-height: 60px;
		}
		&.active {
			background-image: none;
		}
		&__burger {
			display: flex;
			align-self: center;
			cursor: pointer;
			height: 36px;
			padding: 4px 0;
			width: 36px;
			z-index: 2;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			& .line {
				display: block;
				height: 4px;
				width: 100%;
				border-radius: 10px;
				background-color: var(--accent);
				transition: all var(--transition);
			}

			&.active {
				.line1 {
					transform: rotate(45deg) translate(4px, -4px);
					transform-origin: left;
				}
				.line2 {
					opacity: 0;
				}
				.line3 {
					transform: rotate(-45deg) translate(3px, 6px);
					transform-origin: left;
				}
			}
		}
	}

	.nav {
		position: fixed;
		background-color: var(--light);
		top: 60px;
		left: -100vw;
		right: 100vw;
		min-height: calc(100vh - 60px);
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all var(--transition);
		text-align: center;
		&__list {
			flex-direction: column;
			padding: 20px 40px 60px;
			gap: 20px 0;
		}
		&__link {
			color: var(--blue-middle);
			font-size: 21px;
			line-height: 1.5;
			text-transform: uppercase;
			padding: 20px;
			transition: all var(--transition);
			&:hover {
				color: var(--accent);
			}
		}
		&.active {
			left: 0;
			right: 0;
		}
	}
}
</style>
