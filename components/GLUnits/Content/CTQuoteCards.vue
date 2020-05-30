<template>
  <div class="">
    <!-- {{ quotes }} -->
    <CTQuoteDisplay :quotes="quotes"></CTQuoteDisplay>
    <!-- <TPQuoteCard class="m-3 lg:m-1" :card="card" v-for="card in quotes" :key="card._id"></TPQuoteCard> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    ...require('../../webgl').default
  },
  props: {
    context: {}
  },
  data () {
    return {
      quotesss: [
        { quote: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`, author: 'Wong Lok' },
        { quote: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`, author: 'Wong Lok' },
        { quote: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`, author: 'Wong Lok' },
        { quote: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`, author: 'Wong Lok' },
        { quote: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`, author: 'Wong Lok' },
        { quote: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`, author: 'Wong Lok' },
        { quote: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`, author: 'Wong Lok' },
      ]
    }
  },
  computed: {
    ...mapState({
      docs: (state) => state.quotes.docs
    }),
    ...mapGetters({
      quotes: 'quotes/getQuotesFromDocs'
    })
  },
  mounted () {
    this.onInit()
  },
  methods: {
    async onInit () {
      await this.$store.dispatch({
        type: 'quotes/loadQuotes'
      })
    }
  }
}
</script>

<style>

</style>
