<template>
  <div class="shade Vbuy" v-if="buyShow" v-cloak @click="$store.commit('buyHide')">
    <div class="alert-buy" @click.stop="" @keydown.13="pay">
      <h6>{{detail.name}}</h6>
      <p class="alert-buy-tip">The current buying price for this contract is <b>{{detail.price}}</b> ETH.</p>
      <p class="alert-buy-tip">The next price someone can purchase this contract for is  <b>{{detail.nextprice}}</b> ETH
       </p>
      <p class="alert-buy-tip1">
        Transactions on the Blockchain take time to process. By the time you buy this contract, it's price may already be higher than is shown on the card and your transaction will fail. You may submit a higher amount to increase the chances of a successful transaction. If you bid higher than the contract's current price, the difference will be refunded automatically.
      </p>
      <dl class="Custom_price">
        <dt>Custom price:</dt>
        <dd><input type="text" v-model="newPrice" onkeyup="value=value.replace(/[^\d.]/g,'')"></dd>
      </dl>
      <button class="ico" @click="pay"></button>

      <p class="alert-buy-tip2">* If someone else outbid you during this time, your ETH will be refunded.
      </p>

    </div>

    <span v-if="versions"></span>

  </div>
</template>

<script>
  export default {
    name:'Vbuy',
    data () {
      return {
        newPrice: ''
      }
    },
    computed: {
      price () {
        return this.$store.state.price
      },
      detail () {
        return this.$store.state.detail
      },
      buyShow () {
        return this.$store.state.buyShow
      },
      versions () {
        return this.$store.state.versions
      },
    },
    created:function () {
      var $this = this;
      if($this.$route.query.id){
        $this.id = $this.$route.query.id;
      }

//      $this.$store.commit('toBuy',id)
    },
    methods:{
      pay:function () {
          var $this = this;
          $this.id = $this.$store.state.detail.id

        $this.$store.commit('topay',{newPrice:$this.newPrice-0,id:$this.id})

      }
    },
  }
</script>
<style scoped>
  .alert-buy{
    width: 891px;
    height: 391px;
    background: #ffffff;
    border-radius: 10px;
    box-sizing: border-box;
    padding-top: 9px;
    padding-left: 20px;
  }
  .alert-buy h6{
    line-height: 50px;
    font-size: 24px;
    color: #333333;
  }
  .alert-buy-tip{
    line-height: 24px;
    font-size: 14px;
    color: #666666;
  }
  .alert-buy-tip1{
    padding-top: 10px;
    color: #333333;
    line-height: 24px;
    font-size: 16px;
    padding-bottom: 30px;
  }
  .Custom_price{
    overflow: hidden;
    margin-left: 285px;
    padding-bottom: 20px;
  }
  .Custom_price dt{
    float: left;
    font-size: 16px;
    color: #333333;
    line-height: 36px;
  }
  .Custom_price dd{
    float: left;
  }
  .Custom_price dd input{
    width: 172px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #cccccc;
    display: block;
    box-sizing: border-box;
    border-radius: 5px;
    margin-left: 17px;
    text-align: center;
  }
  .alert-buy button{
    width: 280px;
    height: 41px;
    background-position: 0 -73px;
    margin-left: 285px;
  }
  .alert-buy-tip2{
    padding-top: 39px;
    font-size: 14px;
    color: #999999;
  }


</style>
