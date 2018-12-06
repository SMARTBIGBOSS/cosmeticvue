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
  postCosmetic () {
    return Api().post('/cosmetics/:publisher/add')
  },
  fetchCosmetic (id) {
    return Api().get(`/cosmetic/${id}`)
  },
  putCosmetic (id, cosmetic) {
    console.log('REQUESTING ' + id + ' ' +
      JSON.stringify(cosmetic, null, 5))
    return Api().put(`/cosmetics/${id}/edit`, cosmetic,
      { headers: {'Content-type': 'application/json'} })
  },
  deleteCosmetic () {
    return Api().delete('/cosmetics/:publisher/:id/delete')
  }
}
