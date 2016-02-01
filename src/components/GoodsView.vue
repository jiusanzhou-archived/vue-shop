<template>

    <div class="goods">
        <div class="goods-info">
            <div class="row">
                <div class="col-md-5">
                    <img :src="goods.thumb">
                </div>
                <div class="col-md-7">
                    <dl class="heading">
                        <dt>{{ goods.name }}</dt>
                        <dd>【为保障您能顺利收到商品，收货人姓名请务必用真名并提交身份证号码，以便海关部门审核备案。】</dd>
                    </dl>
                    <p class="info-item"><span class="label">原价：</span><span class="price-text old-price-text">{{goods.old_price}}</span></p>
                    <p class="info-item"><span class="label">现价：</span><span class="price-text">{{goods.price}}</span></p>
                    <shop-cart-entry :goods-id="goods.goods_id"></shop-cart-entry>
                </div>
            </div>
        </div>

        <div class="goods-detail">
            
        </div>

    </div>

</template>

<script>

    import shop_data from './lib/data.js'
    import ShopCartEntry from './Common/ShopCartEntry.vue'

    export default {
        name: 'GoodsView',
        data () {
            return {
                goods: {
                    name: "未知商品",
                    goods_id: 0 
                }
            }
        },
        components: {
            ShopCartEntry
        },
        route: {
            data ({ to }) {
                return {
                    goods: shop_data.getGoodsOne(to.params.goods_id).then(function(data){return data.data})
                }
            }
        }
    }
</script>

<style lang="stylus">
@import "../variables.styl"

    .heading
        margin-bottom 1rem
        dt
            font-size $goods-title-fs
        dd
            font-size 0.7 * $fs
            color $gray
    .info-item
        margin-bottom .5rem
        margin-top .5rem
        .label
            font-size $fs
            color $gray
        .price-text
            font-family $priceft
            font-size $pricefs
            color $priceclr
        .old-price-text
            text-decoration line-through
            font-size .75 * $pricefs
</style>