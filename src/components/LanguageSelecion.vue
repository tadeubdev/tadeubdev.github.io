<template>
  <div id="language-selection">
    <div class="content">
      <button id="language-selection-button" @click="handleChangeLanguage">
        <img :src="oppositeLanguage.flag" alt="flag" />
        <span>{{ oppositeLanguage.text }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelecion',
  data() {
    return {
      locales: [
        { code: 'en', text: 'Do you speak English?', flag: '/images/locales/en.png' },
        { code: 'pt-BR', text: 'Você fala Português?', flag: '/images/locales/pt.png' },
      ],
    };
  },
  computed: {
    oppositeLanguage() {
      return this.locales.find(language => language.code !== this.$i18n.locale);
    },
  },
  methods: {
    handleChangeLanguage() {
      localStorage.setItem('locale', this.oppositeLanguage.code);
      this.$i18n.locale = this.oppositeLanguage.code;
    },
  },
}
</script>

<style scoped>
#language-selection {
  position: relative;
  width: 100vw;
  z-index: 9;
}
#language-selection .content {
  position: relative;
}
#language-selection-button {
  position: absolute;
  top: 0;
  right: 0;
  background: #333;
  color: #FFF;
  border: none;
  padding: 10px 10px;
  border-radius: 0 0 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  cursor: pointer;
}
#language-selection-button img {
  width: 15px;
  height: 15px;
}
@media screen and (max-width: 768px) {
  #language-selection-button span {
    display: none;
  }
}
</style>
