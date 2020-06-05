<template>
  <v-form align="center">
     <v-alert v-if="missingCredentials"
      dense
      outlined
      type="error"
    >
      Please provide an <strong>Email</strong> and a <strong>Password</strong>
    </v-alert>

    <v-alert v-if="wrongCredentials"
      dense
      outlined
      type="error"
    >
     <strong>Email</strong> or <strong>Password</strong> is wrong
    </v-alert>

    <v-alert v-if="networkError"
      dense
      outlined
      type="error"
    >
     There was a network problem, please try again
    </v-alert>

    <h1>Login to the Dashboard</h1>

     <p>Use the following Credentials to login to the Dashboard</p>
    <div class="font-weight-light">eve.holt@reqres.in</div>
    <div class="font-weight-light">cityslicka</div>

    <v-container class="mt-4">
      <v-row class="justify-lg-center">
        <v-col 
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="input.email"
            :counter="10"
            label="Email"
            @keypress="muteError()"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      

      <v-row class="justify-lg-center">
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="input.password"
            :counter="10"
            label="Password"
            @keypress="muteError()"
            required
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
    <v-btn class="ma-2" color="primary" @click="login()">Login</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      missingCredentials: false,
      wrongCredentials: false,
      networkError: false,
      input: {
        email: "",
        password: ""
      }
    }
  }, 
  methods: {
    login() {
      if(this.input.email == "" || this.input.password == "") {
        this.missingCredentials = true
      } else if(this.input.email == "eve.holt@reqres.in" && this.input.password == "cityslicka") {
          this.$axios
          .$post('https://reqres.in/api/login', {
          email: "eve.holt@reqres.in",
          password: "cityslicka"
          }).then(res => {
            //  in case the token was wrong redirct back to the login page
            if(res.token !== "QpwL5tke4Pnpja7X4") {
              this.redirect('/login')
            } else {
              this.$router.push({ path: '/' })
              //  add the token in the localStorage
              localStorage.setItem('userToken', res.token)
            }
          }).catch(error => {
            //  in case of network error
            this.networkError = true
            console.log(error)
          })
      } else {
        this.wrongCredentials = true
      }
    },
    muteError() {
      this.missingCredentials ? this.missingCredentials = false : this.missingCredentials;
      this.wrongCredentials ? this.wrongCredentials = false : this.wrongCredentials;
      this.networkError ? this.networkError = false : this.networkError;
    }
  }
}
</script>