<template>
  <div class="bg-white rounded-md p-1 transition-all duration-700">
    <button
      @click="isToggle = !isToggle"
      class="text-xl flex items-center justify-between w-full"
    >
      <label>{{ title }}</label>
      <Arrow
        class="transition-all duration-700"
        :class="isToggle ? 'rotate-90' : '-rotate-90'"
      />
    </button>
    <div v-if="isToggle"><slot /></div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Arrow from "./icons/arrow.vue";
const props = defineProps({
  title: String,
});
const isToggle = ref(false);
</script>
