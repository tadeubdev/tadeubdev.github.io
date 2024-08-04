<template>
  <div id="experiences">
    <h2>{{ $t('my_experiences') }}</h2>
    <div id="experiences-center">
      <div class="experience-item" v-for="experience in experiences" :key="`experience-${experience.title}`">
        <a :href="experience.image" v-if="experience.image" target="_blank" rel="noopener noreferrer">
          <img :src="experience.image" :alt="experience.title" />
        </a>
        <div class="experience-item-content">
          <h3 v-text="experience.title"></h3>
          <p v-text="experience.description"></p>
          <a :href="experience.link" v-if="experience.link" target="_blank" rel="noopener noreferrer">{{ experience.link }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyExperiences',
  data() {
    return {
    };
  },
  computed: {
    experiences() {
      return this.$i18n.messages[this.$i18n.locale].experiences_data;
    },
  },
}
</script>

<style scoped>
#experiences {
  background: #111;
  min-height: calc(100% - 3rem);
  overflow-y: auto;
  padding: 1rem;
  color: #DDD;
}
#experiences > h2 {
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
}
.experience-item {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #222;
}
.experience-item img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
}
@media (max-width: 600px) {
  .experience-item {
    grid-template-columns: 1fr;
  }
  .experience-item img {
    width: 100%;
    max-height: 500px;
  }
}
</style>
