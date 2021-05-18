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
    if (visitedPaths.length > 3) {
      visitedPaths.shift()
    }
    Vue.set(state, 'visitedPaths', visitedPaths)
  },
  updateCurrentPageName(state, newCurrentPageName) {
    Vue.set(state, 'currentPageName', newCurrentPageName)
    for (let i = 0; i < state.visitedPaths.length; i++) {
      if (state.visitedPaths[i].pathName === newCurrentPageName) {
        state.visitedPaths.splice(i, 1)
      }
    }
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
