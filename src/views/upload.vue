<template>
  <div class="outer">
    <div class="title">
      <p>颜值变现</p>
      <p>看看你和那个明星更匹配</p>
    </div>
    <div class="inner">
      <van-form @submit="onSubmit">
        <van-field name="uploader" label="头像上传">
          <template #input>
            <van-uploader v-model="fileList" multiple :max-count="1"/>
          </template>
        </van-field>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]">
        </van-field>
        <van-button style="margin-top: 60px" round block type="primary" native-type="submit">提交</van-button>
      </van-form>
    </div>
  </div>
</template>
<script>
import { Uploader, Form, Field, Button  } from "vant";
import { $http } from "@/utils/request.js"
import { apiUrls }  from "@/utils/config.js"
export default {
  components: {
    [Uploader.name]: Uploader,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
  },
  data() {
    return {
      username: '',
      fileList: [],
      policyObj: '',
      imageUrl: ''
    };
  },
  created() {
    this.getPolicy();
  },
  methods: {
    getPolicy() {
      $http({
        method: 'get',
        url: apiUrls.ossPolicy.url
      }).then((res) => {
        this.policyObj = res.data;
      })
    },
    onSubmit() {
      let {
        policyObj, 
        fileList
      } = this;
      let resources = [];
      fileList.map(i => {
        let filePath = i.file;  //图片资源
        let imgType = i.file.type.split('/')[1];  //图片类型
        let key = new Date().getTime() + Math.floor(Math.random() * 150) + '.' + imgType;
        let request = new FormData();
        request.append('OSSAccessKeyId', policyObj.accessid);// Bucket 拥有者的Access Key Id。
        request.append('policy', policyObj.policy);// policy规定了请求的表单域的合法性
        request.append('signature', policyObj.signature);// 根据Access Key Secret和policy计算的签名信息，OSS验证该签名信息从而验证该Post请求的合法性
        request.append('key', policyObj.dir + key);// 文件名字，可设置路径
        request.append('success_action_status', 200);// 让服务端返回200,不然，默认会返回204
        request.append('file', filePath);// 需要上传的文件 file
        $http({
          method: 'post',
          url: policyObj.host,
          data: request,
        }).then((res) => {
          this.imageUrl = policyObj.host + '/' + policyObj.dir + key
          this.toNext();
        })
      })
    },
    toNext() {
      this.$router.push(`/imageRecognition/info?username=${this.username}&imageUrl=${this.imageUrl}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.outer {
  font-size: 22px;
  padding: 40px 0;
  .title {
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
  }
  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

