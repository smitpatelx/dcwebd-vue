<template>
  <v-container fluid text-xs-center>
    <v-layout row wrap>
      <v-flex md6 xs12 class="grey--text text--darken-2" pa-4>
        <v-img :src="publicPath+'assets/undraw_authentication_fsn5.svg'" class="hidden-sm-and-down">
          <div class="fill-height"></div>
        </v-img>
      </v-flex>

      <v-flex md6 xs12 class="grey--text text--darken-2" pa-4>
        <p class="headline">WEBD2201 Attendance Tracker</p>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model.trim="studentNumber"
            :counter="9"
            :rules="stdNumRules"
            label="Student Number"
            required
          ></v-text-field>
          <v-text-field
            v-model.trim="firstName"
            :counter="15"
            :rules="firstNameRules"
            label="First Name"
            required
          ></v-text-field>
          <v-text-field
            v-model.trim="lastName"
            :counter="15"
            :rules="lastNameRules"
            label="Last Name"
            required
          ></v-text-field>
          <v-text-field v-model.trim="secretWord" :rules="secretRules" label="Secret Word" required></v-text-field>

          <v-btn :disabled="!valid" outline color="teal" @click="submit">Submit</v-btn>

          <v-btn color="red" outline @click="reset">Reset Form</v-btn>
        </v-form>

        <v-snackbar :color="snackbarClass" v-model="showError" bottom multi-line :timeout="6000">
          {{ errorMessage }}
          <v-btn round outline @click="showError = false">
            <span class="white--text">Close</span>
          </v-btn>
        </v-snackbar>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      apiURL: process.env.VUE_APP_APIURL,
      valid: true,
      studentNumber: "",
      firstName: "",
      lastName: "",
      secretWord: "",
      snackbarClass: "red white-text",
      showError: false,
      errorMessage: "",
      firstNameRules: [
        v => !!v || "First name is required",
        v =>
          (v && (v.length <= 15 && v.length > 2)) ||
          "First name must be between 2 & 16 characters"
      ],
      lastNameRules: [
        v => !!v || "Last name is required",
        v =>
          (v && (v.length <= 15 && v.length > 2)) ||
          "Last name must be between 2 & 16 characters"
      ],
      stdNumRules: [
        v => !!v || "Student Number is required",
        v => (v && v.length == 9) || "Student Number must be 9 characters",
        v => (v && !isNaN(v)) || "Student Number must be numerical",
        v =>
          (v && this.validStudentNumber) ||
          "Student Number doesn't present in database. Contact your moderator"
      ],
      secretRules: [
        v => !!v || "Secret word is required",
        v =>
          (v && v.length > 2) ||
          "Secret word must be greater than 2 characters",
        v => (v && v == this.correctSecret) || "Secret word is incorrect"
      ],
      studentNumbers: null,
      correctSecret: "secret",
      ipaddress: []
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        axios
          .post(this.apiURL + "api/attendance", {
            first_name: this.firstName,
            last_name: this.lastName,
            secret: this.secretWord,
            student_number: this.studentNumber,
            ipaddress: this.ipaddress[0]
          })
          .then(data => {
            this.showError = true;
            this.snackbarClass = "green white-text";
            this.errorMessage =
              "Thank-you " +
              data.data.first_name +
              " " +
              data.data.last_name +
              ". You are awesome !";
          })
          .catch(error => {
            this.showError = true;
            this.snackbarClass = "red white-text";
            this.errorMessage = error.message;
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    getIp() {
      var ip = false;
      window.RTCPeerConnection =
        window.RTCPeerConnection ||
        window.mozRTCPeerConnection ||
        window.webkitRTCPeerConnection ||
        false;

      if (window.RTCPeerConnection) {
        ip = [];
        var pc = new RTCPeerConnection({ iceServers: [] }),
          noop = function() {};
        pc.createDataChannel("");
        pc.createOffer(pc.setLocalDescription.bind(pc), noop);

        pc.onicecandidate = function(event) {
          if (event && event.candidate && event.candidate.candidate) {
            var s = event.candidate.candidate.split("\n");
            ip.push(s[0].split(" ")[4]);
          }
        };
      }
      this.ipaddress = ip;
    }
  },
  computed: {
    validStudentNumber() {
      var validStudent = this.studentNumbers.filter(
        data => parseInt(data) === parseInt(this.studentNumber)
      ).length;
      var returnValue = false;
      if (validStudent) {
        returnValue = true;
      }
      return returnValue;
    }
  },
  mounted() {
    axios.get(this.apiURL + "api/getstudentid").then(data => {
      this.studentNumbers = data.data;
    });
    axios.get(this.apiURL + "api/secret").then(data => {
      this.correctSecret = data.data.secret;
    });
    this.getIp();
  }
};
</script>
