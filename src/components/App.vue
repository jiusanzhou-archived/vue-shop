<template>

   <site-header></site-header>
   <!-- Main View -->
   <div id="wrapper">
      <router-view
         class="view"
         keep-alive
         transition
         transition-mode="out-in">
      </router-view>
   </div>
   <!-- Main View Over -->

   <site-footer></site-footer>

</template>

<script>

   import shop_data  from './lib/data.js'

   import SiteHeader from './SiteHeader.vue'
   import SiteFooter from './SiteFooter.vue'

   export default {
      name: 'App',
      components: {
         SiteHeader,
         SiteFooter
      }
   }

</script>

<style lang="stylus">
@import "../variables.styl"

html, body
   font-family: $ft
   font-size $fs
   height 100%
   background-color #ebf4f7

ul
   list-style-type none
   padding 0
   margin 0

a
   color #000
   cursor pointer
   text-decoration none
   
#wrapper
   background-color $bg
   width $w7
   height auto
   margin 0 auto

.view
   width $full
   transition opacity .2s ease
   box-sizing border-box
   padding 0.8*$fs 1.2*$fs
   &.v-enter, &.v-leave
      opacity 0

@media screen and (max-width: 700px)
   html, body
      margin 0
   #wrapper
      width $full
</style>