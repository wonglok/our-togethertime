import { Quotes } from './KA.js'

export const state = () => ({
  pageAt: 0,
  docs: []
})

export const mutations = {
  setQuotesDoc (state, data) {
    state.docs = data
  },
  nextPage (state) {
    state.pageAt++
  },
  backPage (state) {
    state.pageAt--
    if (state.pageAt < 0) {
      state.pageAt = 0
    }
  }
}

export const getters = {
  getQuotesFromDocs (state) {
    let bucket = []
    state.docs.forEach(doc => {
      let gen = doc.generated.map(g => {
        let clone = JSON.parse(JSON.stringify(g))
        clone.username = doc.username
        clone.userID = doc.userID
        return clone
      })

      bucket.push(...gen)
    })
    return bucket
  }
}

export const actions = {
  async loadQuotes ({ commit, state }, { username }) {
    let result = await Quotes.listQuoteDocByUsername({ username, pageAt: state.pageAt })
    commit('setQuotesDoc', result)
  },
  async scan ({ commit, state }, { paper }) {
    return Quotes.scan(paper)
  },
  async loadNextQuotes ({ commit, state }, { username }) {
    commit('nextPage')
    let result = await Quotes.listQuoteDocByUsername({ username, pageAt: state.pageAt })
    commit('setQuotesDoc', result)
  },
  async loadBackQuotes ({ commit, state }, { username }) {
    commit('backPage')
    let result = await Quotes.listQuoteDocByUsername({ username, pageAt: state.pageAt })
    commit('setQuotesDoc', result)
  }
}
