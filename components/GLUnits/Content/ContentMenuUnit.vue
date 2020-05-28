<template>
  <div class="">
    <div class="p-4 hover:bg-gray-200 cursor-pointer" @click="context.selectedMenu = item.type; context.openMenu = false" v-for="item in context.menuItems" :key="item.type">{{ item.name }}</div>
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