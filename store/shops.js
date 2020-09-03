export const state = () => ({
  shops: null,
  activeShop: null,
})

export const mutations = {
  setShops(state, shops) {
    state.shops = shops
  },
  setActiveShop(state, shop) {
    state.activeShop = shop
  },
}

export const actions = {
  /**
   * admin
   * token and user validation
   */
  async getActiveShop({ rootGetters, commit }) {
    try {
      const shop = await this.$axios.$get(
        `/api/users/${rootGetters.user._id}/shops/active`
      )
      commit('setActiveShop', shop)
    } catch (error) {
      console.error(error)
    }
  },
}

export const getters = {
  shops: (state) => state.shops,
  activeShop: (state) => state.activeShop,
}
