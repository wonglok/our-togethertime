<template>
  <div>
    {{ params }}
  </div>
</template>

<script>
export default {
  asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    return {
      params
    }
  },
}
</script>

<style>

</style>