<template>
  <div>
    <van-nav-bar title="中食指挥室" @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" size="18" color="rgba(10, 9, 29, 1)" />
      </template>
      <template #right>
        <van-icon name="search" size="18" color="rgba(10, 9, 29, 1)" />
      </template>
    </van-nav-bar>
    <van-tabs>
      <van-tab v-for="item in tabList" :key="item.name" 
        :title="item.title" :name="item.name">
        <component :is="item.name"></component>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Icon, Tab, Tabs  } from "vant";
import Dashboard from "../components/Dashboard.vue"
import Customer from "../components/Customer.vue"
import Performance from "../components/Performance.vue"
import Members from "../components/Members.vue"
import Stock from "../components/Stock.vue"
import Deliver from "../components/Deliver.vue"
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    Dashboard,
    Customer,
    Performance,
    Members,
    Stock,
    Deliver
  },
  data() {
    return {
      tabList: [
        {name: 'Dashboard', title: '总览'},
        {name: 'Performance', title: '业绩'},
        {name: 'Members', title: '会员'},
        {name: 'Customer', title: '大客户'},
        {name: 'Deliver', title: '出货'},
        {name: 'Stock', title: '进货'},
      ],
    }
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    },
    onClickRight() {
      console.log('搜索');
    },
  },
}
</script>

<style lang="scss">
.van-tabs__nav--complete {
  padding-left: 0;
  padding-right: 0;
}
.van-tabs__nav--line {
  padding-bottom: .16rem;
}
.van-tabs__nav {
  justify-content: space-around;
}
.van-tabs__line {
  height: .06rem;
}
</style>