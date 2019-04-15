<template>
  <div class="shop-box">
    <header>
      <a href="./"><i class="iconfont icon-fanhui"></i></a>
      <h4>我的店铺</h4>
      <a href="./edit_shop"><i class="iconfont icon-jiahao"></i></a>
    </header>
    <main>
      <ul>
        <a href="./goods">
          <li>
            <img src="@/assets/images/shop08.jpg" width="30%"/>
            <div class="introduce">
              <h5>唯爱小屋</h5>
              <p>这是商铺描述这是商铺描述这是商铺描述这是商铺描述这是商铺描述</p>
            </div>
            <div class="detail">
              <a href="./edit_shop">
                <i class="iconfont icon-xiangqing2"></i>
              </a>
              <i class="iconfont icon-xiangqing"></i>
            </div>
          </li>
        </a>
        <a href="./goods">
          <li>
            <img src="@/assets/images/shop08.jpg" width="30%"/>
            <div class="introduce">
              <h5>唯爱小屋</h5>
              <p>这是商铺描述这是商铺描述这是商铺描述这是商铺描述这是商铺描述</p>
            </div>
            <div class="detail">
              <i class="iconfont icon-xiangqing2"></i>
              <i class="iconfont icon-xiangqing"></i>
            </div>
          </li>
        </a>
        <a href="./goods">
          <li>
            <img src="@/assets/images/shop08.jpg" width="30%"/>
            <div class="introduce">
              <h5>唯爱小屋</h5>
              <p>这是商铺描述这是商铺描述这是商铺描述这是商铺描述这是商铺描述</p>
            </div>
            <div class="detail">
              <i class="iconfont icon-xiangqing2"></i>
              <i class="iconfont icon-xiangqing"></i>
            </div>
          </li>
        </a>
        <a href="./goods">
          <li>
            <img src="@/assets/images/shop08.jpg" width="30%"/>
            <div class="introduce">
              <h5>唯爱小屋</h5>
              <p>这是商铺描述这是商铺描述这是商铺描述这是商铺描述这是商铺描述</p>
            </div>
            <div class="detail">
              <i class="iconfont icon-xiangqing2"></i>
              <i class="iconfont icon-xiangqing"></i>
            </div>
          </li>
        </a>
        <a href="./goods">
          <li>
            <img src="@/assets/images/shop08.jpg" width="30%"/>
            <div class="introduce">
              <h5>唯爱小屋</h5>
              <p>这是商铺描述这是商铺描述这是商铺描述这是商铺描述这是商铺描述</p>
            </div>
            <div class="detail">
              <i class="iconfont icon-xiangqing2"></i>
              <i class="iconfont icon-xiangqing"></i>
            </div>
          </li>
        </a>
        <a href="./goods">
          <li>
            <img src="@/assets/images/shop08.jpg" width="30%"/>
            <div class="introduce">
              <h5>唯爱小屋</h5>
              <p>这是商铺描述这是商铺描述这是商铺描述这是商铺描述这是商铺描述</p>
            </div>
            <div class="detail">
              <i class="iconfont icon-xiangqing2"></i>
              <i class="iconfont icon-xiangqing"></i>
            </div>
          </li>
        </a>
        <a href="./goods">
          <li>
            <img src="@/assets/images/shop08.jpg" width="30%"/>
            <div class="introduce">
              <h5>唯爱小屋</h5>
              <p>这是商铺描述这是商铺描述这是商铺描述这是商铺描述这是商铺描述</p>
            </div>
            <div class="detail">
              <i class="iconfont icon-xiangqing2"></i>
              <i class="iconfont icon-xiangqing"></i>
            </div>
          </li>
        </a>
      </ul>
    </main>
  </div>
</template>

<script>
  export default {};
</script>
<style lang="scss" scoped>
  .shop-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    header {
      min-height: 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.7rem 1rem 0.7rem 1rem;
      color: #fff;
      background-color: #7261D1;
      i {
        font-size: 1.3rem;
      }
      a {
        color: #fff;
      }
    }
    main {
      flex-grow: 1;
      background-color: #F2F3F7;
      overflow: scroll;
      ul {
        padding: 0rem 0.5rem 1rem 0.5rem;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0.5rem;
          background-color: #fff;
          margin-top: 1rem;
          border-radius: 5px;
          box-shadow: 0.12rem 0.12rem #E0E2E6;
          img {
            border-radius: 5px;
          }
          .introduce {
            flex-grow: 1;
            padding: 0 1rem;
            line-height: 1.3rem;
            h5 {
              color: #877FB0;
            }
            p {
              font-size: 0.7rem;
              color: #C9CBCD;
            }
            align-self: flex-start;
          }
          .detail {
            align-self: flex-start;
            .icon-xiangqing {
              display: inline-block;
              margin-top: 0.8rem;
              font-size: 0.9rem;
            }
            a {
              .icon-xiangqing2 {
                font-size: 0.9rem;
                color: #877FB0;
              }
            }
          }

        }
      }
    }

  }

</style>
