<script>
  //Importing Line class from the vue-chartjs wrapper
  import { Line, mixins } from 'vue-chartjs'

  //Exporting this so it can be used in other components
  export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    data () {
      return {
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