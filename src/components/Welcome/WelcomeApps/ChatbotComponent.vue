<template>
  <div id="chatbot">
    <header id="chatbot-header">
      ChatBot
    </header>
    <main id="chatbot-chat">
      Chat
    </main>
    <footer id="chatbot-input">
      Input
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ChatbotComponent',
};
</script>

<style scoped>
#chatbot {
  width: 100%;
  height: 100%;
  background-color: #eee;
  color: #333;
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "chat"
    "input";
}
</style>
