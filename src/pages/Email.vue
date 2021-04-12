<template>
  <div class="email-container">
    <div class="manager-list">
      <a-list item-layout="horizontal" :data-source="managers">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta>
              <template #title>
                <a
                  @click="bindGetMessage(item.manager_id, item.manager_name)"
                  >{{ item.manager_name }}</a
                >
              </template>
              <template #avatar>
                <a-avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </div>
    <div class="chat-room">
      <div
        class="message-container"
        v-for="item in messages"
        :key="item.message_id"
      >
        <p>~ {{ item.message_content }}</p>
      </div>
      <input type="text" v-model="input_message" v-on:keyup.enter="bindSend" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { getManager, Message, getMessage, sendMessage } from "../api/Message";

export default defineComponent({
  setup() {
    const managers = ref<{ manager_name: string; manager_id: number }[]>([]);
    onMounted(async () => {
      managers.value = await getManager(1);
    });

    const messages = ref<Message[]>([]);
    const manager = ref<string>("");
    const id = ref<number>(0);
    const bindGetMessage = async (manager_id: number, manager_name: string) => {
      manager.value = manager_name;
      id.value = manager_id;
      messages.value = await getMessage(1, manager_id);
    };

    const input_message = ref<string>("");
    const bindSend = async (): Promise<any> => {
      await sendMessage({
        message_id: messages.value[messages.value.length - 1].message_id + 1,
        message_content: input_message.value,
        message_date: new Date(),
        manager_id: id.value,
        consumer_id: 1,
      });
      bindGetMessage(id.value, manager.value);
      return;
    };

    return {
      managers,
      messages,
      manager,
      input_message,
      bindGetMessage,
      bindSend,
    };
  },
});
</script>

<style scoped>
.email-container {
  display: flex;
  height: 100%;
}
.manager-list {
  max-width: 300px;
}
.chat-room {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding: 10px;
  margin-left: 60px;
  border-radius: 10px;
  border: 1px black solid;
  box-shadow: gray 5px 5px 5px;
}

.chat-room input {
  width: 50%;
  box-sizing: border-box;
  padding: 5px;
  position: absolute;
  bottom: 10px;
  left: 20px;
  border: 0.5px black solid;
}
</style>