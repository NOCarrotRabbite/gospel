<template>
  <div class="shop-box">
    <header>
      <a href="./"><i class="iconfont icon-fanhui"></i></a>
      <h5>我的店铺</h5>
      <i class="iconfont icon-jiahao"></i>
    </header>
    <main>
      <ul>
        <a href="./edit_shop">
          <li>
            <img src="@/assets/images/shop02.jpeg" width="30%"/>
            <div>唯爱小屋</div>
            <i class="iconfont icon-xiangqing"></i>
          </li>
        </a>
        <a href="./edit_shop">
          <li>
            <img src="@/assets/images/shop02.jpeg" width="30%"/>
            <div>唯爱小屋</div>
            <i class="iconfont icon-xiangqing"></i>
          </li>
        </a>
        <a href="./edit_shop">
          <li>
            <img src="@/assets/images/shop02.jpeg" width="30%"/>
            <div>唯爱小屋</div>
            <i class="iconfont icon-xiangqing"></i>
          </li>
        </a>
        <a href="./edit_shop">
          <li>
            <img src="@/assets/images/shop02.jpeg" width="30%"/>
            <div>唯爱小屋</div>
            <i class="iconfont icon-xiangqing"></i>
          </li>
        </a>
        <a href="./edit_shop">
          <li>
            <img src="@/assets/images/shop02.jpeg" width="30%"/>
            <div>唯爱小屋</div>
            <i class="iconfont icon-xiangqing"></i>
          </li>
        </a>
        <a href="./edit_shop">
          <li>
            <img src="@/assets/images/shop02.jpeg" width="30%"/>
            <div>唯爱小屋</div>
            <i class="iconfont icon-xiangqing"></i>
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
    background-color: #7261D1;
    header {
      height: 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1rem 0 1rem;
      color: #fff;
      a {
        color: #fff;
      }
    }
    main {
      flex-grow: 1;
      ul {
        padding: 0rem 1rem 1rem 1rem;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.6rem 1rem;
          background-color: #fff;
          margin-top: 1rem;
          border-radius: 5px;
          // border-bottom: 1px solid #aaa;
        }
      }
    }

  }

</style>
