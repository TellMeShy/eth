<template>
  <div class="home">
    <section class="banner-warp">
      <div class="banner">

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
            <p>CryptoWorldHeritage is the first platform for collecting one-of-kind digital world heritage collectibles. Each world heritage is represented by one (and only one) ERC721-compliant smart contract on the </p>
            <p>Ethereum blockchain. Collectors can buy and own their own Taj Mahal or Machu Picchu. Our hope is that collectors around the world will see blockchain technology as a vehicle to learn to appreciate and preserve the world heritage, and that blockchain enthusiasts will learn about legendary creative ability of mankind and our nature.
            </p>
          </dd>
        </dl>
        <dl>
          <dt class="sho_detail">
          <p>CryptoWorldHeritage is an interactive game that lets anyone buy and own world heritage as Smart Contracts on the Ethereum Blockchain. As soon as you acquire a world heritage, you take ownership of that contract and it automatically increases in price.
        </p>
          <p>If someone else wants to buy your world heritage, they can pay up to double the price that you paid. You will then lose the ownership of that contract, but you will receive up to double the amount in ETH automatically transferred back to your crypto wallet.
          </p>
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

    }
  },
  computed: {

  },
  created:function () {

  },
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

</style>
