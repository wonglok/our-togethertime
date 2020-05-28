<template>
  <div class="p-3">
    Content Main Area
    {{ context.selectedMenu }}
  </div>
</template>

<script>
export default {
  props: {
    context: {}
  }
}
</script>

<style>

</style>