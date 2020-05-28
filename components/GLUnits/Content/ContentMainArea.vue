<template>
  <div class="p-3">
    <!-- Content Main Area -->
    <!-- {{ context.selectedMenu }} -->
    <CTQuoteCards :context="context" v-if="context.selectedMenu === 'poster-auto'"></CTQuoteCards>
    <CTPosterImage :context="context" v-if="context.selectedMenu === 'poster-image'"></CTPosterImage>
    <CTPosterVideo :context="context" v-if="context.selectedMenu === 'poster-video'"></CTPosterVideo>
    <CTMessageVideo :context="context" v-if="context.selectedMenu === 'message-video'"></CTMessageVideo>
  </div>
</template>

<script>
export default {
  props: {
    context: {}
  },
  components: {
    ...require('../../webgl').default
  }
}
</script>

<style>
</style>
