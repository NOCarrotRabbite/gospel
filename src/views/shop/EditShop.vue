<template>
  <div class="edit-shop-box">
    <header>
      <a href="./my_shop"><i class="iconfont icon-fanhui"></i></a>
      <h4>编辑店铺</h4>
      <i class="iconfont icon-weibiaoti--"></i>
    </header>
    <main>
      <form>
        <div class="input-box">
          <div class="item-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kuanchuangyidianzishangwutubiaoshiliangsucai--"></use>
            </svg>
            <input type="text" placeholder="店铺名称"/>
          </div>
          <div class="item-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fengfudejiekou"></use>
            </svg>
            <input type="text" placeholder="商家服务接口"/>
          </div>
          <div class="item-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wangzhi"></use>
            </svg>
            <input type="text" placeholder="充值成功跳转地址"/>
          </div>
          <div class="item-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gerenzhongxin"></use>
            </svg>
            <textarea placeholder="店铺描述"></textarea>
          </div>
        </div>
        <button>确 认</button>
      </form>
    </main>
  </div>
</template>
<script>
  export default {};
</script>
<style lang="scss" scoped>
  .edit-shop-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #7261D1;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2.5rem;
      color: #fff;
      padding: 1rem 2rem;
      i {
        font-size: 1.3rem;
      }
      a {
        color: #fff;
      }
    }
    main {
      flex-grow: 1;
      display: flex;
      form {
        width: 100%;
        text-align: center;
        padding: 2rem 2rem;
        overflow: scroll;
        .input-box {
          text-align: center;
          background-color: #fff;
          border-radius: 5px;
          padding: 2rem 0.5rem;
          .item-box {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            input, textarea {
              background-color: #F4F6FA;
              width: 80%;
              border-radius: 5px;
              font-size: 0.6rem;
            }
            input {
              height: 2.3rem;
              line-height: 2.3rem;
              margin-bottom: 1rem;
              padding: 0 0.5rem;
            }
            textarea {
              height: 4.4rem;
              padding: 0.5rem 0.5rem;
            }
            svg {
              font-size: 1.8rem;
              padding: 0 0.3rem 0 0;
            }
          }
        }
        button {
          margin-top: 3rem;
          height: 2.8rem;
          width: 80%;
          background-color: #4738BC;
          color: #fff;
          border-radius: 5rem;
          font-size: 1.1rem;
        }
      }
    }
  }
</style>
