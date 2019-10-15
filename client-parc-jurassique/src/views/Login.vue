<template>
  <v-app dark>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>I already have an account</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Username" name="username" v-model="username" type="text"></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>

                <v-btn color="primary" @click="loginAPI">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>I don't have an account</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Username" name="username2" v-model="username2" type="text"></v-text-field>

                  <v-text-field
                    id="password2"
                    label="Password2"
                    name="password2"
                    v-model="password2"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>

                <v-btn color="primary" @click="createAccount">Create an account</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-footer fixed color="transparent">
      <div class="alert">
        <v-alert
          :value="alertSignUp"
          border="left"
          close-text="Close Alert"
          transition="scale-transition"
          class="transition-swing"
          color="success"
          dark
          dismissible
        >Utilisateur créé avec succès ! vous pouvez maintenant vous connecter</v-alert>

        <v-alert
          :value="alertLogin"
          border="left"
          close-text="Close Alert"
          transition="scale-transition"
          class="transition-swing"
          color="error"
          dark
          dismissible
        >Utilisateur ou mot de passe erroné</v-alert>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    overlay: false,
    username: '',
    password: '',
    username2: '',
    password2: '',
    alertLogin: false,
    alertSignUp: false
  }),
  methods: {
    loginAPI: function () {
      var self = this
      this.overlay = !this.overlay
      this.axios
        .post('https://serveur-parc-jurassique.glitch.me/api/login', {
          username: this.username,
          password: this.password
        })
        .then(res => {
          this.$store.state._user = this.username
          this.overlay = !this.overlay
          this.$router.push({ path: 'home' })
        })
        .catch(function (error) {
          self.overlay = !self.overlay
          self.alertLogin = true

          console.log(error)
        })
    },

    createAccount: function alertSignUp () {
      this.overlay = !this.overlay
      this.axios
        .post('https://serveur-parc-jurassique.glitch.me/api/signup', {
          username: this.username2,
          password: this.password2
        })
        .then(res => {
          this.overlay = !this.overlay
          this.alertSignUp = true
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.alert{
  width: 100%;
}
</style>
