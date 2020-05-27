<template>
  <div class="full">
    <ScissorArea class="webgl-banner">
      <div slot="dom" class="relative full">
        <TopNavUnit></TopNavUnit>
      </div>
      <BannerScene slot="o3d"></BannerScene>
    </ScissorArea>
  </div>
</template>

<script>
// import { Auth } from '../../../APIs/KA'

export default {
  components: {
    ...require('../webgl').default
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="postcss" scoped>
.webgl-banner{
  height: 100vmin;
}
@screen lg {
  .webgl-banner{
    height: 50vmin;
  }
}
.textshadow{
  text-shadow: 0px 0px 10px #ffffff, 0px 0px 10px #ffffff, 0px 0px 10px #ffffff;
}
</style>
