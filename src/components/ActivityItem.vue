<script setup>

import { TrashIcon } from "@heroicons/vue/24/outline/index.js";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseButton from "@/components/BaseButton.vue";
import { ref } from "vue";
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from "@/constants.js";
import { isActivityValid, isUndefined } from "@/validators.js";




  defineProps({

  activity:  {

    required:true,
    type: String,
   validator: isActivityValid
  }
})

const secondsToComplete= ref(0)





</script>

<template>
  <li class="flex flex-col gap-2 p-2">
    <div class="flex items-center gap-2 ">

      <BaseButton :type="BUTTON_TYPE_DANGER" @click="$emit('delete')">

        <TrashIcon class="h-8" />

      </BaseButton>
      <span class="truncate text-xl"> {{ activity.name }} </span>
    </div>
    <div>
      <BaseSelect class="font-mono"
                  placeholder="h:mm"
                  :options="PERIOD_SELECT_OPTIONS"
                  :selected="secondsToComplete"
                  @select="secondsToComplete=$event"
                   />
    </div>
  </li>
</template>

<style scoped>

</style>