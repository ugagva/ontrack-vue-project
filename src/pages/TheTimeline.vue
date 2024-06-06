<script setup>

import TimeLineItem from "@/components/TimeLineItem.vue";
import { timelineItems } from "@/constants.js";
import { validateSelectOptions, validateTimelineItems } from "@/validators.js";

defineProps({

  timeLineItems:{
    required:true,
    type:Array,
    validator: validateTimelineItems
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator:validateSelectOptions
  }
})


</script>

<template>
<div class="mt-7">
  <ul>
   <TimeLineItem
     v-for="timelineItem in timelineItems"
     :key="timelineItem.hour"
     :timeline-item="timelineItem"
     :activity-select-options="activitySelectOptions"
   />

  </ul>
</div>
</template>

<style scoped>

</style>