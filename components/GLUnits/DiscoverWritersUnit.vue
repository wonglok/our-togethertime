<template>
  <div class="w-full h-min-minus-toolbar-full">
    <div class="h-full w-full relative">


      <div class="scissor-left scissor-text flex-col justify-center items-center">
        <div class="h-24 lg:h-32 xl:h-64"></div>
        <div class="lg:px-4 max-w-xl mx-auto lg:ml-auto">
          <div class="px-3 mb-2 text-3xl md:text-4xl font-bold">
            Discover Authors
          </div>

          <div class="px-3 mb-3">
            Here are some random authors for you! 🥰
          </div>
          <div class="pr-3">
            <a class="inline-block pr-3 hover:bg-blue-200 rounded-full" v-for="(profile, pi) in profiles" :key="pi" :href="`https://${profile.username}.our.togethertime.me`">
              <div class="flex justify-start items-center">
                <div class="p-3 cursor-pointer  inline-flex justify-center items-center">
                  <img :src="profile.photoImg" class="w-12 h-12 rounded-full object-center object-cover" alt="">
                </div>
                <div class="p-3 pl-0 w-32 cursor-pointer inline-flex justify-center items-center">
                  {{ profile.displayName }}
                </div>
              </div>
            </a>
          </div>

          <!-- {{ profiles }} -->

        </div>
        <div class="h-24 lg:h-32 xl:h-64"></div>
      </div>

      <ScissorArea class="scissor-right" style="z-index: -1;">
        <div slot="dom" class="full">
        </div>
        <StarFlowScene slot="o3d"></StarFlowScene>
      </ScissorArea>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    ...require('../webgl').default
  },
  computed: {
    ...mapState({
      profiles: state => state.domain.randomProfiles
    })
  }
}
</script>

<style scoped lang="postcss">
.scissor-text{
}
.scissor-right{
  width: 100vmin;
  height: 100vmin;
}
.scissor-left{
  width: 100%;
  height: 100%;
}

@screen lg {
  .scissor-text{
    color: black;
  }
  .scissor-right{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 50%;
    height: 100%;
    margin-left: 50%;
  }
  .scissor-left{
    /* position: absolute;
    top: 0px;
    left: 0px; */
    width: 50%;
    height: 100%;
  }
}
.h-min-minus-toolbar-full{
  min-height: calc(100% - 60px);
}
</style>
