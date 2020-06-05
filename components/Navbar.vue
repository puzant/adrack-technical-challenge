  
<template>  
  <v-container>
    <v-app-bar app>
      <v-toolbar-title>Main App</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="nav-link">
          <nuxt-link to="/">Home</nuxt-link>
        </div>
        <div class="nav-link">
          <nuxt-link to="/dashboard">Dashboard</nuxt-link>
        </div>
        <div class="nav-link">
          <a @click="logout()">Logout</a>
        </div>
      </v-app-bar>
    </v-container>
</template>


<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    logout() {
      localStorage.removeItem('userToken')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style>
.nav-link {
  margin: 10px;
}
 .nav-link a {
  text-decoration: none;
}
</style>