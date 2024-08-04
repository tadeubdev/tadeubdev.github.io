<template>
  <header class="app-header">
    <p v-text="title"></p>
    <div id="app-header-buttons">
      <button @click="$emit('open-app', '')">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 3rem;
  border-radius: 4px 4px 0 0;
  background-color: #222;
  color: rgba(255,255,255,.5);
  font-weight: 100;
}
#app-header-buttons button {
  background: none;
  border: none;
  color: rgba(255,255,255,.7);
  cursor: pointer;
}
</style>
