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
    <van-tabs :active="activeName" @click="changeTab">
      <van-tab v-for="item in tabList" :key="item.name" 
        :title="item.title" :name="item.name">
        <component :is="currentTabComponent"></component>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Icon, Tab, Tabs  } from "vant";
import Dashboard from "/src/components/operations/Dashboard.vue"
import Customer from "/src/components/operations/Customer.vue"
import Performance from "/src/components/operations/Performance.vue"
import Members from "/src/components/operations/Members.vue"
import Stock from "/src/components/operations/Stock.vue"
import Deliver from "/src/components/operations/Deliver.vue"
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
      activeName: 'dashboard',
      currentTabComponent: 'Dashboard'
    }
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    },
    onClickRight() {
      console.log('搜索');
    },
    changeTab(name, title) {
      this.currentTabComponent = name;
    }
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