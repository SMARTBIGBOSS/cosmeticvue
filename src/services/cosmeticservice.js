import Api from '@/services/api'

export default {
  fetchCosmetics () {
    return Api().get('/cosmetics')
  },
  fetchCosmeticsByHighPrice () {
    return Api().get('/cosmetics/sortByHighPrice')
  },
  fetchCosmeticsByLowPrice () {
    return Api().get('/cosmetics/sortByLowPrice')
  },
  fetchCosmetic (cosmeticId) {
    return Api().get(`/cosmetic/${cosmeticId}`)
  },
  putCosmetic (cosmeticId, cosmetic) {
    console.log('REQUESTING ' + cosmeticId + ' ' +
      JSON.stringify(cosmetic, null, 5))
    return Api().put(`/cosmetics/${cosmeticId}/edit`, cosmetic,
      { headers: {'Content-type': 'application/json'} })
  },
  deleteCosmetic (cosmeticId) {
    return Api().delete(`/cosmetics/${cosmeticId}/delete`)
  }
}
