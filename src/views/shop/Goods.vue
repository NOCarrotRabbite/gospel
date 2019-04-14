<template>
  <div class="goods-box">
    <header>
      <a href="./my_shop"><i class="iconfont icon-fanhui"></i></a>
      <h4>店铺详情</h4>
      <a href="./edit_shop"><i class="iconfont icon-jiahao"></i></a>
    </header>
    <div class="shop-info">
      <div class="shop-logo">
        <img src="@/assets/images/shop07.jpeg" width="100%"/>
      </div>
      <div class="introduce">
        <h4>唯爱小屋</h4>
        <p>店铺介绍店铺描述店铺描述店铺介绍店铺描述店铺描述店铺</p>
      </div>
    </div>
    <main>
      <div class="goods-title">
        <h5>店铺商品类目</h5>
      </div>
      <div class="goods-grid">
        <div class="goods-item">
          <h3>￥20,000.00</h3>
          <h5>商品名称</h5>
          <p>这是商品描述</p>
          <div class="action-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shanchu2"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bianji"></use>
            </svg>
          </div>
        </div>
        <div class="goods-item">
          <h3>￥20,000.00</h3>
          <h5>商品名称</h5>
          <p>这是商品描述</p>
          <div class="action-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shanchu2"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bianji"></use>
            </svg>
          </div>
        </div>
        <div class="goods-item">
          <h3>￥20,000.00</h3>
          <h5>商品名称</h5>
          <p>这是商品描述</p>
          <div class="action-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shanchu2"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bianji"></use>
            </svg>
          </div>
        </div>
        <div class="goods-item">
          <h3>￥20,000.00</h3>
          <h5>商品名称</h5>
          <p>这是商品描述</p>
          <div class="action-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shanchu2"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bianji"></use>
            </svg>
          </div>
        </div>
        <div class="goods-item">
          <h3>￥20,000.00</h3>
          <h5>商品名称</h5>
          <p>这是商品描述</p>
          <div class="action-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shanchu2"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bianji"></use>
            </svg>
          </div>
        </div>
        <div class="goods-item">
          <h3>￥20,000.00</h3>
          <h5>商品名称</h5>
          <p>这是商品描述</p>
          <div class="action-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shanchu2"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bianji"></use>
            </svg>
          </div>
        </div>
        <div class="goods-item">
          <h3>￥20,000.00</h3>
          <h5>商品名称</h5>
          <p>这是商品描述</p>
          <div class="action-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shanchu2"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bianji"></use>
            </svg>
          </div>
        </div>
        <div class="goods-item">
          <h3>￥20,000.00</h3>
          <h5>商品名称</h5>
          <p>这是商品描述</p>
          <div class="action-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shanchu2"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bianji"></use>
            </svg>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {};
</script>
<style lang="scss" scoped>
  .goods-box {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    header {
      min-height: 7rem;
      display: flex;
      justify-content: space-between;
      // align-items: center;
      padding: 1.5rem 1rem 0.5rem 1rem;
      color: #fff;
      background-color: #7261D1;
      z-index: 98;
      i {
        font-size: 1.3rem;
      }
      a {
        color: #fff;
      }
    }
    .shop-info {
      align-self: center;
      z-index: 99;
      min-height: 5.5rem;
      margin-top: -4.5rem;
      border-radius: 5px;
      background-color: #fff;
      width: 90%;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      overflow: hidden;
      box-shadow: 0rem 0.16rem 5px #E0E2E6;
      .shop-logo {
        width: 40%;
        min-width: 40%;
        align-self: flex-start;
        img {
          border-radius: 5px;
          max-width: 100%;
        }
      }
      .introduce {
        flex-grow: 1;
        padding: 0 1rem;
        line-height: 1.3rem;
        h4 {
          color: #6C6498;
        }
        p {
          font-size: 0.7rem;
          color: #C9CBCD;
        }
        align-self: flex-start;
      }
    }
    main {
      flex-grow: 1;
      overflow: scroll;
      width: 97%;
      align-self: center;
      // padding: 0 0.5rem;
      .goods-title {
        padding: 1rem 0.25rem;
        color: #6C6498;
      }
      .goods-grid {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .goods-item {
          background-color: #fff;
          padding: 0.5rem;
          border-radius: 5px;
          line-height: 1.3rem;
          flex-grow: 1;
          margin: 0 0.25rem 0.5rem 0.25rem;
          h3 {
            color: #6C6498;
          }
          h5 {
            color: #888C8D;
          }
          p {
            font-size: 0.7rem;
            color: #C9CBCD;
          }
          .action-icon {
            display: flex;
            justify-content: flex-end;
            svg {
              font-size: 1.3rem;
              padding: 0 0.25rem 0 0;
            }
          }
        }

      }
    }

  }

</style>
