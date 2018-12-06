<template>
  <div class="text-md-center">
    <h2>Login</h2>
    <v-layout>
      <v-flex xs12 sm6>
        <v-text-field label="Email" v-model="email"></v-text-field>
        <v-text-field label="Password" v-model="password"></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import CustomerService from '@/services/CustomerService'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      CustomerService.postCustomer()
        .then(response => {

        })
    }
  }
}
</script>

<style scoped>

</style>
