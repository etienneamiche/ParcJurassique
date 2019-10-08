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
    password2: ''
  }),
  methods: {
    loginAPI: function () {
      this.overlay = !this.overlay
      this.axios
        .post('https://serveur-parc-jurassique.glitch.me/api/login', {
          username: this.username,
          password: this.password
        })
        .then((res) => {
          this.overlay = !this.overlay
          this.$router.push({ path: 'home' })
          console.log(res)
        })
        .catch(function (error) {
          this.$router.push({ path: '/' })
          console.log(error)
        })
    },

    createAccount: function () {
      this.overlay = !this.overlay
      this.axios
        .post('https://serveur-parc-jurassique.glitch.me/api/signup', {
          username: this.username2,
          password: this.password2
        })
        .then((res) => {
          this.overlay = !this.overlay
          console.log(res)
        })
        .catch(function (error) {
          this.$router.push({ path: '/' })
          console.log(error)
        })
    }
  } }
</script>
