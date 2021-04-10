<template>
  <div class="outer">
    <!-- 总业绩 -->
    <div class="card money_card">
      <div class="title_box">
        <img class="tips_icon" src="../../assets/imgs/yellow_tips.png"/>
        <p class="title">2021年总业绩</p>
      </div>
      <p class="digit">
        <span class="pre">￥</span>
        <span>787,899</span>
        <span class="pre">万</span>
      </p>  
      <p class="month_sum">
        <span>本月营业额：</span>
        <span class="amount">￥899，898万</span>
      </p> 
    </div>
    <!-- 全球服务商总数量 -->
    <div class="card service_card">
      <div class="title_box">
        <img class="tips_icon" src="../../assets/imgs/yellow_tips.png"/>
        <p class="title">全球服务商总数量</p>
      </div>
      <p class="digit">
        <span>787,899</span>
      </p>  
      <p class="month_sum">
        <span>全球会员总数量：</span>
        <span class="amount">899，898</span>
      </p> 
    </div>
    <div class="details">
      <transition name="fade">
        <div class="spread" v-if="isServiceCardShowMore">
          <div class="spread_title">
            <p>
              <span>董事服务商：</span>
              <span class="num">20,000</span>
            </p>
            <p class="more">查看全部</p>
          </div>
          <div class="spread_item spread_top">
            <p class="spread_item_i" v-for="item in 5" :key="item">
              <span class="desc">荣誉董事：</span>
              <span class="num">20,000</span>
            </p>
          </div>
          <div class="spread_item spread_bottom">
            <p class="spread_item_i" v-for="item in 5" :key="item">
              <span class="spread_i_title">分销服务商：</span>
              <span class="num">20,000</span>
            </p>
          </div>
          <div class="arrow" @click="isServiceCardShowMore = false">
            <img class="gray_arrow" src="../../assets/imgs/gray_top_arrow.png"/>
          </div>
        </div>
        <div class="arrow_hide" @click="isServiceCardShowMore = true" v-else>
          <img class="gray_arrow" src="../../assets/imgs/gray_bottom_arrow.png"/>
        </div>
      </transition>
    </div>
    <!-- 总出货率 -->
    <div class="card stock_card">
      <div class="title_box">
        <img class="tips_icon" src="../../assets/imgs/yellow_tips.png"/>
        <p class="title">2021年总出货率</p>
      </div>
      <p class="digit">
        <span>78.9%</span>
      </p>  
      <p class="month_sum">
        <span>服务商总业绩：</span>
        <span class="amount">899，898万</span>
      </p> 
      <p class="month_sum">
        <span>服务商总出货：</span>
        <span class="amount">899，898万</span>
      </p> 
    </div>
    <!-- 本月服务商业绩排名 -->
    <div class="session_title">
      <div class="left">
        <p>本月服务商业绩排名：</p>
        <p class="check_all">查看全部</p>
      </div>
      <p class="top">TOP 10</p>
    </div>
    <div class="rank_outer">
      <MemberItem class="rank" v-for="item in 4" :key="item"></MemberItem>
    </div>
    <!-- 本月KA业绩排名 -->
    <div class="session_title">
      <div class="left">
        <p>本月KA业绩排名：</p>
        <p class="check_all">查看全部</p>
      </div>
      <p class="top">TOP 10</p>
    </div>
    <div class="rank_outer">
      <KAItem class="rank" v-for="item in 4" :key="item"></KAItem>
    </div>
  </div>
</template>
<script>
import MemberItem from "/src/components/operations/MemberItem.vue"
import KAItem from "/src/components/operations/KAItem.vue"
export default {
  components: {
    MemberItem,
    KAItem
  },
  data() {
    return {
      isServiceCardShowMore: false
    };
  },
  mounted() {
    console.log('mounted');
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/operations/public.scss";
.outer {
  padding: .24rem;
  .money_card {
    background: url(../../assets/imgs/index_bg.png) top right / 3.63rem 3.37rem no-repeat, linear-gradient(-90deg, rgba(130, 47, 246, 1), rgba(94, 22, 194, 1));
  }
  .service_card {
    background: url(../../assets/imgs/index_bg.png) top right / 3.63rem 3.37rem no-repeat, linear-gradient(90deg, rgba(45, 52, 175, 1), rgba(78, 89, 239, 1));
    margin-top: .34rem;
  }
  .stock_card {
    background: url(../../assets/imgs/index_bg.png) top right / 3.63rem 3.37rem no-repeat, linear-gradient(-90deg, rgba(0, 211, 242, 1), rgba(0, 167, 236, 1));
    height: 3.83rem;
    margin-top: .34rem;
  }
  .session_title {
    color: #000;
    font-size: .32rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: .4rem;
    .left {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .check_all {
      color: rgba(176, 172, 193, 1);
      font-size: .28rem;
      font-weight: 400;
    }
    .top {
      color: rgba(0, 81, 211, 1);
      font-size: .88rem;
      margin-top: .2rem;
    }
  }
  .rank_outer {
    border-radius: .1rem;
    overflow: hidden;
    .rank {
      background-color: rgba(242, 243, 247, 1);
      &:nth-of-type(even) {
        background-color: rgba(222, 225, 234, 1);
      }
    }
  }
  .details {
    background-color: rgba(242, 243, 247, 1);
    width: 100%;
    padding: .3rem .2rem .1rem;
    box-sizing: border-box;
    border-radius: 0 0 .2rem .2rem;
    .spread {
      font-size: .28rem;
      .spread_title {
        color: rgba(11, 9, 30, 1);
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .more {
          color: rgba(176, 172, 193, 1);
        }
      }
      .num {
        color: rgba(1, 80, 211, 1);
        font-weight: 600;
      }
      .spread_item {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .desc {
          color: rgba(176, 172, 193, 1);
        }
        .spread_item_i {
          width: 50%;
          padding-top: .3rem;
        }
        .spread_i_title {
          color: rgba(11, 9, 30, 1);
          font-weight: 600;
        }
      }
      .spread_top {
        padding-bottom: .3rem;
      }
      .spread_bottom {
        border-top: .01rem solid rgba(222, 225, 234, 1);
        border-bottom: .01rem solid rgba(222, 225, 234, 1);
        padding-bottom: .3rem;
      }
    }
    .arrow {
      text-align: center;
      padding: .2rem;
    }
    .arrow_hide {
      text-align: center;
      height: .4rem;
      position: relative;
      overflow: auto;
      .gray_arrow {
        position: absolute;
      }
    }
  }
  .gray_arrow {
    width: .32rem;
    height: .18rem;
  }
}
</style>


