<template>
  <div class="detail-container">
    <div class="img-container">
      <img
        src="https://pic1.ajkimg.com/display/anjuke/a7a9d3-%E4%B8%AD%E5%8E%9F%E5%9C%B0%E4%BA%A7/91035a35ef5b66c193605ce2adb0b71a-800x650.jpg"
        alt="sample"
      />
    </div>
    <div class="info-container">
      <h1>伯灵天瑞</h1>
      <div class="price">
        <h2 class="sum-price">350 万报价</h2>
        <h2 class="avg-price">58334.0元/㎡</h2>
      </div>
      <div class="tags">
        <a-tag color="pink">三室一厅</a-tag>
        <a-tag color="red">南北通透</a-tag>
        <a-tag color="orange">坐北朝南</a-tag>
        <a-tag color="green">环境舒适</a-tag>
        <a-tag color="cyan">好学区</a-tag>
      </div>
      <a-card hoverable style="width: 300px">
        <template class="ant-card-actions" #actions>
          <StarOutlined key="收藏" />
          <TagsOutlined key="预约" />
          <MessageOutlined key="私信" />
        </template>
        <a-card-meta title="陈建军" description="南北通透，光照好">
          <template #avatar>
            <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </template>
        </a-card-meta>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  StarOutlined,
  TagsOutlined,
  MessageOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    StarOutlined,
    TagsOutlined,
    MessageOutlined,
  },
});
</script>

<style scoped>
.detail-container {
  display: flex;
  padding: 40px;
}
.img-container {
  width: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-container img {
  width: 100%;
}
.info-container {
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info-container h1 {
  font-size: 50px;
  line-height: 50px;
}
.info-container .price {
  display: flex;
  align-items: baseline;
}
.info-container .sum-price {
  font-size: 25px;
  margin: 0 20px 0 0;
}
.tags {
  margin: 0px 0 20px 0;
}
</style>