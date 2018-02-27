<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(str,index) in urlImg" :key="index" :style="{ backgroundImage:'url('+str+')' }">  
                <div class="bg"></div> 
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        props: {
            urlImg:{
                default:[]
            }
        },
        mounted() {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplayDisableOnInteraction: false,
                speed: 600,
                autoplay: 2000,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
        }
    }
</script>

<style lang="less" >
    .swiper-container {
        width: 100%;
        height: 15rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;  
        }
        .bg{
            width: 100%;
            height: 100%;
            background:red;
            position:absolute;
            top:0;
            left:0;
            background: linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(227, 231, 235, 0.8));
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
             position:relative;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination{
            text-align:right;
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.3rem;
            display: inline-block;
            background: wihte;
             border-radius:0;
        }
        .swiper-pagination-bullet-active{
            background-color:wihte;
        }
       
    }
</style>