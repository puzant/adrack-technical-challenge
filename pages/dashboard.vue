<template>
  <div class="container">
    <h1>Dashboard Page</h1>
    <ChartLine />
  </div>  
</template>

<script>
import ChartLine from '../components/chart-line'
export default {
  middleware: 'session',
  components: {
    ChartLine
  },
  head() {
    return {
      title: 'Dashboard page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'simple dashboard SPA'
        }
      ]
    }
  }
}
</script>

<style>

</style>