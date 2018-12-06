<template>
  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form-label" name="name">Cosmetic name</label>
      <input class="form__input" type="text" v-model.trim="name"/>
    </div>
    <div class="error" v-if="!$v.name.required">Name is Required</div>
    <div class="error" v-if="!$v.name.maxLength">Name must have at most {{$v.name.$params.maxLength.max}} letters.</div>

    <div class="form-group--error" :class="{ 'form-group--error': $v.brand.$error }">
      <label class="form-label" name="brand">Brand (required)</label>
      <input class="form__input" type="text" v-model.trim="brand"/>
    </div>
    <div class="error" v-if="!$v.brand.required">Brand is Required</div>

    <div class="form-group" :class="{ 'form-group--error': $v.price.$error }">
      <label class="form-control-label" name="price">Price</label>
      <input class="form__input" type="decimal" v-model.trim="price"/>
    </div>
    <div class="error" v-if="!$v.price.required">Price is Required</div>
    <div class="error" v-if="!$v.price.between">Price must be between 0 and 10000</div>

    <div class="form-group" :class="{ 'form-group--error': $v.publisher.$error }">
      <label class="form__label" name="publisher">Publisher</label>
      <input class="form__input" type="text" v-model.trim="publisher"/>
    </div>
    <div class="error" v-if="!$v.publisher.required">Publisher is Required</div>

    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ cosmeticBtnTitle }}</button>
    </p>
    <p>
      <a href="#/cosmetics" class="btn btn-primary btn1" role="button">Manage Cosmetic</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Add a Cosmetic Successfully!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, maxLength, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['cosmeticBtnTitle', 'cosmetic'],
  data () {
    return {
      messagetitle: ' Add a Cosmetic ',
      name: this.cosmetic.name,
      brand: this.cosmetic.brand,
      price: this.cosmetic.price,
      publisher: this.cosmetic.publisher,
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(50)
    },
    brand: {
      required
    },
    price: {
      required,
      between: between(0, 10000)
    },
    publisher: {
      required
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var cosmetic = {
            name: this.name,
            brand: this.brand,
            price: this.price,
            publisher: this.publisher
          }
          this.cosmetic = cosmetic
          console.log('Submitting in CosmeticForm : ' +
            JSON.stringify(this.cosmetic, null, 5))
          this.$emit('cosmetic-is-created-updated', this.cosmetic)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
