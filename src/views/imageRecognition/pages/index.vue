<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]">
      </van-field>
      <van-field name="uploader" label="头像上传">
        <template #input>
          <van-uploader v-model="fileList" multiple :max-count="1" :after-read="afterFileRead"/>
        </template>
      </van-field>
      <van-button round block type="info" native-type="submit">提交</van-button>
    </van-form>
  </div>
</template>
<script>
import { Uploader, Form, Field, Button  } from "vant";
import {$http} from "@/utils/request.js"
import {apiUrls}  from "@/utils/config.js"
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
    };
  },
  created() {
    this.getPolicy();
  },
  methods: {
    afterFileRead(file, detail) {
      console.log('file: ', file.content);
      console.log('detail: ', detail);
    },
    async getPolicy() {
      console.log(0)
      let res = await $http({
        method: 'get',
        url: apiUrls.ossPolicy.url
      });
      console.log('res getPolicy: ', res);
    },
    async onSubmit() {
      $http({
        url: '',
        method: 'get',
        url: 'http://testv3.sahhealthgroup.com/api/face/ossPolicy'
      })
    }
  }
};
</script>
