<template>
  <div id="app"> 
    <!-- <transition enter-active-class='animated bounceInLeft' leave-active-class='animated bounceOutRight'> -->
            <router-view></router-view>
    <!-- </transition> -->
     <!-- <footer-nav></footer-nav> -->
  </div>
</template>
<script>
// import FooterNav from '@/components/footernav/FooterNav'
// import '@/assets/animate.min.css'
export default {
  name: 'app',
  data () {
        return {
        }
  },
  components: {
    // 'footer-nav':FooterNav
  }
}
</script>

<style>
body {
  background-color: #E3E7EB;
}
#app{
	width: 100%;
}
/*.transitionRouter-enter-active,
.transitionRouter-leave-active {
    transition: all 0.4s;
}

.transitionRouter-enter,
.transitionRouter-leave{
    transform: translate3d(100%, 0, 0);
}*/
</style>
