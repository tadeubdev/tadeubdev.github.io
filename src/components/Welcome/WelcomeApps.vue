<template>
  <div id="apps">
    <div
      class="app xl"
      :class="{ active: openedApp === 'about-me' }"
      data-app-name="about-me"
    >
      <app-header
        :title="$t('about_me')"
        @open-app="$emit('open-app', $event)"
      />
      <about-me />
    </div>
    <div
      class="app lg"
      :class="{ active: openedApp === 'experiences' }"
      data-app-name="experiences"
    >
      <app-header
        :title="$t('my_experiences')"
        @open-app="$emit('open-app', $event)"
      />
      <my-experiences />
    </div>
    <div
      class="app xl"
      :class="{ active: openedApp === 'airplane_game' }"
      data-app-name="airplane_game"
    >
      <app-header
        :title="$t('airplane_game')"
        @open-app="$emit('open-app', $event)"
      />
      <airplane-game />
    </div>
    <div
      class="app"
      :class="{ active: openedApp === 'chatbot' }"
      data-app-name="chatbot"
    >
      <app-header
        title="ChatBot"
        @open-app="$emit('open-app', $event)"
      />
      <chatbot-component />
    </div>
  </div>
</template>

<script>
import AppHeader from './WelcomeApps/AppHeader.vue';
import AboutMe from './WelcomeApps/AboutMe.vue';
import MyExperiences from './WelcomeApps/MyExperiences.vue';
import AirplaneGame from './WelcomeApps/AirplaneGame.vue';
import ChatbotComponent from './WelcomeApps/ChatbotComponent.vue';

export default {
  name: 'WelcomeApps',
  components: {
    AppHeader,
    AboutMe,
    MyExperiences,
    AirplaneGame,
    ChatbotComponent,
  },
  props: {
    openedApp: {
      type: String,
      default: '',
    },
  },
  mounted() {
    // on document keypress escape check if openedApp is not empty then close it
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.openedApp) {
        this.$emit('open-app', '');
      }
    });
  },
};
</script>

<style scoped>
.app {
  width: 90vw;
  height: 80vh;
  max-width: 800px;
  max-height: 600px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background-color: #EEE;
  color: #333;
  border-radius: 7px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: none;
}
.app.lg {
  width: 90vw;
  height: 90vh;
  max-width: 800px;
  max-height: 600px;
}
.app.xl {
  width: 90vw;
  height: 90vh;
  max-width: 90vw;
  max-height: 90vh;
}
.app.active {
  display: flex;
  flex-direction: column;
}
.app.fade-out {
  animation: fadeOut 0.5s;
}
.app.fade-in {
  animation: fadeIn 0.5s;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
