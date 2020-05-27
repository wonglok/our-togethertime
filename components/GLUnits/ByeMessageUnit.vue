<template>
  <div class="px-3 max-w-xl mx-auto  py-24 lg:py-32 xl:py-64">
    <div v-if="isHub">
      <div class="px-3 mb-2 text-3xl md:text-4xl font-bold">
        Thanks for visiting us!
      </div>
      <div class="px-3 mt-1 text-gray-600">
        Let's get your mini site :)
      </div>
      <div class="px-3 mb-3">
        <div class="inline-block br-3 underline">
          <a target="_blank" href="https://www.togethertime.me/register">Register</a>
        </div>
        <div class="inline-block br-3 underline">
          <a target="_blank" href="https://www.togethertime.me/login">Login</a>
        </div>
      </div>
      <div class="px-3 text-sm text-gray-800">
        Best wishes,
      </div>
      <div class="px-3 text-sm mb-3 text-gray-800 underline">
        <a target="_blank" href="https://www.togethertime.me">TogetherTime.me</a>
      </div>
    </div>
    <div v-if="!isHub && account">
      <div class="px-3 mb-2 text-3xl md:text-4xl font-bold">
        Thanks for visiting!
      </div>
      <div class="px-3 mt-1 text-gray-600">
        Best wishes,
      </div>
      <div class="px-3 text-sm mb-3 text-gray-800">
        <div class="inline-block br-3" v-if="profile">
          {{ profile.displayName }}
        </div>
      </div>
    </div>

    <a v-if="isHub" href="https://our.togethertime.me/">
      <img src="~/assets/image/home-white.svg" alt="Home">
    </a>
    <a v-if="!isHub && account" :href="`https://${account}.our.togethertime.me/`">
      <img src="~/assets/image/home-white.svg" alt="Home">
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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

<style>

</style>