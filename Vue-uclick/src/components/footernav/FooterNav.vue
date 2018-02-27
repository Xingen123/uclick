<template>
    <div class="footer-nav">
        <ul class="nav-group">
            <li class="nav-item">
                <router-link to="/home" >
                    <dl>
                        <dt class="homeicons"></dt>
                        <dd>主页</dd>
                    </dl>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/prefer">
                    <dl>
                        <dt class="prefericons"></dt>
                        <dd>优惠</dd>
                    </dl>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/shop">
                    <dl>
                        <dt class="shopicons"></dt>
                        <dd>购物</dd>
                    </dl>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/geren">
                    <dl>
                        <dt class="gerenicons"></dt>
                        <dd>我的</dd>
                    </dl>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-nav {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    margin:0 auto;
    background: white;
    z-index: 100000;
}

.nav-group {
    display: flex;
    flex-direction: row;
}

.nav-item {
    flex: 1;
}
.nav-item>a{
  text-decoration: none;
}
.nav-item dl {
    text-align: center;

}

.nav-item dl dt{
    display: block;
    width: 20px;
    height: 20px;
    margin: 5px auto;
}
.homeicons{
    background: url(./icons/home.png) no-repeat;
    background-size: 100% 100%;
}
.prefericons{
    background: url(./icons/prefer.png) no-repeat;
    background-size: 100% 100%;
}
.shopicons{
    background: url(./icons/shop.png) no-repeat;
    background-size: 100% 100%;
}
.gerenicons{
    background: url(./icons/geren.png) no-repeat;
    background-size: 100% 100%;
}

.nav-item dl dd {
    font-size: 12px;
    color: #C6C6C6;

}
.router-link-active dl .homeicons{
    background: url(./icons/home-1.png) no-repeat;
    background-size: 100% 100%;
}
.router-link-active dl .prefericons{
    background: url(./icons/prefer-1.png) no-repeat;
    background-size: 100% 100%;
}
.router-link-active dl .shopicons{
    background: url(./icons/shop-1.png) no-repeat;
    background-size: 100% 100%;
}
.router-link-active dl .gerenicons{
    background: url(./icons/geren-1.png) no-repeat;
    background-size: 100% 100%;
}
.router-link-active dl dd{
    color:#1296DB;
}
</style>
