<template lang="pug">

.appt-container
  .appt-text My appiontments
  .appt-event-container
    .appt-event-date 
      span.appt-event-day Today 
      span.appt-event-month - Friday 29
      br
      span.appt-description-text Description:
      span.appt-description-content "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  
  .appt-event-container
    .appt-event-date 
      .no-event-text No Events.
  
  .appt-event-container
    .appt-event-date 
      span.appt-event-day Yesterday 
      span.appt-event-month - Thursday 28
      br
      span.appt-description-text Description:
      span.appt-description-content "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  .appt-event-container
    .appt-event-date 
      .no-event-text No Events.

</template>

<style lang="sass">
.appt-text
  border-bottom: 1px solid #aab0a9
.appt-container
  margin-left: 10px
  height: 100%
  background-color: #f1f1f1
  width: 55%
  border-radius: 5px
  padding: 10px

.appt-event-container
  margin-top: 10px

.appt-event-day
  font-style: italic

.lpu-underline
  border-bottom: 1px solid #aab0a9

.no-event-text
  color: #adb3ae
</style>