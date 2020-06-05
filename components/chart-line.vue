<template>
  <div class="card">
    <!-- <div class="card-body">
      <h2 class="card-title">Line</h2>

      <div class="btn-group btn-group-toggle">
        <label
          v-for="(item, index) in btn"
          :key="index"
          :class="{ active: item.value == radio }"
          class="btn btn-success"
        >
          <input
            v-model="radio"
            :name="dataLabel"
            :value="item.value"
            type="radio"
          />
          {{ item.label }}
        </label>
      </div>
    </div> -->

    <div class="loader-container">
      <img v-if="!loaded" class="chart-loader mt-3" src="../static/loader-dotted.gif" alt="">
    </div>

    <div class="card-img-bottom" v-if="loaded">
      <chartjs-line
        :backgroundcolor="bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="borderColor"
        :data="chartData.value"
        :datalabel="dataLabel"
        :labels="chartData.week"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorDetected: false,
      loaded: false,
      chartData: {},
      bgColor: "#5b88e3",
      beginZero: true,
      borderColor: "#5b88e3",
      dataLabel: "Test",
    };
  },

  mounted() {
    this.loaded = false
    //  added a delay of 4 seconds to simulate a real server delay
    fetch("http://www.mocky.io/v2/5ed90ffd31000053b2c4eb09?mocky-delay=3000ms")
      .then(response => response.json())
      .then(json => {
        this.chartData = json
        this.loaded = true
      })
  },

};
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