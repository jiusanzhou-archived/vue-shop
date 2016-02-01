if(!window.store.enabled){window.swal('Sorry')}
import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './components/App.vue'
import Home from './components/Home.vue'

import NewsView from './components/NewsView.vue'
import ItemView from './components/ItemView.vue'


import UserView from './components/UserView.vue'
import UserProfileView from './components/User/UserProfileView.vue'
import UserAddressView from './components/User/UserAddressView.vue'
import UserTruenameView from './components/User/UserTruenameView.vue'

import GoodsListView from './components/GoodsListView.vue'
import GoodsView from './components/GoodsView.vue'

Vue.config.debug = true
// install router
Vue.use(Router)

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

// routing
var router = new Router()


router.map({
  '/news/:page': {
    component: NewsView
  },
  '/item/:id': {
    component: ItemView
  },


  '/': {
    component: Home
  },
  '/goods/:goods_id': {
    component: GoodsView
  },
  '/list/:category/:page': {
    component: GoodsListView
  },
  '/user': {
    component: UserView,
    subRoutes: {
      'profile': {
          component: UserProfileView
      },
      'address': {
        component: UserAddressView
      },
      'truename': {
        component: UserTruenameView
      }
    }
  },
})

router.beforeEach(function () {
  console.log('加载中...')
  window.scrollTo(0, 0)
})

router.afterEach(function() {
  console.log('加载完成！')
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
