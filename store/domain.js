import axios from 'axios'

export const state = () => ({
  config: {
    host: '',
    account: false,
    page: 'hub',
    isHub: false,
  },
  preload: {
  }
})

export const mutations = {
  scanType (state, { req, query }) {
    let config = state.config
    if (process.server) {
      config.host = req.headers.host
    } else {
      config.host = window.location.host
    }

    if (config.host.indexOf('localhost:') === 0) {
      if (query.user) {
        config.account = query.user
        config.page = 'user'
        config.isHub = false
      } else {
        config.account = false
        config.page = 'hub'
        config.isHub = true
      }
    } else if (config.host.indexOf('.our.togethertime.me') !== -1) {
      config.account = config.host.split('.our.togethertime.me')[0]
      config.page = 'user'
      config.isHub = false
    } else {
      config.account = false
      config.page = 'hub'
      config.isHub = true
    }
  },
  setPreload (state, data) {
    state.preload = data
  }
}

export const actions = {
  async loadUser ({ commit }, { account }) {
    commit('setPreload', { account })
  },
  async loadHub ({ commit }) {
    commit('setPreload', {})
  },
  async loadHome ({ commit, state, dispatch }, { params }) {
    commit('scanType', params)

    let config = state.config
    if (config.page === 'hub') {
      await dispatch({
        type: 'loadHub'
      })
    } else if (config.page === 'user' && config.account) {
      await dispatch({
        type: 'loadUser',
        account: config.account
      })
    }
  }
}