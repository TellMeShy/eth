<template>
  <div class="marketplace">
    <section class="market-warp">
      <div class="market">
        <h3 class="market-title">Market</h3>
        <ul class="market-nav">
          <li class="HighestPriced" :class="{cur:order == 2}" @click="orderChange(2)">Highest Priced</li>
          <li class="LowestPriced" :class="{cur:order == 1}"@click="orderChange(1)">Lowest Priced</li>
          <li class="Newest">Newest</li>
          <li class="Verified">Verified</li>
        </ul>
      </div>
    </section>
    <section class="content-warp">
      <div class="content">
        <ul class="produce_list">
          <li class="produce" v-for="i in produceList"  :token_id="i.token_id" :itemid="i.id">
            <router-link :to="{path:'/detail',query:{id:i.token_id}}">
              <h5>{{i.name}}</h5>
              <img :src="i.picture" alt="">
            </router-link>
            <div class="produce_message">
              <div class="produce_mes">
                <dl class="produce_Owner">
                  <dt>Owner:</dt>
                  <dd>ratpro4</dd>
                </dl>
                <dl class="produce_Txs">
                  <dt>Txs:</dt>
                  <dd>61</dd>
                </dl>
              </div>
              <div class="produce_buy" v-if="i.price">
                <button class="buy_btn" @click="$store.dispatch('toBuy',i.token_id)">BUY - {{i.price}}</button>
                <button class="groupBuy_btn">GROUP BUY</button>
              </div>
              <div class="produce_buy" v-if="!i.price">
                <button class="comingSoon_btn">Coming Soon</button>
              </div>

            </div>
          </li>
        </ul>
        <div class="page">
          <ul class="page-list">
            <li v-for="i in pageNum" :class="{ cur: pageCur==i}" @click="changePage(i)">{{i}}</li>
            <li @click="changePage(pageCur+1)">next</li>
          </ul>
        </div>

      </div>
    </section>
    <div v-if="versions"></div>
    <Vbuy></Vbuy>
  </div>
</template>

<script>
  import Vbuy from './template/Vbuy.vue'
export default {
  name: 'marketplace',
  components:{
    Vbuy
  },
  data () {
    return {
      order:2,
    }
  },
  computed: {
    versions () {
      return this.$store.state.versions
    },
    produceList () {
      return this.$store.state.produceList
    },
    pageNum () {
      return this.$store.state.pageNum
    },
    pageCur () {
      return this.$store.state.pageCur
    },
    name () {
      return this.$store.state.name
    },
  },
  created:function () {
    var $this = this;
    this.$store.dispatch('produce',{page:1,num:1,order:$this.order})


  },
  methods:{
    changePage:function (str) {
      var $this = this
      if(str>$this.pageNum){
        return
      }
      //获取产品列表
      this.$store.dispatch('produce',{page:str,num:1,order:$this.order})
    },
    orderChange:function (num) {
        var $this = this;
       if($this.order==num){
           return
       }
      $this.order = num;
      this.$store.dispatch('produce',{page:1,num:1,order:$this.order})
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    background: #fff;
  }
  .market-warp{
    min-width: 1200px;
    background: #fff;
  }
  .market{
    width: 1200px;
    margin: 0 auto;
  }
  .market-title{
    line-height: 138px;
    border-bottom: 1px solid #eeeeee;
    font-size: 30px;
    text-align: center;

  }
  .market-nav{
    overflow: hidden;
  }
  .market-nav li{
    float: left;
    margin-right: 50px;
    height: 60px;
    font-size: 20px;
    color: #666666;
    line-height: 60px;
    cursor: pointer;
  }
  .market-nav .cur{
    color: #287de5;
    border-bottom: 2px solid #287de5;
  }
  .content-warp{
    min-width: 1200px;
    padding-top: 31px;
    background: #f0f0f0;
  }
  .content{
    width: 1200px;
    margin: 0 auto;
  }
  .produce_list{
    overflow: hidden;
  }
  .produce{
    width: 285px;
    height: 375px;
    background: #ffffff;
    border-radius: 10px;
    float: left;
    margin-bottom: 40px;
    margin-right: 20px;
    box-shadow: 0px 0px 2px rgba(0,0,0,.3);
    animation: 1s all;
  }
  .produce:nth-child(4n){
    margin-right: 0;
  }
  .produce:hover{
    box-shadow: 0px 0px 10px rgba(0,0,0,.3);
  }
  .produce h5{
    font-size: 24px;
    color: #333333;
    text-align: center;
    line-height: 60px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .produce img{
    display: block;
    width: 285px;
    height: 188px;
  }
  .produce_message{
    line-height: 50px;
    font-size: 14px;
    padding: 0 10px;
  }
  .produce_mes{
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;
  }
  .produce_message dt{
    color: #999999;
    float: left;
    padding-right: 6px;
  }
  .produce_message dd{
    float: left;
  }
  .produce_Owner{
    float: left;
  }
  .produce_Txs{
    float: right;
  }
  .produce_Owner dd{
    color: #287de5;
  }
  .produce_buy{
    padding-top: 20px;
    overflow: hidden;
  }
  .produce_buy button{
    width: 127px;
    height: 36px;
    border-radius: 5px;
    float: left;
    color: #fefefe;
    font-size: 14px;
    line-height: 36px;
    text-align: center;
  }
  .buy_btn{
    margin-right: 11px;
    background: #287de5;
    cursor: pointer;
  }
  .groupBuy_btn{
    background: rgba(40,125,229,.5);
  }
  .comingSoon_btn{
    background: rgba(40,125,229,.5);
    margin-left: 69px;
  }
  .page{
    overflow: hidden;
    padding-bottom: 60px;
  }
  .page-list{
    overflow: hidden;
    float: right;
  }
  .page-list li{
    width: 36px;
    height: 36px;
    float: left;
    border: 1px solid #cccccc;
    background: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    line-height: 36px;
    margin-left: 10px;
    cursor: pointer;
  }
  .page-list .cur{
    cursor: default;
    background: #287de5;
    border-color: #287de5;
    color: #fff;
  }
  .page-list li:last-child{
    width: 48px;
  }
</style>
