<template>
    <div class="goods-list" v-if="listData!=undefined" :class="{ 'loading': !listData.goods.length }">
        <div class="row">
            <div class="goods-list-title col-md-12">
                <h4>{{ listData.title }}</h4>
            </div>
        </div>
        <div class="row">
            <div class="goods-item col-md-3" v-for="goodsitem in listData.goods">
                <goods-list-item
                    :goodsitem="goodsitem"
                    track-by="goods_id">
                </goods-list-item>
            </div>
        </div>
    </div>
</template>

<script>
    import GoodsListItem from './GoodsListItem.vue'
    export default {
        name: 'GoodsList',
        data () {
            return {}
        },
        props: [
            'listData'
        ],
        components: {
             GoodsListItem
        }/*,
        route: {
            data ({ to }) {
                return shop_data.getGoodsList(to.params.category, to.params.page).then(function(d){
                    return {
                        title: d.data.title,
                        pvdata: {
                            total: d.data.total,
                            limit: d.data.limit,
                            current: d.data.current,
                            url: to.path.replace(/(\d*)$/, '')
                        },
                        goods: d.data.goods
                    }
                });
            }
        }*/
    }
</script>

<style lang="stylus">
@import "../../variables.styl"
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