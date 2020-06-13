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
        
    <div class="chart-input-container"> 
      <input v-model="dataEntry" class="chart-input" placeholder="Add new Data" type="text">
      <!-- <input v-model="labelEntry" class="chart-input" placeholder="Add new Label" type="text"> -->

      <select class="month-selector" v-model="labelEntry">
        <option v-for="month in months" :value="month" :key="month" :disabled="isSelectedMonth(month)">
          {{month}}
        </option>  
      </select>

      <v-btn class="primary" @click="updateDataSet()" :disabled="!isInputProvided">Add</v-btn>
    </div>
    
    <p class="mt-4">Or</p>
    
    <v-btn class="primary" @click="generateNewData()">Generate New Data</v-btn>

    <div class="loader-container">
      <img v-if="!loaded" class="chart-loader mt-3" src="../static/loader-dotted.gif" alt="">
    </div>

    <ChartLine v-if="loaded" :chart-data="dataCollection" :bind="true" />
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
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      customValues: [],
      loaded: false,
      errorDetected: false,
      emptyChartValues: false,
      dataEntry: null,
      labelEntry: 'August'
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
        labels: this.labels,
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
      this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

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
    },

    updateDataSet() {
      let vm = this
      if(this.dataEntry && this.labelEntry) {
        this.loaded = false
        this.emptyChartValues ? this.emptyChartValues = false : this.emptyChartValues
        //  wait 1 second before executing
        setTimeout(function() {
          vm.values.push(vm.dataEntry)
          vm.labels.push(vm.labelEntry)
          vm.fillData()
          vm.dataEntry = null
          vm.loaded = true
        }, 1000)
      } else {
        this.emptyChartValues = true
      }

    },

    isSelectedMonth(month) {
      for(let i=0; i<this.labels.length; i++) {
        if(this.labels[i] == month) 
          return true
      }
    }

  },
  computed: {
    isInputProvided() {
      if(this.dataEntry && this.labelEntry) {
        return true
      } 
      return false
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

.chart-input-container {
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.chart-input {
  width: 20%;
  border: none;
  border-bottom: 1px solid #111;
  margin-right: 10px;
}
.chart-input:focus {
  outline: none;
}

.month-selector {
  all: unset;
  font-size: 20px;
  width: 12%;
  color: #938b8b;
  border-radius: none;
  margin-right: 12px;
  border-bottom: 1px solid #111;
}

.month-selector:focus {
  outline: none;
}
</style>