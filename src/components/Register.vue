<template>
    <div id="app1" class="hero">
      <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
      <div class="container mt-3 mt-sm-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form @submit.prevent="submit">
              <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                <label class="form-control-label" name="name"> Name </label>
                <input class="form__input" type="text" v-model.trim="name"/>
              </div>
              <div class="error" v-if="!$v.name.required">Name is Required</div>
              <div class="error" v-if="!$v.name.unique">Name is Exited</div>
              <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                <label class="form__label" for="email">Email</label>
                <input class="form__input" id="email" name="email" type="email" v-model.trim="$v.email.$error"/>
              </div>
              <div class="error" v-if="!$v.email.required">Email is Required</div>
              <div class="error" v-if="!$v.email.email">Not a Email Address</div>
              <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                <label class="form-control-label" name="password"> Password </label>
                <input class="form__input" type="password" v-model.trim="password"/>
              </div>
              <p>
                <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ cosmeticBtnTitle }}</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import CustomerService from '@/services/CustomerService'
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      email
    }
  },
  methods: {
    register: function () {
      CustomerService.postCustomer()
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>
