<template>
	<div class="detail">
		<div class="boximg" :style="{ backgroundImage:'url('+product.detailImgUrl+')' } ">
			<div  class="back" @click="back()"></div>
			<div class="box-bg" ></div>
		</div>
		<div class="name"><span style="font-size:20px;">{{product.goodsName}}</span> <span>￥{{product.displayPrice}}</span></div>
		<div class="text" v-for="str in product.goodsDes">
			<p>{{str.title}}</p>
			<div>{{str.content}}</div>
		</div>
		<div class="more" >
			<p>更多推荐</p>
			<div class="shopbox">
				<div v-for="item in recommendGoods">
					<img  :src="item.displayImgUrl" alt="">
					<div style="font-size:12px;">{{item.goodsName}}</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="left">
				<div class="shop"></div>
				<span>加入购物车</span>
			</div>
			<div class="right">
				<div class="friend"></div>
				<span>请朋友喝</span>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default{
	components: {}, //组件
	data () {
		return {
      		product: {},
      		recommendGoods:[]
      	}
	},//
	props: {},//继承
	watch: {},//监听
	methods: {
		back () {
      		this.$router.go(-1)
   		},
		toAxios () {
		axios.get('/goods/detail?goodsId=' + this.$route.params.id)
        .then(res => {
            this.product = res.data
              console.log(res)
            }).catch(error => {
              console.log(error);
            })
        axios.get('/recommend')
        .then(res => {
             this.recommendGoods = res.data.recommendGoods
              console.log(res)
            }).catch(error => {
              console.log(error);
            })
        }
	},
	filters: {},
	computed: {},
	created () {
		this.toAxios()
	},
	mounted () {},
	destroyed () {}  
}
</script>
<style scoped>
	.detail{
		width: 100%;
		padding-bottom: 80px;
	}
	.boximg{
		width: 100%;
		height: 460px;
		background-size: 100%;
		background-repeat: no-repeat;
		position: relative;
	}
	.box-bg{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(227, 231, 235, 1));
	}
	.back{
		width: 30px;
		height: 30px;
		background: url(./img/back.png) no-repeat;
		background-size: 100%;
		position: fixed;
		top: 10px;
		left: 10px;
		z-index: 1;
	}
	.footer{
		width: 80%;
		height: 50px;
		background: white;
		margin: 0 auto;
		border-radius: 25px;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 20px;
		overflow: hidden;
	}
	.left{
		margin-left: 50px;
		float: left;
	}
	.right{
		margin-right: 50px;
		float: right;
	}
	.footer>div{
		width: 95px;
		text-align: center;
		font-size: 12px;
		padding: 2px;
	}
	.footer>div>span{
		margin-top:10px; 
	}
	.shop{
		margin: 0 auto;
		width: 25px;
		height: 25px;
		background: url(./img/shop-1.png) no-repeat;
		background-size: 100%;
	}
	.friend{
		margin: 0 auto;
		width: 25px;
		height: 25px;
		background: url(./img/back.png) no-repeat;
		background-size: 100%;
	}
	.name{
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}
	.text{
		width: 90%;
		margin: 0 auto;
		margin-top:20px;
		background: white;
		padding: 10px;
	}
	.text>p{
		line-height:40px;
	}
	.text>div{
		font-size: 12px;
	}
	.more{
		width: 90%;
		margin: 0 auto;
		margin-top:20px;
		background: white;
		padding: 10px;
	}
	.more>p{
		text-align: center;
	}
	.shopbox{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.shopbox>div{
		padding: 8px;
	}
	.shopbox>div>img{
		width:95px;
		border-radius: 2px;
	}
</style>