<template>
  <div class="container">
    <h1>Dashboard Page</h1>

    <v-alert v-if="errorDetected"
      class="mt-4"
      dense
      outlined
      type="error"
    >
      There was an error while getting the chart data
    </v-alert>

    <v-btn class="primary" @click="generateNewData()">Generate New Data</v-btn>

    <div class="loader-container">
      <img v-if="!loaded" class="chart-loader mt-3" src="../static/loader-dotted.gif" alt="">
    </div>

    <ChartLine v-if="loaded" :chart-data="dataCollection" />
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
      dataCollection: null,
      values: [],
      customValues: [],
      loaded: false,
      errorDetected: false
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
  created() {
    this.requestData()
  },
  methods: {
    requestData() {
      this.loaded = false
        this.$axios.get('http://www.mocky.io/v2/5eda474f330000fefc79eab4?mocky-delay=2000ms').then(response => {
        this.values = response.data.data.value
        this.loaded = true
        this.fillData()
      }).catch(error => {
        this.loaded = true
        this.errorDetected = true
      })
    },

    fillData () {
      this.dataCollection = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: "Data 1",
              backgroundColor: "transparent",
              borderColor: "rgba(1, 116, 188, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)",
              data: this.values
            }
          ]
        }
      },

    generateNewData() {
      this.values = []
      this.loaded = false
      //  https://stackoverflow.com/questions/47549891/vue-js-cannot-read-property-push-of-undefined
      let vm = this
      setTimeout(function() {
        for(let i=0; i<7; i++) {
          vm.values.push(Math.floor(Math.random() * (50 - 5 + 1)) + 5)
      }
      vm.fillData()
      vm.loaded = true
      }, 1000)
    }

  }
}
</script>

<style>
.loader-container {
  display: flex;
  justify-content: center;
}

.chart-loader {
  width: 150px;
}
</style>