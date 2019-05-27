<template>
  <v-container fluid>
    <v-layout align-center justify-center fill-height row>
      <v-flex xs12 sm12 md6>
        <v-card class="pa-4 text-xs-center">
          <v-form ref="secretForm">
            <v-card-text class="grey--text">
              <span class="black--text">Current Secret :</span>
              {{currentSecret.secret}}
              <v-icon
                small
                @click="copySecret(currentSecret.secret)"
                class="px-2 black--text"
              >fas fa-copy</v-icon>
            </v-card-text>
            <v-card-text class="grey--text">
              <span class="black--text">Created At :</span>
              {{currentSecret.created_at | fDate}}
            </v-card-text>
            <v-card-text class="grey--text">
              <span class="black--text">Updated At :</span>
              {{currentSecret.updated_at | fDate}}
            </v-card-text>
            <v-text-field
              label="New Secret"
              v-model="newSecret"
              class="mt-2"
              :rules="newSecretRule"
            >
              <template v-slot:append-outer>
                <v-icon @click="generateRandom" class="px-2">fas fa-redo-alt</v-icon>
                <v-icon @click="copySecret(newSecret)" class="px-2 black--text">fas fa-copy</v-icon>
              </template>
            </v-text-field>

            <v-btn color="teal lighten-1" class="white--text" @click="updateSecret">Submit</v-btn>
            <v-btn
              color="red lighten-1"
              class="white--text"
              @click="$refs.secretForm.reset();"
            >Reset</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout align-start justify-center row>
      <v-snackbar :color="snackbarClass" v-model="showError" bottom multi-line :timeout="6000">
        {{ errorMessage }}
        <v-btn round outline @click="showError = false">
          <span class="white--text">Close</span>
        </v-btn>
      </v-snackbar>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      apiURL: process.env.VUE_APP_APIURL,
      currentSecret: {},
      newSecret: "",
      snackbarClass: "red white-text",
      showError: false,
      errorMessage: "",
      newSecretRule: [
        v => !!v || "New secret is required",
        v =>
          (v && (v.length <= 20 && v.length > 4)) ||
          "New secret must be between 4 to 20 characters"
      ]
    };
  },
  methods: {
    getSecret() {
      axios
        .get(this.apiURL + "api/secret")
        .then(data => {
          this.currentSecret = data.data;
        })
        .catch(error => {
          this.snackbarClass = "red white-text";
          this.showError = true;
          this.errorMessage = error;
        });
    },
    updateSecret() {
      if (this.$refs.secretForm.validate()) {
        axios
          .patch(
            this.apiURL + "api/secret/update/" + this.currentSecret.id,
            {
              secret: this.newSecret
            },
            {
              headers: {
                Authorization: "Bearer " + this.$cookies.get("access-token")
              }
            }
          )
          .then(() => {
            this.snackbarClass = "green white-text";
            this.showError = true;
            this.errorMessage = "Secret Updated Successfully";
            this.getSecret();
          })
          .catch(error => {
            this.snackbarClass = "red white-text";
            this.showError = true;
            this.errorMessage = error;
          });
      }
    },
    copySecret(val) {
      var el = document.createElement("textarea");
      // Set value (string to be copied)
      el.value = val;
      // Set non-editable to avoid focus and move outside of view
      el.setAttribute("readonly", "");
      el.style = { position: "absolute", display: "none" };
      document.body.appendChild(el);
      // Select text inside element
      el.select();
      document.execCommand("copy");
    },
    generateRandom() {
      var length = 10;
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      this.newSecret = result;
    }
  },
  filters: {
    fDate: function(value) {
      var currentDate = new Date(value);
      var date = currentDate.getDate();
      var month = currentDate.getMonth();
      var year = currentDate.getFullYear();

      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;

      var dateString = date + "-" + (month + 1) + "-" + year + "  " + strTime;
      return dateString;
    }
  },
  created() {
    this.getSecret();
  }
};
</script>