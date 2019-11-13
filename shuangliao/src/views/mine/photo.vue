<template>
  <div class="photo">
    <Test>我的相册</Test>
    <div class="upload">
      <van-uploader :after-read="afterRead1" v-model="fileList1" :max-count="3">
        <p class="photoP">
          <span class="span1">
            <van-icon name="plus" color="black" />
          </span>
          <span class="span2">上传照片</span>
        </p>
      </van-uploader>
      <van-uploader :after-read="afterRead2" v-model="fileList2" :max-count="1">
        <p class="photoP">
          <span class="span1">
            <van-icon name="plus" color="black" />
          </span>
          <span class="span2">形象视频</span>
        </p>
      </van-uploader>
    </div>
  </div>
</template>

<script>
import eventbus from "../../eventbus";
import Test from "../../components/Test";
export default {
  name: "photo",
  data() {
    return {
      fileList1: [],
      fileList2: []
    };
  },
  methods: {
    afterRead1(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.fileList1.push({ url: "file.content", isImage: true });
    },
    afterRead2(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.fileList2.push({ url: "file.content", isImage: true });
    }
  },
  mounted() {
    eventbus.$emit("showFooter", false);
  },
  computed: {},
  components: {
    Test
  }
};
</script>

<style scoped>
.upload {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.photoP {
  width: 80px;
  height: 80px;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2px;
}
.span1 {
  margin-top: 10px;
}
.span2 {
  font-size: 16px;
}
</style>
