<script setup>

import { CheckCircleIcon } from "@heroicons/vue/24/solid/index.js";
import {PAGE_PROGRESS } from "@/constants.js";



</script>

<template>
  <a :href="`#${PAGE_PROGRESS}`" class="text-sm">
    <div v-if="false" class="flex-items-center gap-1 text-sm">
      Day complete   !
      <CheckCircleIcon class="h-8 text-green-500" />
    </div>

    <div v-else class="flex-items-center gap-1 text-sm">
      <div>Progress:<span class="font-mono"> 20%</span></div>

      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>

<style scoped>

</style>