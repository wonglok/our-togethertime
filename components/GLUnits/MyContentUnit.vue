<template>
  <div class="">
    <div class="stickymobile md:relative bg-blue-300 text-2xl flex justify-between items-center">
      <div class="p-3">
        My Kindness Content
      </div>
      <div class="block md:hidden">
        <img src="~/assets/image/menu.svg" class="cursor-pointer p-4" @click="context.openMenu = !context.openMenu" alt="">
      </div>
    </div>
    <div class="stickymobilemenu md:hidden bg-blue-100" v-if="context.openMenu">
      <ContentMenuUnit :context="context"></ContentMenuUnit>
    </div>
    <div class="md:hidden">
      <ContentMainArea :context="context"></ContentMainArea>
    </div>
    <div class="hidden md:flex justify-start">
      <div class="aside-bar bg-blue-100">
        <ContentMenuUnit :context="context"></ContentMenuUnit>
      </div>
      <div class="main-content bg-blue-200">
        <ContentMainArea :context="context"></ContentMainArea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    ...require('../webgl').default
  },
  data () {
    return {
      context: {
        menuItems: [
          {
            type: 'poster-auto',
            name: 'Quote Cards'
          },
          {
            type: 'poster-image',
            name: 'Poster Image'
          },
          {
            type: 'poster-video',
            name: 'Poster Video'
          },
          {
            type: 'message-video',
            name: 'Message Video'
          }
        ],
        selectedMenu: 'poster-auto',
        openMenu: false
      }
    }
  },
  computed: {
    ...mapState({
      // isHub: state => state.domain.config.isHub,
      profile: state => state.domain.profile,
      isHub: state => state.domain.config.isHub,
      account: state => state.domain.config.account
    })
  }
}
</script>

<style lang="postcss" scoped>
.aside-bar{
  width: 250px;
}
.main-content{
  width: calc(100% - 250px);
}
.stickymobile{
  position: sticky;
  top: 0vmin;
}
@screen md{
  .stickymobile{
    position: relative;
    top: inherit;
  }
}
.stickymobilemenu{
  position: sticky;
  top: 60px;
  height: calc(100% - 60px);
}
@screen md{
  .stickymobilemenu{
    position: relative;
    top: inherit;
  }
}
</style>
