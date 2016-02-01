<template>
  <div class="item">
    <div class="item-content">
      <span class="index">{{index}}.</span>
      <p>
        <a class="title" :href="href" target="_blank">{{{item.title}}}</a>
        <span class="domain" v-show="showDomain">
          ({{item.url | domain}})
        </span>
      </p>
      <p class="subtext">
        <span v-show="showInfo">
          {{item.score}} points by
          <a :href="'#/user/' + item.by">{{item.by}}</a>
        </span>
        {{item.time | fromNow}} ago
        <span class="comments-link" v-show="showInfo">
          | <a :href="'#/item/' + item.id">{{item.descendants}} {{item.descendants | pluralize 'comment'}}</a>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Item',

  props: {
    item: Object,
    index: Number
  },

  computed: {
    href () {
      return this.item.url || ('#/item/' + this.item.id)
    },
    showInfo () {
      return this.item.type === 'story' || this.item.type === 'poll'
    },
    showDomain () {
      return this.item.type === 'story'
    }
  }
}
</script>

<style lang="stylus">
@import "../variables.styl"

.item
  padding 10px
  width 25%
  height 20em
  float left
  margin-bottom 10px
  transition background-color .2s ease
  .item-content
    border 1px solid #eee
    background-color $bg
    padding 5px
    min-height 20em
    p
      margin 2px 0
    .title:visited
        color $gray
    .index
      color $gray
      width 30px
      text-align right
    .domain, .subtext
      font-size 11px
      color $gray
      a
        color $gray
    .subtext a:hover
      text-decoration underline
</style>
