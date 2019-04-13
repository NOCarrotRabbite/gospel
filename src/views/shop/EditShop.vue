<template>
  <div class="edit-shop-box">
    <header>
      <a href="./"><i class="iconfont icon-fanhui"></i></a>
      <h5>编辑店铺</h5>
      <i class="iconfont icon-weibiaoti--"></i>
    </header>
    <main>
      <form>
        <div>
          <i class="iconfont icon-xingming"></i>
          <input type="text"/>
        </div>
        <div>
          <i class="iconfont icon-mima"></i>
          <input type="password"/>
        </div>
        <button>确认</button>
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
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2.5rem;
    }
    main {
      flex-grow: 1;

    }
  }
</style>
