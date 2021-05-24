<template>
  <div class="chat">
    <div v-if="isOpen" class="chat-container">
      <div class="chatbot-detail">
        <img src="/charlie-chatbot.png" alt="charlie the chatbot image" />
        <div class="details">
          <p class="name">Hi! I'm Charlie</p>
          <p class="status">~ ready to answer</p>
        </div>
      </div>
      <div id="chat-window" class="chat-window">
        <div
          v-for="(message, messageIndex) of chatList"
          :key="`message-${messageIndex}`"
          class="message"
          :class="{ sender: message.sender }"
        >
          <div class="message-content" :class="{ sender: message.sender }">
            {{ message.content }}
          </div>
        </div>
      </div>
      <input
        v-model="messageToSend"
        type="text"
        @keypress.enter="sendMessage"
      />
    </div>
    <div class="button" @click="isOpen = !isOpen">
      <img src="/charlie-chatbot.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      messageToSend: '',
      isOpen: true,
    }
  },
  methods: {
    sendMessage() {
      const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
      this.$store.commit('addMessage', {
        sender: false,
        content: this.messageToSend,
      })
      const packet = {
        message: { type: 'data', payload: { data: this.messageToSend } },
        configurationId: process.env.configurationId,
      }
      WebSocketEventBus.$emit('send', packet)
      this.messageToSend = ''
    },
  },
}
</script>

<style scoped>
.button {
  position: fixed;
  z-index: 10;
  bottom: 70px;
  right: 30px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.button img {
  width: 100%;
}
.chat-container {
  border-radius: 4px;
  height: 600px;
  width: 300px;
  position: fixed;
  z-index: 10;
  bottom: 150px;
  right: 20px;
  padding: 10px;
  border-radius: 15px;
  background-color: rgb(238, 238, 238);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.chatbot-detail {
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid #fba70b;
  width: 100%;
}

.chatbot-detail .name {
  color: #fba70b;
  font-weight: 600;
  font-size: 22px;
}

.chatbot-detail .status {
  color: #777;
  font-weight: 300;
  font-size: 12px;
}

.chatbot-detail img {
  width: 75px;
  height: 75px;
  margin-right: 10px;
}

.chat-window {
  overflow-y: scroll;
  height: calc(100% - 130px);
  vertical-align: bottom;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.message {
  width: calc(100% - 8px);
  display: flex;
  justify-content: flex-end;
}
.message.sender {
  justify-content: flex-start;
}
.message-content {
  padding: 5px 10px;
  margin: 4px;
  width: auto;
  background: #f3f3f3;
  color: black;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.message-content.sender {
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  font-size: 14px;
  color: white;
}

input {
  bottom: 10px;
  width: 93%;
  height: 35px;
  margin: auto;
  border-radius: 10px;
  position: absolute;
  z-index: 20;
  background-color: #eaeaea;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #999;
}

input:focus {
  border: 1px solid #fba70b;
  outline: none;
}
</style>
