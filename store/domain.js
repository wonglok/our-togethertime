// import axios from 'axios'
import { Profile } from './KA.js'

export const state = () => ({
  config: {
    host: '',
    account: false,
    page: 'hub',
    isHub: false,
  },
  preload: {
  },
  profile: false
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
  },
  setProfile (state, data) {
    state.profile = data
  }
}

export const actions = {
  async loadProfile ({ commit }, { account }) {
    let profile = await Profile.getProfileByUsername({ username: account })
    commit('setProfile', profile)
  },
  async loadHub ({ commit }) {
    commit('setPreload', {})
  },

  async init ({ commit, state, dispatch }, { params }) {
    commit('scanType', params)

    let config = state.config
    if (config.page === 'hub') {
      await dispatch({
        type: 'loadHub'
      })
    } else if (config.page === 'user' && config.account) {
      await dispatch({
        type: 'loadProfile',
        account: config.account
      })
    }
  }
}