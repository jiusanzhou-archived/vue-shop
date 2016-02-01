<template>
    <div class="pavigation">
        <a v-link="pvdata.url + (pvdata.current - 1)" v-if="pvdata.current > 1">&lt;</a>
        <template v-for="i in Math.ceil(pvdata.total/pvdata.limit)">
            <a v-if="i+1!=pvdata.current" v-link="pvdata.url + (i + 1)">{{ i+1 }}</a>
            <b v-else>{{ i+1 }}</b>
        </template>
        <a v-link="pvdata.url + (pvdata.current * 1 + 1)" v-if="Math.ceil(pvdata.total/pvdata.limit) > pvdata.current">&gt;</a>
    </div>
</template>

<script>
    export default {
        name: 'Pavigation',
        data () {
            return {}
        },
        props: {
            pvdata: Object
        }
    }
</script>

<style lang="stylus">
@import "../../variables.styl"
    .pavigation
        float right
        a, b
            border $greyb1
            text-decoration none
            padding 0.3*$fs 0.4*$fs
            font-weight bold
        a:hover, b
            border $redb1

</style>