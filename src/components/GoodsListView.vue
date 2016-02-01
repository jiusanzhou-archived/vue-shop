<template>
    <div>
        <goods-list
            :list-data="listData" :class="{'loading': $loadingRouteData}">
        </goods-list>
        <div class="row">
            <pavigation :pvdata="pvdata"></pavigation>
        </div>
    </div>
</template>

<script>
    import shop_data from './lib/data.js'
    import GoodsList from './Common/GoodsList.vue'
    import Pavigation from './Common/Pavigation.vue'
    export default {
        name: 'GoodsListView',
        data () {
            return {
                title: 'NONE',
                pvdata: {
                    total: 0,
                    limit: 16,
                    current: 1,
                    url: '/'
                },
                goods: []
            }
        },
        computed: {
            listData: function(){
                return {title: this.title, goods: this.goods}
            }
        },
        components: {
             GoodsList,
             Pavigation
        },
        route: {
            data ({ to: {path, params: {category, page}} }) {
                return shop_data.getGoodsList(category, page).then(function(d){
                    return {
                        title: d.data.title,
                        pvdata: {
                            total: d.data.total,
                            limit: d.data.limit,
                            current: d.data.current,
                            url: path.replace(/(\d*)$/, '')
                        },
                        goods: d.data.goods
                    }
                });
            }
        }
    }
</script>

<style lang="stylus">
@import "../variables.styl"
.goods-list
    .goods-list-title
        margin 0
        margin-bottom $fs
        padding $fs
        background $priceclr
        color $wt
        h4
            margin 0
    .goods-item
        padding 0 0.2*$fs $fs 0.2*$fs
</style>