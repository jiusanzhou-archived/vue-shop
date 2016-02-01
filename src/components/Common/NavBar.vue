<template>    
    <nav class="navbar navbar-default">
        <ul>
            <nav-bar-item :nav-bar-object="navBarObject"></nav-bar-item>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar',
        components: {
            navBarItem: {
                name: 'nav-bar-item',
                template:
                    '<li v-if="navBarObject!=undefined&&navBarObject.items.length" v-for="item in navBarObject.items | orderBy \'id\'" :class=" {\'horizen\': navBarObject.direction==\'h\'} "><a v-link="item.href">{{ item.title }}</a>' +
                    '<ul v-if="item.children!=undefined"><nav-bar-item :nav-bar-object="item.children"></nav-bar-item>' +
                    '</ul></li>',//这里是模版递归调用自己
                props: [
                    'navBarObject'
                ]
            }
        },
        props:[
            'navBarObject'
        ],
        data () {
            return {}
        }
    }
</script>

<style lang="stylus">
@import "../../variables.styl"
.navbar
    padding-left: 2*$fs
    .horizen
        float left
    .child
        display none
</style>