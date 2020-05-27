<template>
  <div class="full">
    <div class="fixed top-0 left-0 full pointer-events-none" :style="{ zIndex: -1 }" ref="mounter"></div>

    <div v-show="!openMenu">
      <HeroUnit></HeroUnit>
      <MomentumUnit></MomentumUnit>
      <ENV2Unit></ENV2Unit>
      <iGraphUnit></iGraphUnit>
      <FooterUnit></FooterUnit>
    </div>
    <!-- <div class="w-full h-full"></div> -->
    <!-- <FullMenuBar v-show="openMenu" @close="openMenu = false"></FullMenuBar> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { PipeScissor } from '../Reusable'

export default {
  name: 'Home',
  mixins: [PipeScissor],
  computed: {
    ...mapState({
      page: 'page'
    })
  },
  data () {
    return {
      openMenu: false,
      origColor: ''
      // bgColor: '#fafafa'
    }
  },
  mounted () {
    this.$watch('openMenu', () => {
      window.dispatchEvent(new Event('resize'))
    })

    // this.scrollBox = makeScrollBox({ dom: window, base: this.base })

    // this.origColor = document.body.style.backgroundColor
    // document.body.style.backgroundColor = this.bgColor
  },
  beforeDestroy () {
    // document.body.style.backgroundColor = this.origColor
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
