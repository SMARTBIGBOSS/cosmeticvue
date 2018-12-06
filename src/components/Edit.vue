<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
          <cosmetic-form :cosmetic="cosmetic" cosmeticBtnTitle="Update Cosmetic"
                         @cosmetic-is-created-updated="updateCosmetic"></cosmetic-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import CosmeticService from '@/services/CosmeticService'
import CosmeticForm from '@/components/CosmeticForm'

export default {
  data () {
    return {
      cosmetic: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Cosmetic '
    }
  },
  components: {
    'cosmetic-form': CosmeticForm
  },
  created () {
    this.getCosmetic()
  },
  methods: {
    getCosmetic: function () {
      CosmeticService.fetchCosmetic(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.cosmetic = response.data
          this.childDataLoaded = true
          console.log('Getting Cosmetic in Edit: ' + JSON.stringify(this.cosmetic, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateCosmetic: function (cosmetic) {
      console.log('Before PUT ' + JSON.stringify(cosmetic, null, 5))
      CosmeticService.putCosmetic(this.$router.params, cosmetic)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(cosmetic, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
