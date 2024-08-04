<template>
  <div id="welcome">
    <language-selecion />
    <welcome-header
      class="welcome-step"
      data-step="1"
      @next-step="handleNextStep"
    />
    <welcome-content
      class="welcome-step"
      data-step="2"
    />
  </div>
</template>

<script>
import LanguageSelecion from './LanguageSelecion.vue'
import WelcomeHeader from './Welcome/WelcomeHeader.vue'
import WelcomeContent from './Welcome/WelcomeContent.vue'

export default {
  name: 'WelcomeComponent',
  components: {
    LanguageSelecion,
    WelcomeHeader,
    WelcomeContent,
  },
  methods: {
    handleNextStep() {
      const actualStep = this.actualStep;
      const nextStep = actualStep + 1;
      if (!document.querySelector(`.welcome-step[data-step="${nextStep}"]`)) {
        return;
      }
      this.actualStep = nextStep;
      const actualElement = document.querySelector(`.welcome-step[data-step="${actualStep}"]`);
      const nextElement = document.querySelector(`.welcome-step[data-step="${nextStep}"]`);

      nextElement.classList.add('active');
      nextElement.style.top = window.innerHeight + 'px';
      this.scrollElementTo(actualElement, -window.innerHeight, 500);
      this.scrollElementTo(nextElement, 0, 500);
      setTimeout(() => {
        actualElement.classList.remove('active');
      }, 500);
    },
    scrollElementTo(element, to, duration) {
      if (duration <= 0) return;
      const difference = to - element.offsetTop;
      const perTick = difference / duration * 10;

      setTimeout(() => {
        element.style.top = element.offsetTop + perTick + 'px';
        if (element.offsetTop === to) return;
        this.scrollElementTo(element, to, duration - 10);
      }, 10);
    },
  },
  data() {
    return {
      actualStep: 1,
    };
  },
  mounted() {
    setTimeout(() => {
      document.querySelector(`.welcome-step[data-step="${this.actualStep}"]`).classList.add('active');
    });
  },
}
</script>

<style scoped>
.welcome-step {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: none;
  align-items: center;
  position: absolute;
  background: #111;
}
.welcome-step.active {
  display: flex;
}
</style>
