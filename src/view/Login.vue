<template>
  <v-container fluid style="height:100vh; overflow:hidden;" pa-0>
    <v-layout align-start justify-center row fill-height pa-0>
      <v-flex
        md4
        sm12
        class="teal--text text--darken-4"
        pa-5
        style="box-shadow: 10px 0px 17px -12px rgba(0,0,0,0.75);height:100vh;"
      >
        <v-img width="100" class="ml-4 login-dc-logo" :src="publicPath+'assets/dc_logo.png'">
          <div class="fill-height"></div>
        </v-img>

        <p class="black--text display-1 pl-4 font-weight-black">
          <v-btn flat icon color="#14cea5" to="/">
            <v-icon class="pl-2">arrow_back_ios</v-icon>
          </v-btn>Log in
          <span class="grey--text title pl-4 font-weight-regular">Sign Up</span>
        </p>
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
            required
            outline
            placeholder="yourname@dcmail.com"
            dont-fill-mask-blanks
            single-line
            color="#14cea5"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model.trim="password"
            :counter="15"
            :rules="passwordRules"
            type="password"
            placeholder="password"
            required
            single-line
            dont-fill-mask-blanks
            color="#14cea5"
            outline
          ></v-text-field>
          <div class="text-md-left text-xs-center">
            <v-btn
              :disabled="!valid"
              color="#14cea5"
              class="white--text btn-custom"
              @click="submit"
            >Login</v-btn>
            <v-btn color="#14cea5b5" class="white--text btn-custom" @click="reset">Reset</v-btn>
          </div>
        </v-form>
        <div class="pl-4 mt-4 pt-4 grey--text text--lighten-1">
          <p>
            <v-icon class="px-2 grey--text text--lighten-1">fas fa-shield-alt fa-lg</v-icon>Manage Students Data
          </p>
          <p>
            <v-icon class="px-2 grey--text text--lighten-1">fas fa-bug fa-lg</v-icon>Detect Policy Violation
          </p>
          <p>
            <v-icon class="px-2 grey--text text--lighten-1">far fa-comment-alt fa-lg</v-icon>Join Chat Rooms
          </p>
        </div>
      </v-flex>
      <v-flex md8 sm12 class="white--text text--darken-2 hidden-sm-and-down">
        <v-img :src="publicPath+'assets/login-3.svg'" aspect-ratio="1.7" style="height:100vh;">
          <div class="fill-height"></div>
        </v-img>
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
.input-field-custom {
  border: 1.5px solid rgb(117, 117, 117);
}
.btn-custom {
  font-size: 0.9rem;
  text-transform: none;
}
.custom--text {
  color: #22d187;
}
.login-dc-logo {
  margin-bottom: 6rem;
}
.v-input__slot {
  border-color: #14cea6d2 !important;
}
</style>