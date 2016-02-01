<template>

    <div class="goods-list-item">
        <a v-link="'/goods/' + goodsitem.goods_id">
            <div class="goods-img">
                <img :src="goodsitem.thumb" :alt="goodsitem.name">
            </div>
            <div class="caption">
                <h5>{{ goodsitem.name }}</h3>
                <p><span class="price">{{ goodsitem.price }}</span><span class="old-price">原价：{{ goodsitem.old_price }}</span></p>
            </div>
        </a>
    </div>

</template>

<script>
    export default {
        name: 'GoodsListItem',
        props: {
            goodsitem: Object
        },
        data () {
            return {
               
            }
        }
    }
</script>

<style lang="stylus">
@import "../../variables.styl"
    .goods-list-item
        width: $full
        .goods-img
            background $wt
            width $full
            padding 0.5*$fs
            img
                width $full
        .caption
            background $wt
            margin 0
            padding $fs
            h5
                margin 0 0 $fs 0
                overflow hidden
                font-size 1.2*$fs
                color $gray
                line-height 1.2*$fs
                height 2.4*$fs
            p
                margin 0
                height 1.5*$fs
                .price
                    color $priceclr
                    font-family $priceft
                    font-size $fs*1.5
                    float left
                .old-price
                    color $gray
                    font-size $fs
                    text-decoration line-through
                    float right

</style>