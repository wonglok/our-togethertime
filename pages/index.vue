<template>
  <div class="full">
    <HubPage class="full" v-if="config.page === 'hub'"></HubPage>
    <UserPage class="full" v-if="config.page === 'user'"></UserPage>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    ...require('~/components/pages').default
  },
  methods: {
  },
  computed: {
    ...mapState({
      config: state => state.domain.config
    })
  },
  async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    await store.dispatch({
      type: 'domain/init',
      params: { req, query }
    })
    return {}
  }
}
</script>

<style>
</style>
