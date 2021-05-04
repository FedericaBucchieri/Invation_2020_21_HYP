import Vue from 'vue'

export const state = () => {
  return {
    visitedPaths: [],
  }
}

export const mutations = {
  addVisitedPath(state, newPath) {
    const visitedPaths = state.visitedPaths
    visitedPaths.push(newPath)
    Vue.set(state, 'visitedPaths', visitedPaths)
  },
}
