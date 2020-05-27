<template>
  <div class="w-full h-min-minus-toolbar-full">
    <div class="h-full w-full relative">

      <ScissorArea class="scissor-right" style="z-index: -1;">
        <div slot="dom" class="full">
        </div>
        <StarFlowScene slot="o3d"></StarFlowScene>
      </ScissorArea>

      <div class="scissor-left scissor-text flex-col justify-center items-center">
        <div class="h-24 lg:h-32 xl:h-64"></div>
        <div class="lg:px-4 max-w-xl mx-auto lg:ml-auto">
          <div class="px-3 mb-2 text-3xl md:text-4xl font-bold">
            Discover Authours
          </div>

          <div class="px-3 mb-3">
            Here are some random authours for you! 🥰
          </div>
          <div class="px-3">
            <table>
              <tbody>
                <tr class="hover:bg-blue-200" v-for="(profile, pi) in profiles" :key="pi">
                  <td class="p-3 cursor-pointer">
                    <a class="full" :href="`https://${profile.username}.our.togethertime.me`">
                      <img :src="profile.photoImg" class="w-12 h-12 rounded-full object-center object-cover" alt="">
                    </a>
                  </td>
                  <td class="p-3 cursor-pointer">
                    <a class="full" :href="`https://${profile.username}.our.togethertime.me`">
                      {{ profile.displayName }}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- {{ profiles }} -->

        </div>
        <div class="h-24 lg:h-32 xl:h-64"></div>
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
