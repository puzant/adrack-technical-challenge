<template>
  <div class="container">
    <h1>Dashboard Page</h1>

    <div class="loader-container">
      <img v-if="!loaded" class="chart-loader mt-3" src="../static/loader-dotted.gif" alt="">
    </div>

    <ChartLine v-if="loaded" :chartData="values"/>
  </div>  
</template>

<script>
import ChartLine from '../components/chart-line'
export default {
  middleware: 'session',
  components: {
    ChartLine
  },
  data() {
    return {
      values: [],
      customValues: [],
      loaded: false
    }
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
  },
  mounted() {
    this.requestData()
  },
  methods: {
    requestData() {
      this.loaded = false
      //  added a delay of 2 seconds to simulate a real server delay
      fetch(" http://www.mocky.io/v2/5eda474f330000fefc79eab4?mocky-delay=2000ms")
        .then(response => response.json())
        .then(json => {
        this.values = json.data.value
        this.loaded = true
      })
    },
  }
}
</script>

<style>

</style>

<style>
.loader-container {
  display: flex;
  justify-content: center;
}

.chart-loader {
  width: 150px;
}
</style>