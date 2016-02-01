<template>
    <footer>
        <div class="links">
            <a href="#">联系我们</a>
            <a href="#">关于我们</a>
            <a href="#">平台招商</a>
            <a href="#">商家合作</a>
            <a href="#">营业执照</a>
            <a href="#">商品配送</a>
            <a href="#">退换货服务</a>
            <a href="#">官方淘宝店</a>
        </div>
        <p>Copyright © 2014-2015 尿布师 niaobushi360.com All Rights Reserved, 浙ICP备14033242号</p>
        <p>爱麦客网络科技有限公司 版权所有</p>
    </footer>
</template>
<script>
    export default {
        name: 'SiteFooter',
        data () {
            return {}
        }
    }
</script>
<style lang="stylus">
@import "../variables.styl"
    footer
        text-align center
        background $wt
        .links
            padding 0.5*$fs $fs
            margin-bottom $fs
            a
                &:after, &:before
                    content "|"
                    padding 0 0.5*$fs
</style>