<template>
  <div>
    <div class="absolute top-0 left-0 p-6 text-white text-xl">
      <a v-if="isHub" href="https://our.togethertime.me/">
        <img src="~/assets/image/home-white.svg" alt="Home">
      </a>
      <a v-if="!isHub && account" :href="`https://${account}.our.togethertime.me/`">
        <img src="~/assets/image/home-white.svg" alt="Home">
      </a>
    </div>
    <div class="absolute top-0 right-0 p-6 text-white text-xl">
      <a v-if="!isHub && account" :href="`https://our.togethertime.me/`">
        <img src="~/assets/image/article-list-white.svg" alt="Discover">
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      // isHub: state => state.domain.config.isHub,
      isHub: state => state.domain.config.isHub,
      account: state => state.domain.config.account
    })
  }
}
</script>

<style>

</style>