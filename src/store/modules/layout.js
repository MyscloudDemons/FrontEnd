import { cache } from '@/common/index'

// initial state
const state = () => {
  let cachedAsideStatus = cache.get('Demons-AsideStatus', true)
  let asideStatus = cachedAsideStatus ? JSON.parse(cachedAsideStatus) : {
    collapse: false,
    width: '200px',
  }
  let cachedCurrentTheme = cache.get('Demons-CurrentTheme', true)
  let currentTheme = cachedCurrentTheme ? JSON.parse(cachedCurrentTheme) : {
    aside: {
      backgroundColor: '#f9f9f9',
      textColor: '#000000',
      activeTextColor: '#219aff',
    },
    header: {
      backgroundColor: '#545c64',
      textColor: '#fff',
      activeTextColor: '#219aff',
    },
  }
  return {
    asideStatus: asideStatus,
    currentTheme: currentTheme,
  }
}

// getters
const getters = {
  asideStatus: state => state.asideStatus,
  currentTheme: state => state.currentTheme,
}

// actions
const actions = {
  changeAsideStatus ({commit}, asideStatus) {
    cache.put('Demons-AsideStatus', JSON.stringify(asideStatus), true)
    commit('asideStatus', asideStatus)
  },
  currentTheme ({commit}, currentTheme) {
    cache.put('Demons-CurrentTheme', JSON.stringify(currentTheme), true)
    commit('currentTheme', currentTheme)
  },
}

// mutations
const mutations = {
  asideStatus (state, asideStatus) {
    state.asideStatus = asideStatus
  },
  currentTheme (state, currentTheme) {
    state.currentTheme = currentTheme
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
