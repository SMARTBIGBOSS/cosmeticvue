import Api from '@/services/api'

export default {
  postCustomer () {
    return Api().post('/customer/signUp')
  }
}
