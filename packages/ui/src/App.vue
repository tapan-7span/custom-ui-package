<template>
  <div class="flex items-center justify-center h-screen bg-neutral-100 w-full">
    <div class="container w-full px-48">
      <Accordion class="shadow-2xl" title="Title">
        <template #default> description </template>
      </Accordion>
    </div>
  </div>
</template>
<script setup>
import Accordion from "./components/accordion.vue";
</script>
