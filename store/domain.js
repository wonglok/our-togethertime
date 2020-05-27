import axios from 'axios'

export const state = () => ({
  config: {
    host: '',
    account: false,
    page: 'hub'
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
      } else {
        config.account = false
        config.page = 'hub'
      }
    } else if (config.host.indexOf('.our.togethertime.me') !== -1) {
      config.account = config.host.splti('.our.togethertime.me')[0]
      config.page = 'user'
    } else {
      config.account = false
      config.page = 'hub'
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