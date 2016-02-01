<template>
    <div class="shop-cart">
        <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default" @click="changeCount(-1)">-</button>
            <input type="number" min="1" maxlength="2" class="btn btn-default" @blur="changeCount(0)" v-model="count" />
            <button type="button" class="btn btn-default" @click="changeCount(1)">+</button>
        </div>
        <button type="button" class="btn btn-default" @click="addCart">加入购物车</button>
    </div>
</template>

<script>
    import storage from '../lib/store.js'
    const swal = window.swal;
    storage.cart.init();
    export default {
        name: 'ShopCartEntry',

        props: [
            'goodsId'
        ],

        data () {
            return {
                count: 1
            }
        },

        computer: {
           
        },

        methods: {
            changeCount: function(d){
                let _c = this.count;
                if (d==0) {
                    if(_c < 1){
                        swal('出错啦', '添加商品不能少于一件', 'error');
                        this.count = 1
                    }else if( _c > 50){
                        swal('哈哈！', '您的需求量太大了！请赶快直接联系我们...', 'error');
                        this.count = 50
                    }
                } else{
                    if(_c <= 1 && d < 0){
                        swal('出错啦', '添加商品不能少于一件', 'error');
                        this.count = 1
                    }else if( _c >= 50 && d > 0){
                        swal('哈哈！', '您的需求量太大了！请赶快直接联系我们...', 'error');
                        this.count = 50
                    }else{
                        this.count = eval(this.count+d)
                    }
                }
            },
            addCart: function(){
                storage.cart.add(eval('(() => {return {' + this.goodsId + ': ' + this.count + '}})()'))
            }
        }
    }
</script>

<style lang="stylus">
    .shop-cart
        input
            width 5rem
</style>