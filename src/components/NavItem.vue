<script >
import { ChartBarIcon, ClockIcon, ListBulletIcon } from "@heroicons/vue/24/outline/index.js";

export default {
  inheritAttrs:false
}

</script>


<template>
  <li class="flex-1">
    <a v-bind="$attrs" class="flex flex-col items-center p-4 text-xs capitalize">
<slot></slot>

    </a>
  </li>
</template>




<style scoped>

</style>