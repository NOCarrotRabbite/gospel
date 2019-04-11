<template>
  <div class="box">
    <div class="header">
      <h4>商家名称</h4>
      <h1>￥200,000.00</h1>
    </div>
    <div class="cards">
      <div class="card-box">
        <router-link to='/my_shop'>
          <div class="card-item">我的店铺</div>
        </router-link>
        <router-link to='/charge_info'>
          <div class="card-item">我的订单</div>
        </router-link>
      </div>
      <div class="card-box">
        <router-link to='/take_money_info'>
          <div class="card-item">提款记录</div>
        </router-link>
        <router-link to='/match_card'>
          <div class="card-item">提现/兑卡</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      query() {
        alert(123456789);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .box {
    .header {
      padding: 4rem 0;
      background-color: #8881D7;
      text-align: center;
      color: white;
    }
    .cards {
      .card-box {
        display: flex;
        justify-content: center;
        .card-item {
          padding: 1rem
        }
      }
    }
  }

</style>
