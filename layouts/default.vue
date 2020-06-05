<template>
  <v-app>
    <v-content>
      <v-container>
        <Navbar v-if='this.$route.path !== "/login"'/>
        <nuxt />
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
