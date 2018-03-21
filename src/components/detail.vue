<template>
  <div class="detail">
    <section class="content-warp">
      <div class="content">
        <div class="content-l">
          <div class="produce">
            <h5>{{detail.name}}</h5>
            <img :src="detail.picture" alt="">
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
              <div class="produce_buy" v-if="dataDetail.status == 1" v-cloak>
                <button class="buy_btn" @click="$store.dispatch('toBuy',id)">BUY - {{detail.price}}</button>
                <button class="groupBuy_btn">GROUP BUY</button>
              </div>
              <div class="produce_buy" v-if="dataDetail.status == 2" v-cloak>
                <button class="comingSoon_btn">Coming Soon</button>
              </div>
            </div>
          </div>
          <dl class="group_owner">
            <dt>Group Owner</dt>
            <dd>Ratlro4 <i>30%</i></dd>
            <dd>Jony Fu <i>10%</i></dd>
            <dd>Fanzheng511 <i>10%</i></dd>
            <dd>MiranaChen <i>10%</i></dd>
          </dl>
        </div>
        <div class="content-r">
          <div class="content-detail">
            <h5 class="detail-tit">Details</h5>
            <div class="dt-list">
              <dl class="detail-list">
                <dt>Contract Name:</dt>
                <dd>{{detail.name}}</dd>
              </dl>
              <dl class="detail-list">
                <dt>Country:</dt>
                <dd>{{dataDetail.country}}</dd>
              </dl>
              <dl class="detail-list">
                <dt>Curremt price:</dt>
                <dd>{{detail.price}}</dd>
              </dl>
              <dl class="detail-list">
                <dt>Next price:</dt>
                <dd>{{detail.nextprice}}</dd>
              </dl>
              <dl class="detail-list">
                <dt>Current owner:</dt>
                <dd></dd>
              </dl>
              <dl class="detail-list">
                <dt>Token ID:</dt>
                <dd>{{dataDetail.token_id}}</dd>
              </dl>
            </div>
            <h6 class="detail-title">{{dataDetail.name}}</h6>
            <div v-html="dataDetail.introduce"></div>

            <!--<p class="detail-msg">The South Island or Te Waipounamu (in Māori) is the larger of the two major islands of New Zealand, the other being the smaller but more-->
            <!--populous North Island. It is bordered to the north by Cook Strait, to the west by the Tasman Sea, and to the south and east by the Pacific-->
            <!--Ocean. The South Island covers 150,437 square kilometres (58,084 sq mi), making it the world's 12th-largest island. It has a temperate-->
            <!--climate.</p>-->
            <!--<p class="detail-msg">-->
            <!--It has a 32 percent larger landmass than the North Island so is sometimes referred to as the "mainland" of New Zealand, especially by-->
            <!--South Island residents, but only 23 percent of New Zealand's 4.8 million inhabitants live there. In the early stages of European (Pākehā)-->
            <!--settlement of the country, the South Island had the majority of the European population and wealth due to the 1860s gold rushes. The-->
            <!--North Island population overtook the South in the early 20th century, with 56 percent of the population living in the North in 1911, and the-->
            <!--drift north of people and businesses continued throughout the century.-->
            <!--</p>-->
            <!--<img src="../images/img1.png" alt="">-->
            <!--<img src="../images/img1.png" alt="">-->
          </div>
          <div class="Latest_Transactions">
            <h5>Latest Transactions</h5>
            <dl>
              <dt>
                <span class="Latest_user">Users</span>
                <span class="Latest_price">Price</span>
                <span class="Latest_data">Date</span>
              </dt>
              <dd>
                <span class="Latest_user">Mr. Meeseeks</span>
                <span class="Latest_price">2.2514</span>
                <span class="Latest_data">2018-02-16T05:27:58Z</span>
              </dd>
              <dd>
                <span class="Latest_user">Mr. Meeseeks</span>
                <span class="Latest_price">2.2514</span>
                <span class="Latest_data">2018-02-16T05:27:58Z</span>
              </dd>
            </dl>
          </div>
        </div>
      </div>

    </section>
    <!--<div class="shade" @click="shadeShow = false;alertBuy = false;alertSetName = false" v-if="shadeShow" v-cloak >-->
      <!--<div class="alert-buy" v-if="alertBuy" @click.stop="stophidden">-->
        <!--<h6>{{detail.name}}</h6>-->
        <!--<p class="alert-buy-tip">The current buying price for this contract is <b>{{val}}</b> ETH.</p>-->
        <!--<p class="alert-buy-tip">If someone decides to snatch the contract away from you, you will be paid <b>{{nextVal}}</b> ETH.</p>-->
        <!--<p class="alert-buy-tip1">-->
          <!--Transactions on the Blockchain take time to process. By the time you buy this contract, it's price may already be higher-->
          <!--than is shown on the card and your transaction will fail. You may submit a higher amount to increase the chances of a-->
          <!--successful transaction. If you bid higher than the contract's current price, the difference will be refunded automatically.-->
        <!--</p>-->
        <!--<dl class="Custom_price">-->
          <!--<dt>Custom price:</dt>-->
          <!--<dd><input type="text" v-model="payVal"></dd>-->
        <!--</dl>-->
        <!--<button class="ico" @click="toPly"></button>-->
        <!--<p class="alert-buy-tip2">* If some one else outbid you during this time, your ETH will be refunded.</p>-->
      <!--</div>-->
      <!--<div class="alert-setName" v-if="alertSetName">-->
        <!--<h5>Set Nickname</h5>-->
        <!--<input type="text" placeholder="Nickname" v-model="newName">-->
        <!--<div class="alert-setName-btn">-->
          <!--<button class="cancel" @click="alertSetName=false;shadeShow=false;">Cancel</button>-->
          <!--<button class="ok" :class="{isok: isok}" @click="nickName">ok</button>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <Vbuy></Vbuy>
    <div v-if="versions"></div>
  </div>
</template>

<script>
import Vbuy from './template/Vbuy.vue'
export default {
  name: 'detail',
  components:{
    Vbuy
  },
  data () {
    return {
      id: ''
    }
  },
  computed: {
    detail () {
      return this.$store.state.detail
    },
    dataDetail () {
      return this.$store.state.dataDetail
    },
    networkCur () {
      return this.$store.state.networkCur
    },
    versions () {
      return this.$store.state.versions
    },

  },
  created: function () {
    var $this = this;
    $this.id = $this.$route.query.id;
    $this.$store.dispatch('getHydx',$this.id)
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-warp{
    padding-top: 20px;
    min-width: 1200px;
    background: #f0f0f0;
  }
  .content{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 100px;
  }
  .produce{
    width: 285px;
    height: 375px;
    background: #ffffff;
    border-radius: 10px;
    margin-bottom: 20px;
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
  .group_owner{
    width: 285px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 2px rgba(0,0,0,.3);
    font-size: 18px;
    line-height: 50px;
  }
  .group_owner dt{
    padding-left: 18px;
  }
  .group_owner dd{
    color: #287de5;
    padding-left: 18px;
    border-top: 1px solid #f0f0f0;
  }
  .group_owner dd i{
    color: #666666;
    float: right;
    padding-right: 18px;
  }
  .content-l{
    float: left;
    padding-right: 20px;
  }
  .content-r{
    float: left;
    width: 895px;
  }
  .content-detail{
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0px 0px 2px rgba(0,0,0,.3);
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
  .detail-tit{
    line-height: 60px;
    font-size: 24px;

  }
  .detail-list,.detail-list dt,.detail-list dd{
    float: left;
  }
  .detail-list,.dt-list{
    overflow: hidden;
    line-height: 50px;
  }
  .detail-list{
    width: 410px;
    border-top: 1px solid #f0f0f0;
  }
  .detail-list dt{
    font-size: 16px;
    width: 160px;
    color: #666666;
  }
  .detail-list dd{
    font-size: 14px;
  }
  .detail-list:nth-child(2n+1){
    margin-right: 35px;
  }
  .detail-list:nth-child(1) dd{
    color: #287de5;
  }
  .detail-list:nth-child(4){
    border-bottom: 1px solid #f0f0f0;
  }
  .detail-list:nth-child(5){
    border-bottom: 1px solid #f0f0f0;
  }
  .detail-title{
    font-size: 24px;
    padding-top: 50px;
    padding-bottom: 20px;
  }
  .detail-msg{
    font-size: 14px;
    line-height: 24px;
    padding-bottom: 16px;
  }
  .Latest_Transactions{
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0px 0px 2px rgba(0,0,0,.3);
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
  }
  .Latest_Transactions h5{
    font-size: 24px;
    color: #333333;
    line-height: 60px;
    border-bottom: 1px solid #f0f0f0;
    text-align: left;
  }
  .Latest_user{
    width: 238px;
  }
  .Latest_price{
    width: 240px;
  }
  .Latest_Transactions dt{
    font-size: 18px;
    line-height: 50px;
    overflow: hidden;
  }
  dd .Latest_user{
    color: #287de5;
  }
  .Latest_Transactions dd{
    font-size: 14px;
    line-height: 50px;
    border-top: 1px solid #f0f0f0;
    overflow: hidden;
  }
  .Latest_Transactions dt span,.Latest_Transactions dd span{
    float: left;
  }


</style>
