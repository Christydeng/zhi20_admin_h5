<template>
  <div class="outer">
    <!-- 总业绩 -->
    <div class="card money_card">
      <div class="title_box">
        <img class="tips_icon" src="../imgs/tips_yellow.png"/>
        <p class="title">2021年总业绩</p>
      </div>
      <p class="digit">
        <span class="pre">￥</span>
        <span>787,899</span>
        <span class="pre">万</span>
      </p>
    </div>
    <!-- 分割线 -->
    <div class="split_line"></div>
    <div>
      <div class="date_box">
        <p @click="isShowDatePicker = true">{{currentDateStr}}</p>
        <p class="date_right">
          <span class="date_item" v-for="item in dataList" :key="item.type"
            :class="{'date_item_act':queryType === item.type}" @click="changeDateType(item.type)">{{item.name}}</span>
        </p>
      </div>
      <van-popup :show="isShowDatePicker" position="bottom" :style="{ height: '40%' }">
        <van-datetime-picker
          v-model="currentDate"
          :type="queryTypeList[queryType].type"
          :title="queryTypeList[queryType].title"
          @confirm="dateConfirm"/>
      </van-popup>
      <!-- 总营业统计 -->
      <div>
        <div>
          <img class="tips_icon" src="../imgs/tips_orange.png"/>
          <span>营业金额</span>
          <span>123%</span>
          <img class="tips_icon" src="../imgs/icon_up.png"/>
          <!-- <img class="tips_icon" src="../imgs/icon_down.png"/> -->
        </div>
        <div>
          <span>￥</span>
          <span>2,232,343.23万</span>
        </div>
        <div>
          <img class="tips_icon" src="../imgs/tips_orange.png"/>
          <span>退货金额</span>
          <span>123%</span>
          <!-- <img class="tips_icon" src="../imgs/icon_up.png"/> -->
          <img class="tips_icon" src="../imgs/icon_down.png"/>
        </div>
        <div>
          <span>￥</span>
          <span>2,232,343.23万</span>
        </div>
      </div>
      <!-- 商品营业统计折现图 -->
      <div>
        <div class="card money_card">
          <div class="title_box">
            <p class="title">脂20营养固体饮料</p>
          </div>
          <p class="">
            <span class="pre">营业金额：</span>
            <span>787,899</span>
            <span class="pre">万</span>
          </p>  
          <p class="month_sum">
            <span>本月营业额：</span>
            <span class="amount">￥899，898万</span>
          </p> 
        </div>
      </div>
    </div>
    <div id="myCharts" style="width: 7rem; height: 5rem;"></div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { DatetimePicker, Popup } from 'vant';
import { formatTime } from "@/utils/date.js";
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use(
  [GridComponent, BarChart, CanvasRenderer]
);
export default {
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup
  },
  data() {
    return {
      isShowDatePicker: false,
      queryType: 2,
      dataList: [
        { type: 1, name: '日' },
        { type: 2, name: '月' },
        { type: 3, name: '年' }
      ],
      queryTypeList: {
        1: {
          type: 'date',
          title: '请选择年份'
        },
        2: {
          type: 'year-month',
          title: '请选择月份',
        },
        3: {
          type: 'date',
          title: '请选择时间'
        }
      },
      currentDate: ref(new Date(2021, 10, 17)),
      currentDateStr: formatTime(new Date())
    };
  },
  mounted() {
    let chartDom = document.getElementById('myCharts');
    let myChart = echarts.init(chartDom);
    let option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    };
    myChart.setOption(option);
  },
  unmounted() {
    console.log('Performance unmounted');
  },
  deactivate() {
    console.log('Performance deactivate : ');
  },
  methods: {
    changeDateType(type) {
      this.queryType = type;
    },
    dateConfirm(value) {
      this.isShowDatePicker = false;
      this.currentDateStr = formatTime(value)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/public.scss";
.outer {
  padding: .24rem;
  .money_card {
    background: url(../imgs/index_bg.png) top right / 3.63rem 3.37rem no-repeat, linear-gradient(-90deg, rgba(130, 47, 246, 1), rgba(94, 22, 194, 1));
    height: 2.31rem;
    .digit {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
  .date_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .34rem;
    font-weight: 600;
    .date_item {
      background: #F2F3F7;
      color: rgba(171, 170, 197, 1);
      font-size: .32rem;
      border-radius: 50%;
      padding: .26rem;
      margin-left: .3rem;
    }
    .date_item_act {
      background: linear-gradient(-90deg, #4064F4, #5AB3FF);
      color: #fff;
    }
  }
}

</style>


