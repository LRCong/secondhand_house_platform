<template>
  <h1 class="star-title">收藏</h1>
  <div class="star-container">
    <div
      class="result-container"
      v-for="item in starHouses"
      :key="item.house_name"
    >
      <a-card hoverable style="width: 300px">
        <template #cover>
          <img
            alt="example"
            src="https://pic1.ajkimg.com/display/anjuke/a7a9d3-%E4%B8%AD%E5%8E%9F%E5%9C%B0%E4%BA%A7/91035a35ef5b66c193605ce2adb0b71a-800x650.jpg"
          />
        </template>
        <template class="ant-card-actions" #actions>
          <StarOutlined
            key="收藏"
            v-if="!item.ifStar"
            @click="bindStar1(1, item.house_id)"
          />
          <StarFilled
            key="收藏"
            v-if="item.ifStar"
            @click="bindStar1(1, item.house_id)"
          />
          <TagsOutlined
            key="预约"
            v-if="!item.ifOrder"
            @click="bindOrder1(1, item.house_id)"
          />
          <TagsFilled
            key="预约"
            v-if="item.ifOrder"
            @click="bindOrder1(1, item.house_id)"
          />
          <MessageOutlined key="私信" />
        </template>
        <a-card-meta :title="`${item.house_name} | ${item.manager_name}`">
          <template #avatar>
            <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </template>
        </a-card-meta>
      </a-card>
    </div>
  </div>
  <h1 class="order-title">预约</h1>
  <div class="order-container">
    <div
      class="result-container"
      v-for="item in orderHouses"
      :key="item.house_name"
    >
      <a-card hoverable style="width: 300px">
        <template #cover>
          <img
            alt="example"
            src="https://pic1.ajkimg.com/display/anjuke/a7a9d3-%E4%B8%AD%E5%8E%9F%E5%9C%B0%E4%BA%A7/91035a35ef5b66c193605ce2adb0b71a-800x650.jpg"
          />
        </template>
        <template class="ant-card-actions" #actions>
          <StarOutlined
            key="收藏"
            v-if="!item.ifStar"
            @click="bindStar2(1, item.house_id)"
          />
          <StarFilled
            key="收藏"
            v-if="item.ifStar"
            @click="bindStar2(1, item.house_id)"
          />
          <TagsOutlined
            key="预约"
            v-if="!item.ifOrder"
            @click="bindOrder2(1, item.house_id)"
          />
          <TagsFilled
            key="预约"
            v-if="item.ifOrder"
            @click="bindOrder2(1, item.house_id)"
          />
          <MessageOutlined key="私信" />
        </template>
        <a-card-meta :title="`${item.house_name} | ${item.manager_name}`">
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
import { defineComponent, ref, watch, computed, onMounted } from "vue";
import {
  StarOutlined,
  TagsOutlined,
  MessageOutlined,
  StarFilled,
  TagsFilled,
  MessageFilled,
} from "@ant-design/icons-vue";
import { getStar, addStar, getOrder, addOrder } from "../api/Star";
import { HouseInfoLite } from "../api/FilterHouse";
export default defineComponent({
  components: {
    StarOutlined,
    TagsOutlined,
    MessageOutlined,
    StarFilled,
    TagsFilled,
    MessageFilled,
  },
  setup() {
    const starHouses = ref<HouseInfoLite[]>([]);
    const orderHouses = ref<HouseInfoLite[]>([]);
    onMounted(async () => {
      starHouses.value = await getStar(1);
      orderHouses.value = await getOrder(1);
    });

    const bindStar1 = async (consumer_id: number, house_id: number) => {
      await addStar(consumer_id, house_id);
      (starHouses.value.find(
        (value) => value.house_id === house_id
      ) as any).ifStar = !(starHouses.value.find(
        (value) => value.house_id === house_id
      ) as any).ifStar;
    };
    const bindOrder1 = async (consumer_id: number, house_id: number) => {
      await addOrder(consumer_id, house_id);
      (starHouses.value.find(
        (value) => value.house_id === house_id
      ) as any).ifOrder = !(starHouses.value.find(
        (value) => value.house_id === house_id
      ) as any).ifOrder;
    };

    const bindStar2 = async (consumer_id: number, house_id: number) => {
      await addStar(consumer_id, house_id);
      (orderHouses.value.find(
        (value) => value.house_id === house_id
      ) as any).ifStar = !(orderHouses.value.find(
        (value) => value.house_id === house_id
      ) as any).ifStar;
    };
    const bindOrder2 = async (consumer_id: number, house_id: number) => {
      await addOrder(consumer_id, house_id);
      (orderHouses.value.find(
        (value) => value.house_id === house_id
      ) as any).ifOrder = !(orderHouses.value.find(
        (value) => value.house_id === house_id
      ) as any).ifOrder;
    };

    return {
      starHouses,
      orderHouses,
      bindStar1,
      bindOrder1,
      bindStar2,
      bindOrder2,
    };
  },
});
</script>

<style scoped>
.star-container,
.order-container {
  display: flex;
  margin: 10px 0;
}
</style>