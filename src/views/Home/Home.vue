<template>
  <div class="box">
    <header class="header">
      <div class="setting-logo"><i class="iconfont icon-peizhiguanli"></i></div>
      <h4>商家名称</h4>
      <h1>￥200,000.00</h1>
    </header>
    <div class="cards">
      <div class="card-box">
        <router-link to='/my_shop'>
          <div class="card-item left">店铺</div>
        </router-link>
        <router-link to='/charge_info'>
          <div class="card-item right">订单</div>
        </router-link>
      </div>
      <div class="card-box">
        <router-link to='/take_money_info'>
          <div class="card-item left">提款</div>
        </router-link>
        <router-link to='/match_card'>
          <div class="card-item right">兑卡</div>
        </router-link>
      </div>
    </div>
    <!--<footer>
      <h4>主页</h4>
      <h4>店铺</h4>
      <h4>我的</h4>
    </footer>-->
  </div>
</template>

<script>
  export default {
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  .box {
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    height: 100%;
    overflow: scroll;
    .header {
      padding: 5rem 0;
      background-color: #7261D1;
      text-align: center;
      color: white;
      .setting-logo {
        padding: 0 1rem;
        text-align: right;
        margin-top: -3rem;
        i{ font-size: 1.5rem }
      }
      h4 { padding: 0.5rem 0 }
    }
    .cards {
      padding: 1rem 0.5rem;
      .card-box {
        display: flex;
        justify-content: center;
        // margin-top: 1rem;
        .card-item {
          margin: 0.5rem 0.5rem;
          padding: 3rem;
          background-color: #fff;
          border-radius: 10px;
          color: #1E1E1E;
        }
      }
    }
    footer {
      display: flex;
      justify-content: space-around;
      align-content: center;
      background-color: #fff;
      color: gray;
      height: 3rem;
      line-height: 3rem;
    }
  }

</style>
