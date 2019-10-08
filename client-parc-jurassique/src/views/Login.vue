<template>
  <v-app dark>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
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
    password: ''
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
    }
  }
}
</script>
