<template>
  <div id="welcome-content" :style="{ backgroundImage: `url(${imageBackground})` }">
    <div class="content">
      <div id="welcome-loading" v-if="loading === true">
        <div class="loading-center">
          <p class="loading-title">{{ $t('app_created_with') }}</p>
          <p class="loading-subtitle">{{ $t('simulating_loading') }}</p>
          <div class="loading">
            <div class="loading-bar"></div>
          </div>
        </div>
      </div>
      <div id="desktop" v-else-if="loading === false">
        <button class="desktop-icon" @click="handleOpenApp('about-me')">
          <i class="fas fa-address-book"></i>
          <span>{{ $t('about_me') }}</span>
        </button>
        <button class="desktop-icon" @click="handleOpenApp('experiences')">
          <i class="fas fa-briefcase"></i>
          <span>{{ $t('experiences') }}</span>
        </button>
        <button class="desktop-icon" @click="handleOpenApp('airplane_game')">
          <img src="https://raw.githubusercontent.com/tadeubdev/jogo-aviaozinho/main/assets/icon/hd_highres.png" width="50px" />
          <span>{{ $t('airplane_game') }}</span>
        </button>
        <a class="desktop-icon link" :href="$t('github_url')" target="_blank" rel="noopener noreferrer">
          <img :src="githubLogo" alt="github" />
          <span>
            {{ $t('my_github') }}
            <i class="fas fa-external-link"></i>
          </span>
        </a>
        <a class="desktop-icon link" :href="$t('linkedin_url')" target="_blank" rel="noopener noreferrer">
          <img :src="linkedinLogo" alt="linkedin" />
          <span>
            {{ $t('my_linkedin') }}
            <i class="fas fa-external-link"></i>
          </span>
        </a>
        <a class="desktop-icon link" :href="$t('devto_url', { username: '@tadeubdev' })" target="_blank" rel="noopener noreferrer">
          <img :src="devtoLogo" alt="devto" />
          <span>
            {{ $t('my_devto') }}
            <i class="fas fa-external-link"></i>
          </span>
        </a>
        <a class="desktop-icon link" :href="$t('medium_url')" target="_blank" rel="noopener noreferrer">
          <img :src="mediumLogo" alt="medium" />
          <span>
            {{ $t('my_medium') }}
            <i class="fas fa-external-link"></i>
          </span>
        </a>
      </div>
      <welcome-apps
        v-if="openedApp"
        :opened-app="openedApp"
        @open-app="handleOpenApp"
      />
    </div>
  </div>
</template>

<script>
import imageBackground from '@/assets/images/7HwVp5ha-wallha.com.png';
import linkedinLogo from '@/assets/images/links/linkedin.png';
import githubLogo from '@/assets/images/links/github.png';
import devtoLogo from '@/assets/images/links/devto.png';
import mediumLogo from '@/assets/images/links/medium.png';

import WelcomeApps from './WelcomeApps.vue';
import { useEventBus } from '@/helpers/eventBus';
const { on } = useEventBus();

export default {
  name: 'WelcomeContent',
  components: {
    WelcomeApps,
  },
  data() {
    return {
      imageBackground,
      linkedinLogo,
      githubLogo,
      devtoLogo,
      mediumLogo,
      openedApp: '',
      loading: null,
    };
  },
  methods: {
    handleOpenApp(appName) {
      if (!this.openedApp && !appName) {
        return;
      }
      if (this.openedApp) {
        // apply a fade out effect on the actual app
        document.querySelector(`.app[data-app-name="${this.openedApp}"]`).classList.remove('fade-in');
        document.querySelector(`.app[data-app-name="${this.openedApp}"]`).classList.add('fade-out');
        setTimeout(() => {
          this.openedApp = appName;
          if (appName) {
            setTimeout(() => {
              document.querySelector(`.app[data-app-name="${this.openedApp}"]`).classList.add('fade-in');
            });
          }
        }, 300);
        return;
      }
      this.openedApp = appName;
      if (appName) {
        setTimeout(() => {
          document.querySelector(`.app[data-app-name="${this.openedApp}"]`).classList.add('fade-in');
        });
      }
    },
  },
  mounted() {
    on('nextStep', async (nextStep) => {
      if (nextStep === 2) {
        await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
        this.loading = true;
        const audio = new Audio(require('@/assets/sounds/os-start.wav'));
        audio.volume = 0.5;
        setTimeout(() => {
          audio.play();
        }, 2000);
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      }
    });
  },
};
</script>

<style scoped>
#welcome-content {
  justify-content: start !important;
  align-items: start !important;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
  user-select: none;
}
#welcome-content:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}
#welcome-content * {
  z-index: 1;
}
#welcome-content .content {
  width: 100vw;
  height: 100vh;
  margin: inherit;
}
#welcome-content #desktop {
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  gap: 20px;
  width: 100vw;
  height: auto;
  padding: 50px;
}
#welcome-content .desktop-icon {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 120px;
  min-height: 130px;
  background: none;
  color: #FFF;
  font-size: 20px;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  filter: brightness(0.9);
}
#welcome-content .desktop-icon:hover,
#welcome-content .desktop-icon:active {
  filter: brightness(1.1);
}
#welcome-content .desktop-icon i {
  font-size: 50px;
}
#welcome-content .desktop-icon span {
  margin-top: 10px;
  font-size: 15px;
}
#welcome-content .desktop-icon.link img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
#welcome-content .desktop-icon.link i {
  font-size: 11px;
}
#welcome-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
#welcome-loading .loading {
  width: 500px;
  height: 10px;
  background: #333;
  border-radius: 10px;
  overflow: hidden;
}
#welcome-loading .loading-bar {
  width: 0;
  height: 100%;
  background: #FFF;
  animation: loading 3s;
}
.loading-title {
  color: #FFF;
  font-size: 20px;
  text-align: center;
}
.loading-subtitle {
  color: #FFF;
  font-size: 15px;
  text-align: center;
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
@media screen and (min-width: 500px) and (max-width: 768px) {
  #welcome-content #desktop {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 500px) {
  #welcome-content #desktop {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    padding: 50px 20px;
  }
}
</style>
