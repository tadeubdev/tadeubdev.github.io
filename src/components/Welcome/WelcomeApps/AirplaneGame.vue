<template>
  <div id="airplane-game">
    <div class="loading-center" v-if="loading">
      <p class="loading-title">{{ $t('airplane_game_title') }}</p>
      <p class="loading-subtitle" v-html="$t('airplane_game_subtitle')"></p>
      <div class="loading">
        <div class="loading-bar"></div>
      </div>
    </div>
    <iframe
      :src="iframeHref"
      title="Airplane Game"
      width="100%"
      height="100%"
      style="border: 0"
      v-else
    />
  </div>
</template>

<script>
import { useEventBus } from '@/helpers/eventBus';
const { on, off } = useEventBus();

export default {
  name: 'AirplaneGame',
  data() {
    return {
      loading: true,
      iframeHref: 'https://tadeubdev.github.io/jogo-aviaozinho/',
    };
  },
  methods: {
    handleStartAirplaneGame() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
  },
  mounted() {
    on('startLoadingAirplaneGame', this.handleStartAirplaneGame);
  },
  unmounted() {
    off('startLoadingAirplaneGame', this.handleStartAirplaneGame);
    this.loading = false;
  },
};
</script>

<style scoped>
#airplane-game {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #111;
  color: #fff;
}
#airplane-game .loading-center {
  text-align: center;
}
#airplane-game .loading {
  width: 500px;
  height: 10px;
  background: #333;
  border-radius: 10px;
  overflow: hidden;
}
#airplane-game .loading-bar {
  width: 0;
  height: 100%;
  background: #FFF;
  animation: loading 5s;
}
#airplane-game .loading-title {
  font-size: 20px;
}
#airplane-game .loading-subtitle {
  font-size: 15px;
  margin-bottom: 20px;
}
@keyframes loading {
  0% {
    width: 0;
  }
  50% {
    width: 50%;
  }
  55% {
    width: 50%;
  }
  60% {
    width: 55%;
  }
  100% {
    width: 100%;
  }
}
</style>

