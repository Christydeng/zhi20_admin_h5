<template>
  <div class="outer">
    <p>颜值变现系统</p>
    <div class="user">
      <img :src="matchInfo.header_url" class="header-url" />
      <div>
        <p>姓名: {{matchInfo.user_name}}</p>
        <p>性别: {{matchInfo.sex}}</p>
        <p>年龄: {{matchInfo.age}}</p>
        <p>是否戴口罩: {{matchInfo.masks}}</p>
        <p>是否戴帽子: {{matchInfo.hat}}</p>
      </div>
    </div>
    <div>
      <p>你的颜值变现成功!</p>
      <p>魅力值{{matchInfo.point_beauty}}分!今日排行第2位</p>
    </div>
    <div>
      <p>你的魅力值堪比: {{matchInfo.famouse && matchInfo.famouse.user_name}}</p>
      <div class="user">
        <img :src="matchInfo.header_url" />
        <div>
          <p>明星简介</p>
          <p>{{matchInfo.famouse && matchInfo.famouse.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { $http } from "@/utils/request.js"
import { apiUrls }  from "@/utils/config.js"
export default {
  data() {
    return {
      matchInfo: ''
    }
  },
  created() {
    console.log("this.$route:", this.$route);
    this.submintData();
  },
  methods: {
    submintData() {
      $http({
        method: 'post',
        url: apiUrls.commitFace.url,
        data: {
          user_name: this.$route.query.username,
          header_url: this.$route.query.imageUrl
        }
      }).then((res) => {
        console.log('res.data: ', res.data);
        this.matchInfo = res.data;
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.outer {
  font-size: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .user {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-url {

  }
}
</style>

