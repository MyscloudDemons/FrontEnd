export default {
  get (key, local) {
    if (local) {
      return window.localStorage.getItem(key)
    }
    return window.sessionStorage.getItem(key)
  },
  put (key, value, local) {
    if (local) {
      return window.localStorage.setItem(key, value)
    }
    return window.sessionStorage.setItem(key, value)
  },
  del (key, local) {
    if (local) {
      return window.localStorage.removeItem(key)
    }
    return window.sessionStorage.removeItem(key)
  },
}
