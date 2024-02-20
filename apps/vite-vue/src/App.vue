<template>
  <div>
    <VueDatePicker v-model="date"></VueDatePicker>
  </div>
</template>
<script setup>
import { ref } from "vue";
const date = ref(new Date());
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
