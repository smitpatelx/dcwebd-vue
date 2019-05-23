<template>
  <v-container fluid class="pa-2">
    <v-layout align-start justify-center row>
      <v-flex xs12 md6 class="pa-3">
        <v-card color="teal darken-2" class="white--text elevation-5 rounded">
          <v-layout class="py-3 px-0">
            <v-flex xs4 class="ml-3 mt-2">
              <v-avatar color="transparent" size="120px">
                <v-img :src="user.avtarurl" contain></v-img>
              </v-avatar>
            </v-flex>
            <v-flex xs8>
              <v-card-title primary-title>
                <div>
                  <p class="headline">{{user.name}}</p>
                  <p class="subheading my-0 py-0">User ID : {{user.id }}</p>
                  <a class="white--text my-0 py-0" :href="'mailto:'+user.email">{{user.email}}</a>
                  <p class="subheading my-0 py-0">Joined : {{user.created_at | fDate}}</p>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider light></v-divider>
          <v-card-actions class="py-3 px-2 teal darken-3">
            Last Updated
            <v-spacer></v-spacer>
            <v-icon class="white--text">schedule</v-icon>
            <span class="ml-2">{{user.updated_at | fDate}}</span>
          </v-card-actions>
        </v-card>
        <v-form
          ref="password_form"
          v-model="valid.n1"
          lazy-validation
          class="elevation-6 pa-3 mt-4 text-xs-center rounded"
        >
          <div class="text-xs-left">
            <v-chip color="teal" class="subheading white--text">
              <v-icon small class="white--text pr-2">fingerprint</v-icon>Change Password
            </v-chip>
          </div>
          <v-text-field
            v-model.trim="old_password"
            :rules="old_passwordRule"
            label="Old Password"
            required
            :append-icon="show.n1 ? 'visibility' : 'visibility_off'"
            :type="show.n1 ? 'text' : 'password'"
            :counter="20"
            @click:append="show.n1 = !show.n1"
            autocomplete="NoAutocomplete"
          ></v-text-field>
          <v-text-field
            v-model.trim="new_password"
            :rules="new_passwordRule"
            label="New Password"
            required
            :append-icon="show.n2 ? 'visibility' : 'visibility_off'"
            :type="show.n2 ? 'text' : 'password'"
            :counter="20"
            @click:append="show.n2 = !show.n2"
            autocomplete="NoAutocomplete"
          ></v-text-field>
          <v-text-field
            v-model.trim="conf_password"
            :rules="conf_passwordRule"
            label="Confirm Password"
            required
            :append-icon="show.n3 ? 'visibility' : 'visibility_off'"
            :type="show.n3 ? 'text' : 'password'"
            :counter="20"
            @click:append="show.n3 = !show.n3"
            autocomplete="NoAutocomplete"
          ></v-text-field>

          <v-btn :disabled="!valid.n1" outline color="teal" @click="passwordSubmit">Change</v-btn>
          <v-btn outline color="red" @click="$refs.password_form.reset();">Reset</v-btn>
        </v-form>
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
  data: () => ({
    headers: [
      {
        text: "User ID",
        align: "center",
        sortable: false,
        value: "id"
      },
      {
        text: "First Name",
        value: "first_name",
        align: "center"
      },
      {
        text: "Last Name",
        value: "last_name",
        align: "center"
      },
      {
        text: "Email",
        value: "email",
        align: "center"
      },
      {
        text: "Action",
        value: "action",
        align: "center"
      }
    ],
    items: [
      {
        name: "Smit Patel",
        email: "emas@asd.ca"
      }
    ],
    valid: {
      n1: false,
      n2: false
    },
    apiURL: process.env.VUE_APP_APIURL,
    snackbarClass: "red white-text",
    showError: false,
    errorMessage: "",
    show: {
      n1: false,
      n2: false,
      n3: false,
      n4: false
    },
    old_password: "",
    old_passwordRule: [
      v => !!v || "Old password is required",
      v =>
        (v && (v.length <= 20 && v.length > 6)) ||
        "Old password must be between 6 to 20 characters"
    ],
    new_password: "",
    new_passwordRule: [
      v => !!v || "New password is required",
      v =>
        (v && (v.length <= 20 || v.length > 6)) ||
        "New password must be between 6 to 20 characters",
      v =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(
          v
        ) ||
        "Your password must be more than 6 characters long, should contain at-least 1 Uppercase, 1 Lowercase, 1 Numeric and 1 special character."
    ],
    conf_password: "",
    searchUser: ""
  }),

  methods: {
    passwordSubmit() {
      if (this.$refs.password_form.validate()) {
        axios
          .post(
            this.apiURL + "api/password/update",
            {
              old_password: this.old_password,
              new_password: this.new_password
            },
            {
              headers: {
                Authorization: "Bearer " + this.$cookies.get("access-token")
              }
            }
          )
          .then(val => {
            var message = val.data;
            this.snackbarClass = "success white-text";
            this.showError = true;
            this.errorMessage = message;
            this.$refs.password_form.reset();
          })
          .catch(error => {
            this.snackbarClass = "red white-text";
            this.showError = true;
            this.errorMessage = error;
          });
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    conf_passwordRule() {
      return [
        v => !!v || "Confirm password is required",
        v => (v && v === this.new_password) || "Confirm password doesn't match"
      ];
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
  }
};
</script>
<style>
.rounded {
  border-radius: 20px;
}
</style>
