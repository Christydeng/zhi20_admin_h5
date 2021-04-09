<template>
  <div class="rank_item">
    <div class="left">
      <img src="../../assets/imgs/top_first.png" class="rank_icon" />
      <span class="name">马蒂黛娜</span>
      <span>10</span>
    </div>
    <div class="amount">
      <div class="item">
        <p class="desc">董事订货金额</p>
        <p>898,809</p>
      </div>
      <div class="item">
        <p class="desc">4月新增董事</p>
        <p>898,809</p>
      </div>
      <div class="item">
        <p class="desc">3月底董事数 / 上年同期</p>
        <p>898,809</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.rank_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .3rem;
  padding: .3rem .2rem;
  .left {
    display: flex;
    align-items: center;
    margin-right: .4rem;
    .name {
      color: rgba(10, 9, 29, 1);
      font-size: .32rem;
      font-weight: 600;
      margin-left: .1rem;
      margin-right: .1rem;
    }
  }
  .rank_icon {
    width: .38rem;
    height: .38rem;
  }
  .amount {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin-top: .1rem;
    .item {
      color: rgba(10, 9, 29, 1);
      font-size: .28rem;
      font-weight: 600;
      padding: .06rem .4rem .06rem 0;
      .desc {
        color: rgba(176, 172, 193, 1);
        font-size: .22rem;
        font-weight: 500;
        margin-bottom: .04rem;
      }
    }
  }
}
</style>


