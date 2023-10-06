<template>
	<header class="header">
		<div class="container">
			<div class="header__inner">
				<a class="header__logo">
					<img src="./../assets/images/logo.png" alt="Логотип компании Alef" />
				</a>
				<nav class="nav">
					<ul class="nav__list">
						<li class="nav__item">
							<router-link to="/" class="nav__link">Главная</router-link>
						</li>
						<li class="nav__item">
							<span class="nav__link-cart-counter">22</span>
							<router-link to="/about" class="nav__link">Корзина</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
@import './../assets/scss/vars.scss';
.header {
	&__inner {
		padding: 30px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__logo {
		max-width: 145px;
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
</style>
