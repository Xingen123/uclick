<template>
	<div class="shop">
		购物
		 <footer-nav ></footer-nav>
	</div>
</template>
<script>
import FooterNav from '@/components/footernav/FooterNav'
	export default{
		components: {
			'footer-nav':FooterNav
		}
	}
</script>
<style scoped>
	.shop{
    width:100%;
    background: green;
}
</style>