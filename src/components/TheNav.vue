<script setup>

import NavItem from "@/components/NavItem.vue";
import {NAV_ITEMS} from "@/constants.js";
import { isPageValid } from "@/validators.js";



defineProps({
  currentPage:{
    required: true,
    type: String,
    validator:isPageValid
  }
})

const emit=defineEmits({
navigate: isPageValid()
})

</script>



<template>
  <nav class="sticky bottom-0 z-0 bg-white">

    <ul class="flex items-center justify-around border-s">

      <NavItem v-for="(icon,page) in NAV_ITEMS" :key="page"
               :href="`#${page}`"
               :class="{'bg-pink-300 pointer-events-none':page===currentPage}"
      @click="emit('navigate',page)">
        <component :is="icon" class="h-6 w-6"/>{{page}}

</NavItem>
    </ul>

  </nav>
</template>


<style scoped>

</style>