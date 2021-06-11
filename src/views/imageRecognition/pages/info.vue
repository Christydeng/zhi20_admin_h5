<template>
  <div class="outer" v-if="isCheckSuccessful">
    <p class="title">颜值变现系统</p>
    <div class="user user-info">
      <img :src="matchInfo.header_url" class="header_url" />
      <div>
        <p>姓名: {{matchInfo.user_name}}</p>
        <p>性别: {{matchInfo.sex}}</p>
        <p>年龄: {{matchInfo.age}}</p>
        <p>是否戴口罩: {{matchInfo.masks}}</p>
        <p>是否戴帽子: {{matchInfo.hat}}</p>
      </div>
    </div>
    <div class="title">
      <p>你的颜值变现成功!</p>
      <p>魅力值{{matchInfo.point_beauty}}分!今日排行第{{matchInfo.order_num}}位</p>
    </div>
    <div class="result">
      <p class="title_sub">你的魅力值堪比: {{matchInfo.famouse && matchInfo.famouse.user_name}}</p>
      <div class="user">
        <img :src="matchInfo.famouse && matchInfo.famouse.header_url" class="header_url" />
        <div class="desc">
          <p>明星简介:</p>
          <p>{{matchInfo.famouse && matchInfo.famouse.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { $http } from "@/utils/request.js"
import { apiUrls }  from "@/utils/config.js"
import { Toast } from 'vant';

export default {
  components: {
    [Toast.name]: Toast,
  },
  data() {
    return {
      matchInfo: {},
      isCheckSuccessful: false
    }
  },
  created() {
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
        console.log('res', res);
        if (res.code === 1) {
          console.log("this.$router:", this.$router);
          Toast(res.msg + ',请重新上传');
          this.$router.back();
          return;
        }
        this.matchInfo = res.data;
        this.isCheckSuccessful = true;
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.outer {
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  box-sizing: border-box;
  .title {
    font-weight: 600;
    margin: 30px 0;
  }
  .user-info {
    padding: 10px;
  }
  .result {
    background-color: #FFFBF3;
    border-radius: 10px;
    font-size: 16px;
    padding: 10px;
    .title_sub {
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
  .user {
    background-color: #FFFBF3;
    border-radius: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  .desc {
    text-align: justify;
    padding: 10px;
  }
  .header_url {
    width: 120px;
    height: auto;
  }
}
</style>

