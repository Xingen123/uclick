<template>
  <div class="home">
    <div class="small-box">
      <app-banner :urlImg="listImg" ></app-banner>
      <div class="box">
          <div>下载APP,发现更多产品</div>
          <a href="#">立即下载</a>
      </div>
    </div>
    <div class="title">一月精选</div>
    <div class="text">
      <home-content v-for="(item,index) in productList" 
                    :key="index"
                    :name="item.goodsName"
                    :ico="item.displayImgUrl"
                    :goodsId="item.goodsId"
                    :money="item.displayPrice"
                    @deTail="deTail(item.goodsId)"> 
      </home-content>
    </div>
    <footer-nav ></footer-nav>
  </div>
</template>
<script>
 import Banner from '@/components/Banner/Banner'
 import HomeContent from '@/components/home-content/content'
 import FooterNav from '@/components/footernav/FooterNav'
 import axios from 'axios'
     export default {
        components: {
          'app-banner': Banner,
          'home-content':HomeContent,
          'footer-nav':FooterNav
        },
        data(){
            return {
                listImg: [],
                productList: []
            }
        },
        props: {},
        watch: {
          '$route' () {
            this.toShopCart()
          }
        },
        methods:{
          deTail (id){
            this.$router.push({
              path: '/detail/' + id,
              query: {
                id: id
              }
            })
          },
          toShopCart () {  //商品列表
            this.loading=true
            axios.get('/index')
            .then(res => {
              console.log(res)
               this.productList = res.data.goodsList
               this.listImg = res.data.swipers
               // this.loading=false
            }).catch(error => {
              console.log(error);
            });
          }
        },
        created () {
          // 初始化列表数据
         this.toShopCart()
        },
        mounted (){}
      }
</script>
<style scoped>
	.home{
		width: 100%;
	}
  .small-box{
    width: 100%;
    position: relative;
  }
	.box{
   width:60%;
   height:80px;
   position:absolute;
   top:150px;
   left:0;
   z-index:10;
   padding-left:10px;
  }
  .box>div{
   font-size:16px;
  }
  .box>a{
   display:block;
   width:100px;
   height:30px;
   margin-top:10px;
   background-color:rgb(0,159,232);
   border-radius:4px;
   text-align:center;
   line-height:30px;
   text-decoration:none;
   color:white;
  }
  .text{
    width: 90%;
    margin: 0 auto;
    margin-bottom: 60px;
    overflow: hidden;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
  }
  .title{
      margin-top:15px;
      margin-left:15px;
      font-family: bold;
      color: gray;
  }

</style>