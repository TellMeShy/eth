<template>
  <div class="shade Valert" v-if="alertShow" v-cloak @click="$store.commit('isAlertShow',false)">
    <div class="alert-message" @click.stop="">
      <h5 class="">{{alertShow}}</h5>
      <div class="alert-setName-btn">
        <button class="ok isok" @click="$store.commit('isAlertShow',false)">ok</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Valert',
    data () {
      return {
        newPrice: ''
      }
    },
    computed: {
      alertShow () {
        return this.$store.state.alertShow
      },
    },
    created:function () {

    },
    methods:{

    },
  }
</script>
<style scoped>
.alert-message{
  width: 250px;
  height: 180px;
  background: #efefef;
  border-radius: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 28px 20px 0 20px;
}
.alert-message h5{
  font-size: 20px;
  text-align: center;
  height: 100px;
  line-height: 1.2;
  padding-top: 20px;
  box-sizing: border-box;
}
.alert-message button{
  width: 88px;
  height: 32px;
  border-radius: 5px;
  cursor:pointer;
  background: #287de5;
  display: block;
  margin: 0 auto;
  color: #fff;
}

</style>
