<script setup>

import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import TheTimeline from "@/pages/TheTimeline.vue";

import TheProgress from "@/pages/TheProgress.vue";
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from "@/constants.js";
import {
  generateActivities,
  generateActivitySelectOptions,
  generateTimeLineItems,
  normalizePageHash
} from "./function.js";
import { ref } from "vue";
import TheActivities from "@/pages/TheActivities.vue";

const currentPage = ref(normalizePageHash());

const timelineItems = generateTimeLineItems();

const activities =ref(generateActivities());

const activitySelectOptions =generateActivitySelectOptions(activities.value);

function createActivity(name){
  activities.value.push({
    id:id(),
    name,
    secondsToComplete: 0
  })
}

function goTo(page) {
  currentPage.value = page;
}
function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity),1)
}


</script>

<template>

  <TheHeader v-on:navigate="goTo($event)" />


  <main class="flex flex-grow flex-col">


    <TheTimeline v-show="currentPage===PAGE_TIMELINE" :timeline-items="timelineItems" :activity-select-options="activitySelectOptions" />
    <TheActivities v-show="currentPage===PAGE_ACTIVITIES"
                   :activities="activities"
                   @create-activity="createActivity"
                   @delete-activity="deleteActivity" />
    <TheProgress v-show="currentPage===PAGE_PROGRESS" />


  </main>
  <TheNav :current-page="currentPage" v-on:navigate="goTo($event)" />
</template>

