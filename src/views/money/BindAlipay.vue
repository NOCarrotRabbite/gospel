<template>
  <div class="bind-alipay-box">
    <header>
      <a href="./take_money"><i class="iconfont icon-fanhui"></i></a>
      <h4>绑定支付宝</h4>
    </header>
    <main>
      <div class="logo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhifubao"></use>
        </svg>
      </div>
      <div class="name">
        <p>收益提现到此支付宝:</p>
        <input placeholder="请输入您的真实姓名"/>
      </div>
      <div class="account">
        <input placeholder="请输入您的支付宝账号"/>
        <p>注：您的收益将通过转账形式提现到此支付宝，因错误绑定账号或账号遗失造成的经济损失，概不负责</p>
      </div>
      <button>确认</button>
    </main>
  </div>
</template>

<script>
  export default {};
</script>
<style lang="scss" scoped>
  .bind-alipay-box {
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

      //padding: 1.5rem 1rem 1rem 1rem;
      .logo {
        text-align: center;
        .icon {
          font-size: 4.5rem;
          color: #7948B9;
        }
      }
      .name, .account {
        input {
          width: 100%;
          height: 2.5rem;
          margin-bottom: 0.5rem;
          padding: 0 1rem;
        }
        p {
          padding: 0 1rem;
          font-size: 0.9rem;
          //color: #BABAC4;
          line-height: 1.5rem;
          color: #A3A3A5;
          margin-bottom: 0.2rem;
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
        margin-top: 1.5rem;
      }
    }
  }
</style>
