<template>
  <header id="welcome-header">
    <div class="content">
      <div id="welcome-header-left">
        <h1 v-html="$t('software_developer_breakline')"></h1>
        <p v-text="$t('welcome_bio', { years: yearsOfExperience })"></p>
      </div>
      <div id="welcome-header-right">
        <img :src="avatar" alt="avatar" />
        <p id="welcome-header-right-name">Tadeu Barbosa</p>
        <p>{{ $t('programming_languages') }}</p>
      </div>
      <div id="welcome-header-scroll-down">
        <button @click="handleNextStep">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      avatar: '/images/avatar-2.jpg',
    };
  },
  computed: {
    yearsOfExperience() {
      const dateStart = new Date('2017-12-01');
      return new Date(new Date() - dateStart).getFullYear() - 1970;
    },
  },
  methods: {
    handleNextStep() {
      this.$emit('next-step');
    },
  },
};
</script>

<style scoped>
#welcome-header {
  top: 0;
}
#welcome-header * {
  z-index: 1;
}
#welcome-header:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, transparent 60%, var(--primary-color) 96%);
  opacity: 0.2;
}
#welcome-header .content {
  display: grid;
  grid-template-columns: 1fr 220px;
}
#welcome-header-left h1 {
  font-size: 70px;
  font-weight: 600;
  margin-top: 80px;
  line-height: 1.0;
  text-transform: uppercase;
}
#welcome-header-left p {
  max-width: 80%;
  margin-top: 20px;
  line-height: 1.5;
}
#welcome-header-right img {
  width: 220px;
  height: 300px;
  object-fit: cover;
}
#welcome-header-right p {
  text-align: right;
  font-size: 13px;
  font-weight: 100;
  color: rgba(255,255,255,.8);
}
#welcome-header-right-name {
  font-size: 22px !important;
}
#welcome-header-scroll-down button {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: none;
  display: block;
  border: none;
  color: #FFF;
  font-size: 30px;
  cursor: pointer;
  animation: scrollDown 1s infinite;
}
@keyframes scrollDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
@media screen and (max-width: 768px) {
  #welcome-header .content {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
    padding: 0 0 20px 0;
  }
  #welcome-header-left p {
    max-width: 100%;
  }
  #welcome-header-left h1 {
    font-size: 25px;
    margin-top: 0;
  }
  #welcome-header-right * {
    text-align: left !important;
  }
  #welcome-header-right img {
    width: 35%;
    height: auto;
  }
}
</style>
