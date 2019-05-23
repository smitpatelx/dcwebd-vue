<template>
  <v-container fluid>
    <v-layout align-center justify-center row fill-height>
      <v-flex md6 sm12 class="white--text text--darken-2 hidden-sm-and-down" pa-4>
        <v-img :src="publicPath+'assets/undraw_collaboration2_8og0.svg'">
          <div class="fill-height"></div>
        </v-img>
      </v-flex>
      <v-flex md6 sm12 class="teal--text text--darken-4" pa-4>
        <v-card color="mx-auto elevation-6 rounded">
          <v-card-title primary-title pa-4 class="text-xs-left">
            <v-layout align-center justify-center row fill-height>
              <h3 class="headline mb-0 font-weight-medium teal--text text--darken-4">
                <v-icon large class="teal--text text--darken-4 pt-4 pr-3">supervised_user_circle</v-icon>
                <span>Users login</span>
              </h3>
            </v-layout>
            <v-layout align-center justify-center row fill-height>
              <blockquote class="blockquote subheading teal--text text--darken-4 pt-4">
                <b>Read privacy policy carefully.</b>
                <br>Your IP is being tracked.
                <br>
              </blockquote>
            </v-layout>
          </v-card-title>

          <v-form
            name="loginForm"
            ref="form"
            v-model="valid"
            lazy-validation
            class="pa-4 white--text"
          >
            <v-text-field
              v-model.trim="username"
              :counter="30"
              :rules="usernameRules"
              label="Email"
              required
              color="white"
              type="text"
            ></v-text-field>
            <v-text-field
              v-model.trim="password"
              :counter="15"
              :rules="passwordRules"
              label="Password"
              type="password"
              required
            ></v-text-field>
            <div class="text-xs-center">
              <v-btn :disabled="!valid" outline color="teal" @click="submit">Login</v-btn>
              <v-btn color="red" outline @click="reset">Reset Form</v-btn>
            </div>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar :color="snackbarClass" v-model="showError" bottom multi-line :timeout="6000">
      {{ errorMessage }}
      <v-btn round outline @click="showError = false">
        <span class="white--text">Close</span>
      </v-btn>
    </v-snackbar>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      apiURL: process.env.VUE_APP_APIURL,
      valid: true,
      username: null,
      password: null,
      snackbarClass: "red white-text",
      usernameRules: [
        v => !!v || "Username is required",
        v =>
          (v && (v.length < 31 && v.length > 4)) ||
          "Username must be between 4 & 30 characters"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && (v.length < 16 && v.length > 4)) ||
          "Password must be between 4 & 16 characters"
      ],
      showError: false,
      errorMessage: ""
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("retrieveToken", {
            username: this.username,
            password: this.password
          })
          .then(() => {
            this.$router.push({ name: "dashboard" });
          })
          .catch(error => {
            this.showError = true;
            this.errorMessage = error;
          });
      } else {
        this.showError = true;
        this.errorMessage = "Invalid data provided";
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  computed: {}
};
</script>
<style>
.rounded {
  border-radius: 20px;
}
</style>