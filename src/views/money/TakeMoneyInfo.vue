<template>
  <div class="take-money-box">
    <header>
      <a href="./"><i class="iconfont icon-fanhui"></i></a>
      <h4>我的提款</h4>
      <i class="iconfont icon-canshupeizhi"></i>
    </header>
    <main>
      <div class="take-money">
        <input class="money" type="text" placeholder="请输入提款金额，至少大于3000"/>
        <div class="pay-type">
          <label><input type="radio" name="payType" value="1"/>支付宝</label>
          <label><input type="radio" name="payType" value="2"/>银行卡</label>
        </div>
        <button>提款</button>
      </div>
      <div class="take-money-info">
        <h5>提款记录</h5>
        <div class="info-list">
          <span class="take-time">2019-4-15 15:36:02</span>
          <span class="take-num">- ￥3000.00</span>
        </div>
        <div class="info-list">
          <span class="take-time">2019-4-15 15:36:02</span>
          <span class="take-num">- ￥3000.00</span>
        </div>
        <div class="info-list">
          <span class="take-time">2019-4-15 15:36:02</span>
          <span class="take-num">- ￥3000.00</span>
        </div>
        <div class="info-list">
          <span class="take-time">2019-4-15 15:36:02</span>
          <span class="take-num">- ￥3000.00</span>
        </div>
        <div class="info-list">
          <span class="take-time">2019-4-15 15:36:02</span>
          <span class="take-num">- ￥3000.00</span>
        </div>
        <div class="info-list">
          <span class="take-time">2019-4-15 15:36:02</span>
          <span class="take-num">- ￥3000.00</span>
        </div>
        <div class="info-list">
          <span class="take-time">2019-4-15 15:36:02</span>
          <span class="take-num">- ￥3000.00</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {};
</script>
<style lang="scss" scoped>
  .take-money-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F2F3F7;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      //height: 2.5rem;
      color: #4D2FB5;
      padding: 1.5rem 1rem 0 1rem;
      h4 {
        flex-grow: 1;
        display: flex;
        justify-content: center;
      }
      i {
         font-size: 1.3rem;
       }
      a {
         color: #4D2FB5;
      }
    }
    main {
      overflow: scroll;
      box-sizing: border-box;
      flex-grow: 1;
      padding: 1.5rem 1rem 1rem 1rem;
      .take-money {
        background: linear-gradient(to bottom right, #884CC3 0%, #6F47B9 50%, #4D2FB5 100%);
        text-align: center;
        padding: 4rem 0;
        border-radius: 10px;
        .money {
          height: 2rem;
          width: 80%;
          border-radius: 5px;
        }
        button {
          height: 2.8rem;
          width: 80%;
          background-color: #fff;
          // color: #7261D1;
          color: #16191C;
          border-radius: 5rem;
          font-size: 1rem;
          font-weight: 600;
        }
      }
      .take-money-info {
        padding: 1rem 0;
        h5 {
          color: #4C5660;
          padding-bottom: 0.5rem;
        }
        .info-list {
          background-color: #fff;
          margin-top: 0.5rem;
          padding: 0.5rem 0.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 10px;
          .take-time {
            font-size: 0.8rem;
            color: #A4AAAF;
          }
          .take-num {
            color: #6A59CE;
          }
        }
      }
    }
  }
</style>
