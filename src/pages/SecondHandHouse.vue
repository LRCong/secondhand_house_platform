<template>
  <div class="sh-container">
    <div class="filters-container">
      <div class="filter-container">
        <h3>房龄：</h3>
        <div class="filter">
          <a-slider
            range
            v-model:value="value1"
            :disabled="disabled1"
            :max="30"
            :min="0"
          />
        </div>
        <h3>max：{{ value1[0] }}</h3>
        <h3>min：{{ value1[1] }}</h3>
        <h3>固定：</h3>
        <a-switch size="small" v-model:checked="disabled1" />
      </div>
      <div class="filter-container">
        <h3>价格：</h3>
        <div class="filter">
          <a-slider
            range
            v-model:value="value2"
            :disabled="disabled2"
            :max="20000"
            :min="0"
          />
        </div>
        <h3>max：{{ value2[0] }}</h3>
        <h3>min：{{ value2[1] }}</h3>
        <h3>固定：</h3>
        <a-switch size="small" v-model:checked="disabled2" />
      </div>
      <div class="filter-container">
        <h3>面积：</h3>
        <div class="filter">
          <a-slider
            range
            v-model:value="value3"
            :disabled="disabled3"
            :max="200"
            :min="0"
          />
        </div>
        <h3>max：{{ value3[0] }}</h3>
        <h3>min：{{ value3[1] }}</h3>
        <h3>固定：</h3>
        <a-switch size="small" v-model:checked="disabled3" />
      </div>
      <div class="filter-container">
        <h3>区位：</h3>
        <a-select
          mode="multiple"
          v-model:value="filterAreas"
          style="width: 50%"
          placeholder="请选择区位"
        >
          <a-select-option v-for="item in area" :key="item.area_id">
            {{ item.area_name }}
          </a-select-option>
        </a-select>
      </div>
      <div class="filter-container">
        <h3>标签：</h3>
        <a-select
          mode="multiple"
          v-model:value="filterLabels"
          style="width: 50%"
          placeholder="请选择标签"
        >
          <a-select-option v-for="item in labels" :key="item.label_id">
            {{ item.label_name }}
          </a-select-option>
        </a-select>
      </div>
    </div>
    <div class="results-container">
      <div
        class="result-container"
        v-for="item in filteredHouses"
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
            <StarOutlined key="收藏" />
            <TagsOutlined key="预约" />
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, onMounted } from "vue";
import {
  StarOutlined,
  TagsOutlined,
  MessageOutlined,
} from "@ant-design/icons-vue";
import { debounce } from "lodash";
import { getFIlterHouse, HouseInfoLite } from "../api/FilterHouse";
import { getLabels } from "../api/GetLabels";
import { getAreas } from "../api/GetArea";

export default defineComponent({
  components: {
    StarOutlined,
    TagsOutlined,
    MessageOutlined,
  },
  setup() {
    const value1 = ref<number[]>([10, 20]);
    const value2 = ref<number[]>([5000, 10000]);
    const value3 = ref<number[]>([50, 100]);
    const disabled1 = ref<boolean>(false);
    const disabled2 = ref<boolean>(false);
    const disabled3 = ref<boolean>(false);
    const filterLabels = ref<string[]>([]);
    const filterAreas = ref<string[]>([]);
    const filterOption = computed(() => {
      return {
        maxAge: value1.value[1],
        minAge: value1.value[0],
        maxPrice: value2.value[1],
        minPrice: value2.value[0],
        maxCover: value3.value[1],
        minCover: value3.value[0],
        label: filterLabels.value.map((value) => Number(value)),
        Area: filterAreas.value.map((value) => Number(value)),
      };
    });

    const labels = ref<{ label_id: number; label_name: string }[]>([]);
    onMounted(async () => {
      let res = await getLabels();
      labels.value = res;
    });

    const area = ref<{ area_name: string; area_id: number }[]>([]);
    onMounted(async () => {
      let res = await getAreas();
      console.log(res);
      area.value = res;
    });

    const filteredHouses = ref<HouseInfoLite[]>([]);
    watch(
      filterOption,
      debounce(async () => {
        let res = await getFIlterHouse(filterOption.value);
        filteredHouses.value = res;
      }, 500)
    );
    onMounted(async () => {
      let res = await getFIlterHouse(filterOption.value);
      filteredHouses.value = res;
    });

    return {
      value1,
      value2,
      value3,
      disabled1,
      disabled2,
      disabled3,
      filterLabels,
      filterAreas,
      filteredHouses,
      labels,
      area,
      value: ref(["a1", "b2"]),
    };
  },
});
</script>

<style scoped>
.filters-container {
  padding: 0px 20px;
}
.filter-container {
  display: flex;
  margin: 10px 0;
}
.filter-container h3 {
  padding: 0 10px 0 0;
}
.filter-container .filter {
  min-width: 500px;
  max-width: 100%;
  /* margin: 0 20px; */
  transform: translateY(-15%);
}
.filter-container button {
  /* margin: 0 20px; */
  transform: translateY(30%);
}
.results-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 20px;
}
.result-container {
  margin: 10px 0;
}
</style>