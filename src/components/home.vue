<template>
  <div class="home">
    <section class="banner-warp">
      <div class="banner">
        <div class="network_err" v-if="networkCur!=0" v-cloak >
          <h5>Not Connected</h5>
          <p>{{network[networkCur]}}</p>
        </div>
        <h2>OWN A WORLD HERITAGE<br/>
          ON THE BLOCKCHAIN</h2>
        <a href="marketplace" class="to-Marketplace">Start</a>
      </div>
    </section>

    <section class="content-warp">
      <div class="content">
        <dl>
          <dt class="show_img"></dt>
          <dd class="sho_detail">
            <p>Sed interdum pharetra massa vel vulputate. Fusce iaculis sem erat, in tristique or ornare. Donec
              fringilla venenatis semper. Suspendisse potenti. Quisque fringilla efficitur eros no pretium. Mauris
              dolor eros, fermentum non ligula, consequat fermentum sapien. In hac habitasse platea dictumst.
              Cras mattis sollicitudin orci, vitae facilisis diam maximus non.</p>
            <p>Fringilla nibh sapien, in bibendum eros dictum at. Nam aliquam turpis a nisi sollicitudin volutpat.
              Nunc orci lorem, rutrum vel massa eget, eleifend malesuada enim. Morbi vitae sagittis libero, in
              ultricies lorem. Ut eleifend, nunc auctor eleifend placerat, ex diam tempor odio, vel pellentesque
              quam lorem vel nunc. </p>
          </dd>
        </dl>
        <dl>
          <dt class="sho_detail">
          <p>Nullam in sodales sem. Fusce sed pretium libero. In a ipsum eu lorem ornare finibus non sipsum.
            In eu gravida magna. Nunc sit amet dignissim ex. Aenean hendrerit turpis ut scelerisque tempor.
            Duis ut elit venenatis, semper neque quis, pharetra lacus.</p>
          <p>Curabitur sed metus non est mattis bibendum. Cras at dolor arcu. In vitae fermentum neque, vel
            efficitur odio. Vivamus pellentesque vestibulum urna, at suscipit ipsum tincidunt nec. Vivamus ac
            odio elit. Nunc eget ex bibendum, auctor nulla ullamcorper, maximus eros. Duis eros eros, semp
            efficitur efficitur nec, molestie at sem. Nam quis felis venenatis, consectetur ipsum non, suscipit
            quam. Mauris luctus leo eget fringilla condimentum. Aliquam erat volutpat.</p>
          </dt>
          <dd class="show_img"></dd>
        </dl>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      network:['11','You’ll need a safe place like MetaMask to store all of your valuable world heritage. This will also act as your login to the game (no extra password needed). Install MetaMask'
        ,'You are using a test network now. Please join the Main network to continue.'
        ,'It looks like MetaMask is locked. Please unlock MetaMask and then refresh this page.'
      ],                //网络提示
    }
  },
  computed: {
    networkCur () {
      return this.$store.state.networkCur
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner-warp{
    min-width: 1200px;
    background: url("../../static/images/banner.jpg") center 0;
    height: 758px;
  }
  .banner{
    width: 1200px;
    margin: 0 auto;
    padding-top: 421px;
    position: relative;
  }
  .banner h2{
    text-align: center;
    font-size: 60px;
    color: #fff;
    text-shadow: 0px 1px 2px rgba(4, 0, 0, 0.8);
    margin-bottom: 32px;
  }
  .to-Marketplace{
    display: block;
    margin: 0 auto;
    width: 340px;
    height: 80px;
    box-sizing: border-box;
    border: 4px solid #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 80px;
    font-size: 36px;
    color: #fff;
    text-shadow: 0px 1px 2px rgba(4, 0, 0, 0.8);
    box-shadow: 0px 2px 3px rgba(4, 0, 0, 0.8);
  }
  .content-warp{
    min-width: 1200px;
  }
  .content{
    padding-top: 16px;
    width: 1200px;
    margin: 0 auto;
  }
  .content dl{
    overflow: hidden;
  }
  .content dl:first-child{
    border-bottom: 1px solid #dddddd;
  }
  .content dt,.content dd{
    width: 600px;
    height: 427px;
    box-sizing: border-box;
    float: left;
  }
  dt.show_img{
    background: url("../../static/images/indeximg1.png") center center no-repeat;
  }
  .sho_detail{
    padding-top: 96px;
  }
  .sho_detail p{
    font-size: 14px;
    line-height: 24px;
    color: #333333;
    padding-bottom: 25px;
  }
  dd.show_img{
    background: url("../../static/images/indeximg2.png") center center no-repeat;
  }
  .network_err{
    padding-left: 18px;
    width: 1200px;
    height: 80px;
    position: absolute;
    border: 1px solid #f3c37f;
    border-radius: 5px;
    top: 20px;
    background: #fff5db;
    padding-top: 18px;
  }
  .network_err h5{
    font-size: 22px;
  }
  .network_err p{
    line-height: 32px;
    font-size: 16px;
    color: #666;
  }

</style>
