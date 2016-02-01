<template>
    <header>
        <div class="ad">
            <a :href="ad.url"><img :src="ad.img" :alt="ad.alt"></a>
        </div>
        <div class="tool-bar row">
            <div class="logo col-md-3">我是LOGO</div>
            <div class="mini-cart col-md-3">
                <p>我是购物车</p>
                <p>一共有:<span>0</span>件宝贝,总价值：<span>￥0</span></p>
            </div>
        </div>
        <nav-bar
            :nav-bar-object="navBarObject">
        </nav-bar>
    </header>
</template>

<script>
    import NavBar from './Common/NavBar.vue'
    export default {
        name: 'SiteHeader',
        data () {
            return {
                ad: {
                    url: '#',
                    img: 'http://img12.360buyimg.com/da/jfs/t2410/149/1966162380/61874/d01b658c/568c95ffN82df5f4f.jpg',
                    alt: '广告条'
                },
                navBarObject: {
                    direction: 'v',
                    items: [
                        {
                            id: 1,
                            href: '/',
                            title: '宝贝分类',
                            children: {
                                direction: 'horizen',
                                items: [
                                    {
                                        id: 1,
                                        href: '/user/',
                                        title: '大分类一',
                                        children: {
                                            direction: 'horizen',
                                            items: []
                                        }
                                    },
                                    {
                                        id: 2,
                                        href: '/#',
                                        title: '大分类二',
                                        children: {
                                            direction: 'horizen',
                                            items: [
                                                {
                                                    id: 1,
                                                    href: '/#',
                                                    title: '大分类二の小分类一',
                                                    children: {
                                                        direction: 'horizen',
                                                        items: []
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            id: 2,
                            href: '#/',
                            title: '联系我们',
                            children: {
                                direction: 'horizen',
                                items: [

                                ]
                            }
                        },
                        {
                            id: 3,
                            href: '#/',
                            title: '菜单三',
                            children: {
                                direction: 'horizen',
                                items: [

                                ]
                            }
                        },
                        {
                            id: 4,
                            href: '#/',
                            title: '菜单四',
                            children: {
                                direction: 'horizen',
                                items: [

                                ]
                            }
                        }
                    ]
                }
            }
        },
        components: {
            NavBar
        }
    }
</script>

<style lang="stylus">
@import "../variables.styl"
.tool-bar
    width $w7
    margin 0 auto
    .logo
        font-size 3*$fs
    .mini-cart
        float right
.ad
    width $full;
    img
        width $full
nav
    width $w7
    margin 0 auto
</style>