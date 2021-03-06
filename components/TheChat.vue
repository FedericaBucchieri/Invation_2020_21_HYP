<template>
  <div class="chat">
    <!-- container containing the chat -->
    <div v-if="isOpen" class="chat-container">
      <!-- decorative details of the chatbot -->
      <div class="chatbot-detail">
        <img
          src="/charlie-chatbot.png"
          alt="charlie the chatbot - avatar image"
          width="75"
          height="75"
        />
        <div class="details">
          <p class="name">Hi! I'm Charlie</p>
          <p class="status">~ ready to answer</p>
        </div>
      </div>
      <div id="chat-window" class="chat-window">
        <!-- display every message held by the chatList -->
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
      <label for="chat-dialogue">Type a message</label>
      <input
        id="chat-dialogue"
        v-model="messageToSend"
        type="text"
        @keypress.enter="sendMessage"
        placeholder="Type a message..."
      />
    </div>
    <!-- button that makes the chat appear and disappear -->
    <div class="button" @click="isOpen = !isOpen">
      <img
        src="/charlie-chatbot.png"
        alt="chatbot image - charlie avatar"
        width="60"
        height="60"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Object containing all the content of the conversation
    chatList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      // Object containing the message to send to the chatbot insert by the user
      messageToSend: "",
      // Flag indicating if the chat has been opened by the user or not
      isOpen: false,
    };
  },
  methods: {
    sendMessage() {
      const { WebSocketEventBus } = require("mmcc/WebSocketEventBus");
      this.$store.commit("addMessage", {
        sender: false,
        content: this.messageToSend,
      });
      const packet = {
        message: { type: "data", payload: { data: this.messageToSend } },
        configurationId: process.env.configurationId,
      };
      WebSocketEventBus.$emit("send", packet);
      this.messageToSend = "";
    },
  },
  updated() {
    // Scrolling the chat to the last immage for a correct visualization of the messages flow
    var objDiv = document.getElementById("chat-window");
    objDiv.scrollTop = objDiv.scrollHeight;
  },
};
</script>

<style scoped>
@media (min-width: 810px) {
  .button {
    position: fixed;
    z-index: 10;
    bottom: 70px;
    right: 30px;
  }
}

.button {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

@media (max-width: 810px) {
  .button {
    position: fixed;
    z-index: 10;
    bottom: 80px;
    right: 10px;
  }
}

.button img {
  width: 100%;
}
.chat {
  z-index: 20;
}

.chat-container {
  border-radius: 4px;
  padding: 10px;
  border-radius: 15px;
  background-color: rgb(238, 238, 238);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

@media (min-width: 810px) {
  .chat-container {
    height: 50%;
    width: 300px;
    bottom: 150px;
    right: 20px;
    position: fixed;
    z-index: 10;
  }
}

@media (max-width: 810px) {
  .chat-container {
    height: 65%;
    width: 340px;
    bottom: 150px;
    right: 20px;
    position: fixed;
    z-index: 10;
  }
}

.chatbot-detail {
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid #ec9e0d;
  width: 100%;
}

.chatbot-detail .name {
  color: #ec9e0d;
  font-weight: 600;
  font-size: 22px;
}

.chatbot-detail .status {
  color: #000;
  font-weight: 300;
  font-size: 12px;
}

.chatbot-detail img {
  width: 75px;
  height: 75px;
  margin-right: 10px;
}

.chat-window {
  height: calc(100% - 130px);
  vertical-align: bottom;
  overflow-y: scroll;
}

.chat-window > :first-child {
  margin-top: auto !important;
  /* use !important to prevent breakage from child margin settings */
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
  font-size: 14px;
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
  font-size: 14px;
}

input:focus {
  border: 1px solid #fba70b;
  outline: none;
}

label {
  display: none;
}
</style>
