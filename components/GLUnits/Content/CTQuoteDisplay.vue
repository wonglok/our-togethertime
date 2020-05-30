<template>
  <div>
    <input type="search" class="m-3 border border-gray-500 text-2xl rounded-full px-4 focus:outline-none" placeholder="Filter Quotes" v-model="query">
    <div class="m-3 mb-5 border-gray-400 border shadow-lg rounded-lg bg-white" v-for="quote in quotes.filter(filterQuotes)" :key="quote._id">
      <div class="p-3">{{ quote.sentence }}</div>
      <div class="py-2 px-3 text-right border-t border-gray-400 text-xs text-gray-600" v-if="quote.author || quote.overrideAutor">
        {{ quote.overrideAutor || quote.author }}
      </div>
    </div>
  </div>
</template>

<script>
// import { Quotes } from '../../../../APIs/KA'

export default {
  props: {
    quotes: {}
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    filterQuotes (item) {
      try {
        return (item.raw + ` ${item.author}`).match(new RegExp(this.query, 'ig'))
      } catch (e) {
        console.log(e)
        return true
      }
    }
  }
}
</script>

<style>

</style>
