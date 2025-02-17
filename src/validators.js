import { HOURS_IN_DAY, NAV_ITEMS, MIDNIGHT_HOUR, BUTTON_TYPES } from "@/constants.js";



export function isUndefinedOrNull(value){
  return isUndefined (value) || isNull(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isUndefined(value) {
  return value === undefined
}

export function isNumber(value) {
  return typeof value=== 'number'
}
export function isNull(value) {
  return value === null
}


export function isPageValid(page) {
  return  Object.keys(NAV_ITEMS).includes(page)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}
export function isTimeLineValid( { hour }) {
  return isHourValid (hour)
}
export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour,MIDNIGHT_HOUR,HOURS_IN_DAY-1)
}
 export function validateSelectOptions(options){
     return options.every(isSelectOptionValid)
 }

 function isBetween(value, start, end){
  return  value >= start && value <= end
 }

export function isSelectOptionValid({value, label}){
  return isNumber(value) && isNotEmptyString(label)
}

export function isString(value) {
  return typeof value==='string'
}

export function validateTimelineItems(timelineItems) {

    return timelineItems.every(isTimeLineValid)
  }
  
  export function isActivityValid(activity) {
    return isNotEmptyString(activity)
  }
  function isNotEmptyString(value) {
  return isString(value) && value.length > 0
  }

  export function validateActivities(activities) {
    return activities.every(isActivityValid)
  }

