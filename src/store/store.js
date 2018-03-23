import Vue from 'vue';
import Vuex from 'vuex';
import web3Min from './web3.min';
import url from './url';
import jsonArr from './WorldHeritageCore.json';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  jsonArr:jsonArr,
  url,    //地址
  hydz:'0x200b23ebc2207512306f9dd56a848f346a1a87a1',
  fbdz:'0x7eeb94a7913f91135812a75437ae139830ed59e4',
  networkCur:0,     //网络状态
  accounts:'',       //用户合约
  name:'Set Nickname',  //用户名
  produceList:'',     //产品列表
  pageNum:'',        //产品页数
  pageCur:1,       //产品列表当前页
  myPageCur:1,       //wode列表当前页
  abi:'',          //获取的json数据
  contract:'',      //合约对象
  detail:{},            //商品  （web3详情）
  dataDetail:{},            //商品  （接口详情）
  buyShow: false,              //购买窗口显示
  payNum:'',                            //实际支付
  versions:0,
  changeNameShow: false,  //改名框是否显示
  alertShow: false,       //提示框显示
};
const mutations={
  init(state){
    window.addEventListener('load', function() {
      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
        // Use the browser's ethereum provider
        var provider = web3.currentProvider
      } else {
        state.networkCur = 1;
      }

      web3.version.getNetwork((err, netId) => {
        if(web3.eth.accounts[0]){
          state.accounts = web3.eth.accounts[0]
          axios.get(url.getNickname,{params:{token:state.accounts}})
            .then(function (response) {
              if(response.data.data){
                state.name =response.data.data
              }else {
                state.name ='Set Nickname';
              }

            })
            .catch(function (error) {
              console.log(error);
            });
          switch (netId) {
            case "1":
              state.networkCur = 0;
              // $this.accounts = web3.eth.accounts[0]
              break
            default:
              state.networkCur = 2;
          }
        }else {
          state.networkCur = 3;
          return
        }
      })

    });
  },   //数据初始化
  nickName(state,newName){
    console.log(newName);
    axios.get(url.setNickname,{params:{token:state.accounts,nickname:newName}})
      .then(function (response) {
        state.name = newName;
        state.changeNameShow = false
      }) .catch(function (error) {
          console.log(error);
      });
  },  //改名
  produce(state,params){
    state.pageNum = params.data.last_page;
    state.produceList[params.i].name = params._name;
    state.produceList[params.i].price = params.val;
    state.produceList[params.i].address = params._address;
    state.produceList[params.i].nextprice = params._nextprice;
    state.versions++
  },    //产品列表
  getDetail(state,arrayvalue){
    var _name = arrayvalue[0];
    state.detail.name = _name
    console.log("name : " + _name);
    var _price = arrayvalue[1];
    var val = parseFloat(parseFloat(web3.fromWei(_price, "ether")) + 0.00005)
    state.detail.price = parseFloat(val).toFixed(3);
    console.log("price : " + state.detail.price);
    var _address = arrayvalue[2];
    console.log("owner address :" + _address);
    // if(val>1&&_address==state.fbdz){
    //
    // }
    state.detail.address =_address
    var _nextprice = arrayvalue[3];
    var nextval = parseFloat(parseFloat(web3.fromWei(_nextprice, "ether")) + 0.00005)
    state.detail.nextprice = parseFloat(nextval).toFixed(3);
    state.versions++
  }, //产品详情
  getDataDetail(state,response){
    state.dataDetail = response;
    state.versions++
  },
  toBuy(state,params){
    state.detail.id = params.id
    state.detail.name = params._name;
    console.log('zy0009'+state.detail.name);
    state.detail.price = parseFloat(params.val).toFixed(3);
    state.price = parseFloat(params.val).toFixed(3);
    state.detail.address =params._address
    state.detail.nextprice = parseFloat(params.nextval).toFixed(3);
    state.versions++
    console.log('zzz:'+state.accounts);
    console.log('yyy:'+params._address);
    if(state.accounts==state.detail.address){
      state.alertShow = 'You cannot purchase your own contract.'
    }else {
      state.buyShow=true;
    }


  },    //去支付
  topay(state,params){
    console.log(state.contract);
    state.contract.getWorldHeritage(params.id, function(error, result){
      if(!error) {
        var arrayvalue = new Array();
        arrayvalue = result;
        var _name = arrayvalue[0];
        state.detail.name = _name
        console.log("name : " + _name);
        var _price = arrayvalue[1];
        var val = parseFloat(parseFloat(web3.fromWei(_price, "ether")) + 0.00005)
        state.detail.price = parseFloat(val).toFixed(3);
        console.log("price : " + state.detail.price);
        var _address = arrayvalue[2];
        console.log("owner address :" + _address);
        state.detail.address =_address
        var _nextprice = arrayvalue[3];
        var nextval = parseFloat(parseFloat(web3.fromWei(_nextprice, "ether")) + 0.00005)
        state.detail.nextprice = parseFloat(nextval).toFixed(3);
        console.log('zy'+state.detail.nextprice);
        console.log("next price : "+ _nextprice);
        if(params.newPrice>=state.detail.price)
          state.payNum=params.newPrice;
        console.log(state.payNum);
        if (state.detail.price > 0.009) {
          var data = state.contract.purchase.getData(params.id);

          const transaction = {
            from: web3.eth.coinbase,
            to: state.hydz,
            value: web3.toWei(state.payNum, "ether"),
            data: data
          };
          console.log('zzz',transaction);
          console.log('zzz',params.newPrice);
          web3.eth.sendTransaction(transaction, function(err, txHash) {
            if (err != null) {
              alert(111)
            } else {
              console.log(txHash);
              console.log(params.id);
              axios.get(url.transaction,{params:{token_id:params.id}}).then(function (response) {
                location.reload();
              }) .catch(function (error) {
                console.log(error);
              });
              state.buyShow = false
            }
          });
        } else {

        }
      }


    })

  },
  web3Init(state,params){
    state.contract = web3.eth.contract(params.abi).at(state.hydz);
    if(params.data){
      state.produceList = params.data.items;
    }

    if(params.num==1){
      state.pageCur = params.page;
    }else if(params.num==2) {
      state.myPageCur = params.page;
    }
  },
  buyHide(state){
    state.buyShow = false;
  },
  changeName(state,bool){
    state.changeNameShow = bool
  },
  isAlertShow(state,bool){
    state.alertShow = bool
  }
}
const wo = {
  toBuy(context,id){
    if(state.networkCur==2){
      var abi = state.jsonArr.abi
      context.commit('web3Init',{abi:abi})
      state.contract.getWorldHeritage(id, function(error, result){
        if(!error) {
          var arrayvalue = new Array();
          arrayvalue = result;
          var _name = arrayvalue[0];
          var _price = arrayvalue[1];
          var val = parseFloat(parseFloat(web3.fromWei(_price, "ether")) + 0.00005)
          var _address = arrayvalue[2];

          var _nextprice = arrayvalue[3];
          var nextval = parseFloat(parseFloat(web3.fromWei(_nextprice, "ether")) + 0.00005)
          console.log("0000 address :" + _address);
          context.commit('toBuy',{_name:_name,val:val,_address:_address,nextval:nextval,id:id})

        }
      })
    }
    else if(state.networkCur==3){
      state.alertShow = 'Please login and refresh the page first.'
    }else {
      state.alertShow = 'Please switch lines'
    }

  },
  produce(context,params){
    axios.get(state.url.heritages,{params:{page:params.page,order:params.order}})
      .then(function (response) {

        // axios.get(state.jsonArr)
        //   .then(function (response) {
        var abi = state.jsonArr.abi;
        context.commit('web3Init',{data:response.data.data,abi:abi,page:params.page,num:params.num})
        // .catch(function (error) {
        //   console.log(error);
        // });
        for(let i = 0;i<response.data.data.items.length;i++){

          let tokenid =  response.data.data.items[i].token_id;
          state.contract.getWorldHeritage(tokenid, function(error, result){
            if(!error) {
              var arrayvalue = new Array();
              arrayvalue = result;
              var _name = arrayvalue[0];

              var _price = arrayvalue[1];
              var val = parseFloat(parseFloat(web3.fromWei(_price, "ether")) + 0.00005)
              val = parseFloat(val).toFixed(3);

              var _address = arrayvalue[2];

              var _nextprice = arrayvalue[3];
              context.commit('produce',{_name:_name,val:val,address:_address,_nextprice:_nextprice,num:params.num,page:params.page,data:response.data.data,i:i})
            }
          })

        }
        // console.log(state.produceList);
      })
      .catch(function (error) {
        console.log(error);
      });

  },
  getHydx(context,id){
    // console.log(id);
    var abi = state.jsonArr.abi;
    var contract = web3.eth.contract(abi).at(state.hydz);
    contract.getWorldHeritage(id, function(error, result){
      if(!error) {
        var arrayvalue = new Array();
        arrayvalue = result;
        context.commit('getDetail',arrayvalue)
      }
    });
    axios.get(state.url.heritage+id)
      .then(function (response) {

        context.commit('getDataDetail',response.data.data)
      }).catch(function (error) {
      console.log(error);
    });
  }

}

export default new Vuex.Store({
    state,mutations,actions
});

