<script setup>
import IsHeader from '../components/IsHeader.vue';
</script>

<template>
	<div class="page-wrapper">
		<IsHeader />
		<div class="page-content">
			<div class="container">
				<slot />
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.page-wrapper {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
.page-content {
	padding: 30px 0;
}
</style>
