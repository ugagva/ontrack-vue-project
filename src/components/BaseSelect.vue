<script setup>


import BaseButton from "@/components/BaseButton.vue";
import {BUTTON_TYPE_NEUTRAL} from '../constants.js'
import { XMarkIcon } from "@heroicons/vue/24/outline/index.js";
import { isNumberOrNull, isUndefinedOrNull, validateSelectOptions } from "@/validators.js";
import { computed } from "vue";
import { normalizeSelectValue } from "@/function.js";


//defineProps(["selected", "options", "placeholder"]);


const props= defineProps ({
  selected:[String,Number],
  placeholder: {
    type:String,
    required: true
  },

  options: {
    type:Array,
    required: true,
   validator:validateSelectOptions

  },

})
function select(value) {
  emit('select', normalizeSelectValue(value))
}
const emit= defineEmits({select: isNumberOrNull}

)
const isNotSelected= computed(()=> isUndefinedOrNull(props.selected))

</script>

<template>

  <div class="flex gap-4">

    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
      <XMarkIcon class="h-8" />
    </BaseButton>

    <select class="w-full truncate-rounded bg-gray-100 py-1 px-2 text-2xl"
            @change="select($event.target.value)">

      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>

      <option v-for="{value,label} in options"
              :key="value"
              :value="value"
              :selected="value === selected">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>