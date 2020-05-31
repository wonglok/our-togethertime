<template>
  <div>
    <div>
      <div class="mx-3 text-center lg:text-left">
        <input type="search" class="my-3 border border-gray-500 text-2xl rounded-full px-4 focus:outline-none" :placeholder="`Filter ${quotes.length} Quotes`" v-model="query">
      </div>
      <div class="mx-3 text-center lg:text-left" v-if="!query">Showing {{ quotes.length > this.maxList ? this.maxList : quotes.length }} Random Quotes</div>
      <div class="mx-3 text-center lg:text-left" v-if="query">Search result of {{ getQuotes().length }} Quotes</div>
    </div>
    <div class="mx-3 px-3 py-2 my-3 bg-white border-gray-400 border rounded-lg text-xs">
      <button @click="query = ''" class="px-3 py-1 focus:outline-none focus:bg-gray-400 rounded-lg border border-gray-400 m-1">Reset</button>
      <button @click="query = 'hope'" class="px-3 py-1 focus:outline-none focus:bg-gray-400 rounded-lg border border-gray-400 m-1">Hope</button>
      <button @click="query = 'love'" class="px-3 py-1 focus:outline-none focus:bg-gray-400 rounded-lg border border-gray-400 m-1">Love</button>
      <button @click="query = 'thank'" class="px-3 py-1 focus:outline-none focus:bg-gray-400 rounded-lg border border-gray-400 m-1">Gratitude</button>
      <button @click="query = 'forgiveness'" class="px-3 py-1 focus:outline-none focus:bg-gray-400 rounded-lg border border-gray-400 m-1">Forgiveness</button>
      <button @click="query = 'awareness'" class="px-3 py-1 focus:outline-none focus:bg-gray-400 rounded-lg border border-gray-400 m-1">Awareness</button>
      <button @click="query = 'understand'" class="px-3 py-1 focus:outline-none focus:bg-gray-400 rounded-lg border border-gray-400 m-1">Understanding</button>
      <button @click="query = 'positive'" class="px-3 py-1 focus:outline-none focus:bg-gray-400 rounded-lg border border-gray-400 m-1">Positivity</button>
      <button @click="query = 'art'" class="px-3 py-1 focus:outline-none focus:bg-gray-400 rounded-lg border border-gray-400 m-1">Art</button>
      <button @click="query = 'funny'" class="px-3 py-1 focus:outline-none focus:bg-gray-400 rounded-lg border border-gray-400 m-1">Funny</button>
      <button @click="query = 'free'" class="px-3 py-1 focus:outline-none focus:bg-gray-400 rounded-lg border border-gray-400 m-1">Free</button>
      <button @click="query = 'create'" class="px-3 py-1 focus:outline-none focus:bg-gray-400 rounded-lg border border-gray-400 m-1">Create</button>
    </div>
    <div class="m-3 mb-5 border-gray-400 border shadow-lg rounded-lg bg-white" v-for="quote in getQuotes()" :key="quote._id">
      <div class="p-3">{{ quote.sentence }}</div>
      <div class="py-2 px-3 text-right border-t border-gray-400 text-xs text-gray-600" v-if="quote.author || quote.overrideAutor">
        {{ quote.overrideAutor || quote.author }}
      </div>
    </div>
  </div>
</template>

<script>
// import { Quotes } from '../../../../APIs/KA'
// import nlp from 'compromise'
var keyword_extractor = require("keyword-extractor");

// const rakejs = require('@shopping24/rake-js');

export default {
  props: {
    quotes: {
      default () {
        return []
      }
    }
  },
  data () {
    return {
      maxList: 50,
      query: ''
    }
  },
  mounted () {
    this.getTopics()
  },
  watch: {
    quotes () {
      this.getTopics()
    }
  },
  methods: {
    getTopics () {
      let keywordsIndex = {}
      let result = this.quotes.map(e => e.sentence).map(word => {
        var extraction_result = keyword_extractor.extract(word,{
          language: 'english',
          remove_digits: true,
          return_changed_case: true,
          remove_duplicates: false
        });
        extraction_result.forEach((keyword) => {
          keywordsIndex[keyword] = keywordsIndex[keyword] || 0
          keywordsIndex[keyword]++
        });
        return extraction_result
      })
      let infoArr = []
      for (let keyword in keywordsIndex) {
        infoArr.push({
          keyword,
          count: keywordsIndex[keyword]
        })
      }
      infoArr.sort((a, b) => {
        if (a.count > b.count) {
          return -1
        } else if (a.count < b.count) {
          return 1
        } else {
          return 0
        }
      })

      console.log(infoArr)
      return infoArr
    },
    getQuotes () {
      if (this.query) {
        return this.quotes.filter(this.filterQuotes).slice().reverse()
      } else {
        return this.quotes.slice().sort(function() { return 0.5 - Math.random() }).filter((e, i) => i <= this.maxList)
      }
    },
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
