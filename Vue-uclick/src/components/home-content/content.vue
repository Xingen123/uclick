<template>
<div class="home-content">
		<div class="big">
				<div class="small">
					<img v-lazy="ico" :src="ico" @click="deTail">
				</div>
				<div class="footertext">
					<p class="name">{{ name }}</p>
					<div class="price">￥{{ money }}</div>
					<div class="cart"></div>
				</div>
		</div>
</div>
</template>
<script>
	export default{
			data () {
				return {
				}
			},
			props: {
		    goodsId: {
		      type: String,
		      default: ''
		    },
		    ico: {
		      type: String,
		      default: ''
		    },
		    name: {
		      type: String,
		      default: ''
		    },
		    money: {
		      type: Number,
		      default: ''
		    }
		 	 },
		  	methods: {
   			 	toShopCart () {
     				this.$emit('toShopCart')
   				},
   				deTail () {
      				this.$emit('deTail')
   				}
  			}
	}
</script>
<style type="text/css" scoped>
	.home-content{
		padding: 5px;
		float: left;
		background-color: white;
		/*border: 1px solid red;*/
		margin-top:15px; 
		width: calc(50% - 18px);
	}
	.big{
		width:100%;
	}
	.goods{
		margin-top:20px; 
		width:100%;
		height: 250px;
		background-color: white;
	}
	.small{
		width: 100%;
	}
	.small>img{
		width: 100%;
	}
	.name{
		font-size: 15px;
	}
	.footertext{
		width:100%;
		position: relative;
	}
	.price{
		font-size: 12px;
	}
	.cart{
		width: 20px;
		height: 15px;
		position:absolute;
		bottom: 10px;
		right: 5px;
		background:url(./img/cart.png) no-repeat;
		background-size: 100% 100%;
	}
	.detail{
		text-decoration: none;
		color: black;
	}
</style>
