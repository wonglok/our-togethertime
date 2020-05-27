<template>
  <div>
    User Home // page
    <pre>{{ page }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
  },
  computed: {
    ...mapState({
      page: 'page'
    })
  }
}
</script>

<style>

</style>