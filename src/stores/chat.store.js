import { defineStore } from 'pinia';

export const useChatStore = defineStore({
  id: 'chat',
  state: () => ({
    messages: [
      {
        type: 'ai',
        text: 'Hi there!'
      },
      {
        type: 'user',
        text: 'Hi! How are you?'
      }
    ]
  }),
  actions: {
    addMessage(message) {
      this.messages = [...this.messages, message];
    }
  }
})