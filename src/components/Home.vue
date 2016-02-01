<template>
    <div class="home">
        <goods-list v-if="display.isset&&display.item.length" v-for="item in display.item" 
            :list-data="display.data[item]">
        </goods-list>
    </div>
</template>

<script>
    import shop_data from './lib/data.js'
    import GoodsList from './Common/GoodsList.vue'
    export default {
        name: 'Home',
        data () {
            return {
                display: {
                    isset: false,
                    item: ['hot', 'news', 'recommend'],
                    data: {}
                }
            }
        },
        components: {
            GoodsList
        },
        methods: {
            updateData () {
                console.log('点我')
                let _i = this.display.item
                if(this.display.item.length) {
                    var _l = {}
                    this.display.item.forEach((i)=>(
                           _l[i] = shop_data.getGoodsList(i, 1).then((e)=>(e.data.goods))
                        ))
                }
                let _d = {hot: {title: 'Hot', goods: {}},news: {title: 'News', goods: {}},recommend: {title: 'Recommend', goods: {}}}
                //return new Promise((resolve)=>(resolve(_l)))
                this.$set('display', {isset: true, item: _i, data: _d})
            }
        },
        route: {
            data ({ to }) {
                this.updateData()
                    //.then((display)=>({display}))
            }
        }
    }
</script>

<style lang="stylus">
@import "../variables.styl"

</style>