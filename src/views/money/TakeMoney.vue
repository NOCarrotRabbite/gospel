<template>
  <div class="take-money">
    <header>
      <a href="/take_money_info"><i class="iconfont icon-fanhui"></i></a>
      <h4>提现</h4>
      <i class="iconfont icon-canshupeizhi" @click="bindSetting"></i>
    </header>
    <main>
      <ul v-if="setting" class="bind-setting">
        <a href="/bind_alipay"><li>绑定支付宝</li></a>
        <a href="/bind_bank_card"><li>绑定银行卡</li></a>
      </ul>
      <div class="remain-box">
        <h4>可用余额</h4>
        <span>￥800.00</span>
      </div>
      <div class="arrival-channel">
        <h4>到账渠道</h4>
        <div>
          <label><input type="radio" name="payType" value="1"/> 支付宝 </label>
          <label><input type="radio" name="payType" value="2"/> 银行卡</label>
        </div>
      </div>
      <div class="amount-money">
        <h4>提现金额</h4>
        <input type="text" placeholder="请输入提款金额，至少大于3000"/>
      </div>
      <div class="remarks">
        <p>
          1.提款发起后，客服人员会在24小时内转账，请务必确认已绑定正确的支付宝或银行卡号。
        </p>
        <p>
          2.点击右上角(图标)按钮即可绑定支付宝或者银行卡号。
        </p>
      </div>
      <button>确认提现</button>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        setting: false
      }
    },
    methods: {
      bindSetting() {
        if(this.setting) {
          this.setting = false;
        } else {
          this.setting = true;

        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  .take-money {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F2F3F7;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(to bottom right, #884CC3 0%, #6F47B9 50%, #4D2FB5 100%);
      color: #fff;
      padding: 1rem 1rem;
      h4 {
        flex-grow: 1;
        display: flex;
        justify-content: center;
      }
      i {
        font-size: 1.3rem;
      }
      a {
        color: #fff;
      }
    }
    main {
      overflow: scroll;
      box-sizing: border-box;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 99;
      .bind-setting {
        background: #2B2B2B;
        width: 30%;
        align-self: flex-end;
        border-radius: 5px;
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        z-index: 100;
        padding: 0.3rem 0.5rem;
        opacity: 0.8;
        li {
          padding: 0.5rem 0.5rem;
          color: #fff;
          text-align: center;
        }
      }
      .remain-box, .arrival-channel, .amount-money {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        background-color: #fff;
        margin-bottom: 0.5rem;
        z-index: 99;
        h4 {
          color: #666666;
          //color: #373639;
        }
        span {
          color: #7261D1;
        }
      }
      .amount-money {
        input {
          width: 70%;
        }
      }
      .remarks {
        padding:0.5rem 1rem;
        p {
          font-size: 0.9rem;
          line-height: 1.5rem;
          color: #A3A3A5;
        }
      }
      button {
        background: linear-gradient(to bottom right, #884CC3 0%, #6F47B9 50%, #4D2FB5 100%);
        width: 80%;
        align-self: center;
        font-size: 1.1rem;
        padding: 0.5rem 0;
        color: #fff;
        border-radius: 20px;
        margin-top: 1rem;
      }

    }
  }
</style>
