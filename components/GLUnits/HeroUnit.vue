<template>
  <div class="full">
    <ScissorArea class="taller">
      <div slot="dom" class="relative full">
        <div class="absolute top-0 left-0 p-6 text-white text-xl">
          <a href="https://our.togethertime.me/">
            Our.TogetherTime.me
          </a>
        </div>
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

<style scoped>
.taller{
  height: 80vmin;
}
.textshadow{
  text-shadow: 0px 0px 10px #ffffff, 0px 0px 10px #ffffff, 0px 0px 10px #ffffff;
}
</style>
