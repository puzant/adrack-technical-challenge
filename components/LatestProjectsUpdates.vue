<template lang="pug">
  
  .lpu-container
    .lpu-title-setting-container
      .lpu-title  Latest Projects Updates
      .lpu-setting-icon-container
        img.lpu-settings-icon( src="https://www.pikpng.com/pngl/m/258-2584646_how-to-set-use-blue-gear-cog-svg.png" )
    .lpu-underline

    .lpu-projects-update-container( v-for="update in updates" :key="updates.project_name")
      .lpu-project-update
        .lpu-project-title {{update.project_name}}
        .lpu-user-avatar-container
          img.lpu-user-avatar( src="https://img.icons8.com/color/30/000000/circled-user-female-skin-type-3.png" )
          span.lpu-update-text {{update.member}}, Some minutes ago
        .lpu-status-container
          .lpu-status-text Status: 
          template(v-if='update.status == "suspended" ')
            .lpu-suspended-status
          template(v-else-if='update.status == "active" ')
            .lpu-active-status
          template(v-else-if='update.status == "cancelled" ')
            .lpu-cancelled-status
          .lpu-status-text {{update.status}}

      .lpu-underline(style="margin-top:7px")

</template>

<script>
export default {
  data() {
    return {
      updates: null
    }
  },
  mounted() {
    this.requestData()
  },
  methods: {
    requestData() {
      this.$axios.get('https://run.mocky.io/v3/0d924ae7-93b8-4249-8e78-b57a4f2f74c2').then(response => {
        this.updates = response.data.projects
        console.log("requestData -> updates", this.updates)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="sass">
.lpu-container
  background-color: #f1f1f1
  width: 35%
  border-radius: 5px
  padding: 10px

.lpu-title-setting-container
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center

.lpu-settings-icon
  width: 20px

.lpu-setting-icon-container
  display: flex
  align-self: center
  &:hover
    cursor: pointer

.lpu-projects-update-container
  margin-top: 5px

.lpu-project-title
  color: #6087eb
  font-size: 12px
  font-weight: bold

.lpu-user-avatar-container
  margin-top: 4px
  background: #7d9bf5
  color: #fff
  border-radius: 15px 15px
  display: flex
  align-items: center

.lpu-status-container
  display: flex
  margin-top: 5px

.lpu-project-update
  margin-top: 12px

.lpu-suspended-status
  height: 15px
  width: 15px
  border-radius: 50%
  background-color: #ffbf00
  display: flex
  align-self: center
  margin-left: 5px

.lpu-active-status
  height: 15px
  width: 15px
  border-radius: 50%
  background-color: #7fe070
  display: flex
  align-self: center
  margin-left: 5px

.lpu-cancelled-status
  height: 15px
  width: 15px
  border-radius: 50%
  background-color: #cc3904
  display: flex
  align-self: center
  margin-left: 5px


.lpu-status-text
  margin-left: 5px

.lpu-underline
  border-bottom: 1px solid #aab0a9
</style>