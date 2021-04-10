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
    </div>
    <!-- 分割线 -->
    <div class="split_line"></div>
    <div>
      <div @click="isShowDatePicker = true">
        <p>{{currentDateStr}}</p>
      </div>
      <van-popup :show="isShowDatePicker" position="bottom" :style="{ height: '40%' }">
        <van-datetime-picker
          v-model="currentDate"
          :type="queryTypeList[queryType].type"
          :title="queryTypeList[queryType].title"
          @confirm="dateConfirm"/>
      </van-popup>
    </div>
    <div id="main" style="width: 7rem; height: 5rem;"></div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { DatetimePicker, Popup } from 'vant';
import { formatTime } from "../../utils/date.js";
import {
    GridComponent
} from 'echarts/components';
import {
    BarChart
} from 'echarts/charts';
import {
    CanvasRenderer
} from 'echarts/renderers';



export default {
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup
  },
  data() {
    return {
      isShowDatePicker: false,
      //1年 2年月 3年月日
      queryType: 2,
      queryTypeList: {
        1: {
          type: 'year',
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
    this.$root.echarts.use(
      [GridComponent, BarChart, CanvasRenderer]
    );
    let myChart = this.$root.echarts.init(document.getElementById('main'));
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
  methods: {
    dateConfirm(value) {
      console.log('value: ', formatTime(value));
      this.isShowDatePicker = false;
      this.currentDateStr = formatTime(value)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/operations/public.scss";
.outer {
  padding: .24rem;
  .money_card {
    background: url(../../assets/imgs/index_bg.png) top right / 3.63rem 3.37rem no-repeat, linear-gradient(-90deg, rgba(130, 47, 246, 1), rgba(94, 22, 194, 1));
    height: 2.31rem;
    .digit {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
}

</style>


