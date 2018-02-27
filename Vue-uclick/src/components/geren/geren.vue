<template>
	<div class="geren">
		<div class="header">
			<div><img :src="user.headImgUrl" alt=""></div>
			<div>{{user.nickName}}</div>
			<div class="box">
				<div>
					<div><img src="./img/shop-1.png" alt=""></div>
					<div>我的订单</div>
				</div>
				<div>
					<div><img src="./img/home-1.png" alt=""></div>
					<div>地址管理</div>
				</div>
			</div>
		</div>
		<div class="zhuangtai">
			<div>
				<img src="./img/weifukuan.png" alt="">
				<p>未付款</p>
			</div>
			<div>
				<img src="./img/going.png" alt="">
				<p>在路上</p>
			</div>
			<div>
				<img src="./img/history.png" alt="">
				<p>历史订单</p>
			</div>
		</div>
		<div class="footer">
			<div>常见问题</div>
			<div>意见反馈</div>
		</div>
		<footer-nav ></footer-nav>
	</div>
</template>
<script>
import FooterNav from '@/components/footernav/FooterNav'
import axios from 'axios'
	export default{
		components: {
			'footer-nav':FooterNav
		},
		data () {
			return {
				user:{}
			}
		},//
		props: {},//继承
		watch: {},//监听
		methods: {
			peopel () {
		      axios.get('/user/info').then(res => {
		      	console.log(res)
		        this.user = res.data
		      }).catch(err => {
		        console.log(err)
		      })
		    }
		},
		filters: {},
		computed: {},
		created () {
			this.peopel()
		},
		mounted () {},
		destroyed () {} 
	}
</script>
<style scoped>
	.geren{
		width: 100%;
		/*position:absolute;*/
		/*top: 0;*/
		/*left: 0;*/
		background: #E3E7EB;
	}
	.header{
		width: 100%;
		height:200px;
		background: url(./img/banner5.png);
		background-size: 100% 100%;
		padding-top: 35px;
		position: relative;
	}
	.header>div{
		text-align: center;
		color: white;
		font-weight: bold;
	}
	.header>div>img{
		width: 70px;
		height: 70px;
		border-radius: 35px;
	}
	.box{
		width: 70%;
		height:60px;
		background: white;
		position: absolute;
		right: 0;
		left: 0;
		margin:0 auto;
		bottom: -20px;
		overflow: hidden;
		padding: 5px;
	}
	
	.box>div{
		width: 50%;
		height:30px;
		float: left;
		color: black;
		font-weight: normal;
		font-size: 12px;
	}
	.box>:first-child div{
		border-right: 1px solid rgb(0,159,232);
	}
	.box>div>div>img{
		margin-top:10px;
		width: 30px;
		height: 30px;
	}
	.zhuangtai{
		width: 90%;
		height: 60px;
		margin: 0 auto;
		background: white;
		border-radius: 5px;
		margin-top: 45px;
		display: flex;
		justify-content:space-around;
	}
	.zhuangtai>div{
		width: 33%;
		text-align: center;
		font-size: 13px;
		padding: 10px;
	}

	.zhuangtai>div>img{
		width: 25px;
		height: 25px;
	}
	.footer{
		width: 90%;
		height: 100px;
		margin: 0 auto;
		margin-top:25px; 
		border-radius: 5px;
		background: white;
		padding:15px;
	}
	.footer>div{
		margin-top:10px; 
		height: 30px;
		border-bottom: 1px solid #D0C6C9;
		padding-bottom:5px; 
	}
</style>