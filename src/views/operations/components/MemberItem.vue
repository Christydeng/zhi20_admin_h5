<template>
  <div class="rank_item">
    <div class="left">
      <img src="../imgs/top_third.png" class="avatar" />
      <img src="../imgs/top_first.png" class="rank_icon" />
    </div>
    <div class="right">
      <div>
        <p class="name_box">
          <span class="name">才日红</span>
          <span class="position">普通董事</span>
          <span class="num">8080</span>
        </p>
      </div>
      <div class="amount">
        <div class="item">
          <p class="desc">订货金额</p>
          <p>898,809,809.00</p>
        </div>
        <div class="item">
          <p class="desc">订货金额</p>
          <p>898,809,809.00</p>
        </div>
        <div class="item">
          <p class="desc">订货金额</p>
          <p>898,809,809.00</p>
        </div>
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
  font-size: .3rem;
  padding: .3rem .2rem;
  .left {
    position: relative;
    .avatar {
      width: 1.46rem;
      height: 1.46rem;
    }
    .rank_icon {
      width: .38rem;
      height: .38rem;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .right {
    margin-left: .4rem;
    .name_box {
      display: flex;
      align-items: center;
      .name {
        color: rgba(10, 9, 29, 1);
        font-size: .32rem;
        font-weight: 600;
        margin-right: .2rem;
      }
      .position {
        background: linear-gradient(90deg, #43659E, #A9C3ED);
        border-radius: .1rem 0 .1rem 0;
        color: #fff;
        font-size: .22rem;
        padding: .04rem .12rem;
        margin-right: .1rem;
      }
      .num {
        color: rgba(251, 60, 60, 1);
        font-size: .12rem;
      }
    }
    .amount {
      display: flex;
      flex-wrap: wrap;
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
}
</style>


