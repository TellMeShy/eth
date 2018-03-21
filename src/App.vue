<template>
  <div id="app">
    <header>
      <div class="header">
        <a href="" class="logo ico"></a>
        <a class="eth-logo ico"  :class="{'eth-is-logo':!networkCur}" @mouseenter="personShow" @mouseleave="personOut">
          <div class="personShow" v-if="networkCur&&perShow">Offlin</div>
          <div class="personShow" v-if="!networkCur&&perShow">
            <p v-cloak>{{accounts}}</p>
            <p class="setName"><span @click="$store.commit('changeName',true)">{{name}}</span></p>
          </div>
        </a>
        <div class="nav">
          <a class="nav_L"  @click="navCur=0" :class="{cur:navCur==0}"><router-link to="/">Home</router-link></a>
          <a class="nav_L"  @click="navCur=1" :class="{cur:navCur==1}"><router-link to="/marketplace">Marketplace</router-link></a>
          <a class="nav_L"  @click="navCur=2" :class="{cur:navCur==2}"><router-link to="/collections">My Collections</router-link></a>
        </div>

      </div>

    </header>
    <router-view></router-view>
    <footer>
      <div class="footer">
        <div class="footer-t">
          <dl>
            <dt>About</dt>
            <dd>
              <a href="">Home</a>
              <a href="">How it works</a>
              <a href="">FAQ</a>
              <a href="">TOS</a>
              <a href="">Pravacy Policy</a>
            </dd>
          </dl>
          <dl>
            <dt>Game</dt>
            <dd>
              <a href="">Marketplace</a>
              <a href="">My Contacts</a>
            </dd>
          </dl>
          <div class="footer-share">
            <a href="" class="footer-fb"><i class="ico"></i>My Contacts</a>
            <a href="" class="footer-wt"><i class="ico"></i>Twitter</a>
          </div>
          <div class="footer-eth">
            <i class="ico"></i>ETHERRUM
          </div>
          <div class="footer-met">
            <i class="ico"></i>METAMASK
          </div>
        </div>
        <p>© Copyright 2016 - Livestar - All Rights Reserved.</p>
      </div>
    </footer>
    <div class="shade" v-if="changeNameShow" v-cloak>
      <div class="alert-setName">
        <h5>Set Nickname</h5>
        <input type="text" placeholder="Nickname" v-model="newName">
        <div class="alert-setName-btn">
          <button class="cancel" @click="changeNameShow=false;">Cancel</button>
          <button class="ok" :class="{isok: isok}" @click="$store.commit('nickName',newName)">ok</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import store from '@/store/store'
export default {
  name: 'App',
  data () {
    return {
      perShow:'',
      permouseenter:'',
      shadeShow:false,
      alertSetName:false,
      isok:false,
      newName: '',   //新名字
      navCur:0,
    }
  },
  store,
  computed: {
    networkCur () {
      return this.$store.state.networkCur
    },
    changeNameShow () {
      return this.$store.state.changeNameShow
    },
    accounts () {
      return this.$store.state.accounts
    },
    name () {
      return this.$store.state.name
    },

  },
  created:function () {
    this.$store.commit('init');
    if((/\/marketplace/.test(this.$route.path))&&!(/\/marketplace.+/.test(this.$route.path))){
      this.navCur=1
    }else if(/\/collections/.test(this.$route.path)){
      this.navCur=2
    }
  },
  methods:{
    personShow:function () {
      var $this = this;
      $this.perShow = true;
      $this.permouseenter = false;
    },
    personOut:function () {
      var $this = this;
      $this.permouseenter = true
      setTimeout(function () {
        if($this.permouseenter){
          $this.perShow = false;
        }
      },100)
    },
  },
  watch:{
    newName(val){ //监听服务器改变
      var $this = this;
      $this.newName = val.replace(/ /g,'')
      console.log($this.newName.length);
      if($this.newName.length>2&&$this.newName.length<51){
        $this.isok = true
      }else{
        $this.isok = false
      }
    },
    '$route' (to, from) {
      if((/\/marketplace/.test(this.$route.path))&&!(/\/game.+/.test(this.$route.path))){
        this.navCur=1
      }else if(/\/collections/.test(this.$route.path)){
        this.navCur=2
      }
    },

  }
}
</script>

<style>
  @font-face{
    font-family:asd;
    /*为引入的字体命名*/
    src:url(../static/asd.ttf);
    /*定义要引入字体文件的路径*/
  }
  body,dl,dd,h1,h2,h3,h4,h5,h6,form,p{margin:0;}
  h1,h2,h3,h4,h5,h6{font-weight: normal;font-size: 100%;}
  ul,ol{margin:0;padding: 0;list-style:none;}
  img{border:0;}article, aside, dialog, footer, header, section, footer, nav, figure, menu {display: block;}
  i{font-style: normal;}
  body{background-color:#fff;color:#333333;font:16px/1.5 asd,'\5FAE\8F6F\96C5\9ED1',Arial,'\5b8b\4f53',Verdana,Tahoma,Helvetica,sans-serif;}a{color: #a7a7a7;text-decoration: none;line-height:1;}
  a:hover{text-decoration: none;}
  .pointer{
    cursor: pointer;
  }
  .nav .cur{
    font-weight: bold;
  }
  button{
    border: none;
    display: block;
    padding: 0;
    cursor: pointer;
  }
  .ico{
    background: url("../static/images/ico.png");
  }
  header{
    min-width: 1200px;
    box-shadow: 0px 1px 5px 0px rgba(4, 0, 0, 0.1);
    position: relative;
    z-index: 2;
  }
  .header{
    width: 1200px;
    margin: 0 auto;
  }
  .header{
    padding-top: 16px;
    padding-bottom: 16px;
    height: 100px;
    box-sizing: border-box;
  }
  .logo{
    float: left;
    width: 195px;
    height: 63px;
  }
  .nav{
    float: left;
    padding-left: 459px;
  }
  .nav a{
    line-height: 68px;
    color: #333;
    padding: 0 25px;
    font-size: 24px;
  }
  .eth-logo{
    float: right;
    width: 23px;
    height: 39px;
    background-position: -222px 0;
    margin-top: 15px;
    position: relative;
  }
  .eth-is-logo{
    background-position: -198px 0;
  }
  footer{
    border-top: 1px solid #dddddd;
    min-width: 1200px;
    background: #eeeeee;
  }
  .footer{
    padding-top: 43px;
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    font-size: 20px;
  }
  .footer dl{
    width: 240px;
    float: left;
  }
  .footer dt{
    padding-bottom: 4px;
    border-bottom: 1px solid #cccccc;
    width: 158px;
  }
  .footer dd{
    padding-top: 10px;
  }
  .footer dd a{
    display: block;
    color: #333333;
    line-height: 32px;
  }
  .footer-share a{
    color: #666666;
  }
  .footer-share i{
    width: 28px;
    height: 28px;
    float: left;
  }
  .footer-share{
    width: 255px;
    float: left;
  }
  .footer-share a{
    display: block;
    overflow: hidden;
    padding-bottom: 33px;
    line-height: 28px;
  }
  .footer-share i{
    margin-right: 10px;
  }
  .footer-fb i{
    background-position: -265px 0;
  }
  .footer-wt i{
    background-position: -265px -32px;
  }
  .footer-eth{
    float: left;
    line-height: 67px;
    width: 276px;
  }
  .footer-eth i{
    margin-right: 16px;
    float: left;
    width: 35px;
    height: 60px;
    background-position: -303px 0;
  }
  .footer-met{
    float: left;
    line-height: 67px;
  }
  .footer-met i{
    margin-right: 16px;
    float: left;
    width: 44px;
    height: 40px;
    margin-top: 10px;
    background-position: -342px 0;
  }
  .footer-t{
    overflow: hidden;
    padding-bottom: 129px;
  }
  .footer p{
    text-align: center;
    font-size: 14px;
    color: #999999;
    padding-bottom: 20px;
  }
  .personShow{
    line-height: 36px;
    font-size: 14px;
    padding: 0 7px;
    box-shadow: 0px 0px 2px rgba(0,0,0,.3);
    border-radius: 3px;
    background: #fff;
    position: absolute;
    top: 60px;
    right: 4px;
    z-index: 3;
    color: #666;
    cursor: default;
  }
  .personShow:after{
    content: '';
    display: block;
    position: absolute;
    width: 10px;
    height: 8px;
    right: 2px;
    top: -8px;
    background: url("../static/images/ico.png") -250px 0;
  }
  .setName{
    border-bottom: 1px dashed #dddddd
  }
  .setName span{
    float: right;
    color: #3081eb;
    cursor: pointer;
  }
  .shade {
    position: fixed;
    background: rgba(0,0,0,.7);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
  }
  .shade>div{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .alert-setName{
    width: 250px;
    height: 180px;
    background: #efefef;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 28px 30px 0 30px;
  }
  .alert-setName h5{
    font-size: 18px;
    text-align: center;
    padding-bottom: 20px;
  }
  .alert-setName input{
    display: block;
    border: 1px solid #eee;
    border-radius: 5px;
    width: 100%;
    height: 31px;
    line-height: 31px;
    text-align: center;
    font-size: 14px;
    margin-bottom: 18px;
  }
  .alert-setName-btn{
    overflow: hidden;
  }
  .alert-setName button{
    width: 88px;
    height: 32px;
    float: left;
    border-radius: 5px;
  }
  .alert-setName .cancel{
    background: #cccccc;
    margin-right: 14px;
  }
  .alert-setName .ok{
    background: #93bef2;
    color: #fff;
    cursor: default;
  }
  .alert-setName .isok{
    cursor:pointer;
    background: #287de5;
  }
  [v-cloak] {
    display:none;
  }
  .nav .nav_L{
    padding: 0;
  }
</style>
