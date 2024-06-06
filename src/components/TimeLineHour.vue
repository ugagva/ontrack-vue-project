<script setup>


import { isHourValid } from "@/validators.js";
import { computed } from "vue";

const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: isHourValid
  }
});


const hourLinkClasses = [
  "absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-gray-100 px-2 font-mono text-lg text-gray-500",

  props.hour === new Date().getHours()

    ? "bg-lime-500 font-black text-white" : "bg-gary-100  text-gary-500"
];

const formattedHour=computed(()=>{
 return `${props.hour.toString().padStart(2,0)}:00`
})

</script>

<template>
  <a href="#"
     :class="hourLinkClasses"
  >
    {{ formattedHour }}:00</a>
</template>

<style scoped>

</style>