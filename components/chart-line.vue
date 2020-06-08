<script>
  //Importing Line class from the vue-chartjs wrapper
  import { Line, mixins } from 'vue-chartjs'

  //Exporting this so it can be used in other components
  export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    // props:['chartData'],
    data () {
      return {
        // datacollection: {
        //   //Data to be represented on x-axis
        //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //   datasets: [
        //     {
        //       label: "Data 1",
        //       backgroundColor: "transparent",
        //       borderColor: "rgba(1, 116, 188, 0.50)",
        //       pointBackgroundColor: "rgba(171, 71, 188, 1)",
        //       //Data to be represented on y-axis
        //       data: this.chartData
        //     }
        //   ],
        // },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
        //Chart.js options that controls the appearance of the chart
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.chartData, this.options)
    }
  }
</script>