<script setup>
import BaseSelect from "@/components/BaseSelect.vue";

import { isTimeLineValid, validateActivities, validateSelectOptions } from "@/validators.js";
import { ref } from "vue";
import TimeLineHour from "@/components/TimeLineHour.vue";


defineProps({

  timelineItem:{
    required:true,
    type:Object,
    validator:isTimeLineValid
  },
  activitySelectOptions:{
    required:true,
    type: Array,
    validator:validateSelectOptions
  }


});


const selectedActivityId = ref(0);

</script>

<template>

  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">

<TimeLineHour :hour = "timelineItem.hour"/>

    <BaseSelect
      placeholder="Rest"
      :selected="selectedActivityId"
      :options="activitySelectOptions"
      @select="selectedActivityId=$event"/>

  </li>
</template>

<style scoped>

</style>