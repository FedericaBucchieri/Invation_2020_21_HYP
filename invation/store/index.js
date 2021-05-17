import Vue from 'vue'

export const state = () => {
  return {
    visitedPaths: [],
    currentPageName: '',
  }
}

export const mutations = {
  addVisitedPath(state, newPath) {
    const visitedPaths = state.visitedPaths
    visitedPaths.push(newPath)
    Vue.set(state, 'visitedPaths', visitedPaths)
  },
  updateCurrentPageName(state, newCurrentPageName) {
    Vue.set(state, 'currentPageName', newCurrentPageName)
  },
  readjustBreadcrump(state, pathName) {
    const visitedPaths = state.visitedPaths
    let name = visitedPaths.pop().pathName
    while (name !== pathName) {
      name = visitedPaths.pop().pathName
    }
    Vue.set(state, 'visitedPaths', visitedPaths)
  },
  eraseBreadcrump(state) {
    Vue.set(state, 'visitedPaths', [])
    Vue.set(state, 'currentPageName', '')
  },
}
