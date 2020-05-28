<template>
  <div class="p-4">
    <div class="p-3 cursor-pointer text-center text-blue-600 rounded-none" :class="{ 'rounded-full border border-blue-600': context.selectedMenu === item.type }" @click="context.selectedMenu = item.type; context.openMenu = false" v-for="item in context.menuItems" :key="item.type">{{ item.name }}</div>
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