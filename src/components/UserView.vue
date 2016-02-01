<template>
  <div class="user-view" v-show="true">
    <div class="row">
      <div class="page-title col-md-12">
        <h4>个人中心</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        <nav-bar
          :nav-bar-object="navBarObject">
        </nav-bar>
      </div>
      <div class="col-md-10">
        <router-view
          class="userView"
          keep-alive
          transition
          transition-mode="out-in">
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import NavBar from './Common/NavBar.vue'

export default {

  name: 'UserView',

  data () {
    return {
      user: {},
      navBarObject: {
        direction: 'v',
        items: [
          {
            id: 1,
            title: '基本信息',
            href: '/user/profile',
            children: {}
          },
          {
            id: 2,
            title: '收货地址',
            href: '/user/address',
            children: {}
          },
          {
            id: 3,
            title: '实名认证',
            href: '/user/truename',
            children: {}
          },
          {
            id: 4,
            title: '订单管理',
            href: '/user/orderlist',
            children: {}
          }
        ]
      }
    }
  },
  components: {
    NavBar
  },
  route: {
    data ({ to }) {
      return {
        user: store.fetchUser(to.params.id)
      }
    }
  }
}
</script>

<style lang="stylus">
@import "../variables.styl"

.userView
   width $full
   transition opacity .2s ease
   box-sizing border-box
   padding 0.8*$fs 1.2*$fs
   &.v-enter, &.v-leave
      opacity 0
  .page-title
    margin 0
    margin-bottom $fs
    padding $fs
    background $priceclr
    color $wt
    h4
      margin 0
  .navbar
    margin 0
    padding 0

</style>
