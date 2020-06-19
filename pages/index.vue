<template>
  <div class="main-container">
    
    <h2>Welcome to the main page</h2>
    <p>You can access the dashboard page to see the visualized data</p>

    <div class="update-appiontments-container">
      <LastestProjectsUpdates />
      <Appiontments />
    </div>

  </div>
</template>

<script>
import LastestProjectsUpdates from '../components/LatestProjectsUpdates'
import Appiontments from '../components/Appiontments'
export default {
  middleware: 'session',
  components: {
    LastestProjectsUpdates,
    Appiontments
  }
}
</script>

<style lang="sass">
.update-appiontments-container 
  display: flex
  justify-content: flex-start
  flex-wrap: wrap
  
</style>