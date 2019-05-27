<template>
  <v-container fluid fill-height class="px-2 py-0">
    <v-layout align-start justify-center row fill-height class="py-0">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card class="text-xs-center">
          <v-card-text>
            <v-form ref="form" v-model="valid.n1" lazy-validation class="text-xs-center">
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      v-model.trim="first_name"
                      label="First Name"
                      :rules="nameRules"
                      :counter="20"
                      required
                      autocomplete="randomstring"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      v-model.trim="last_name"
                      label="Last name"
                      :rules="nameRules"
                      required
                      :counter="20"
                      autocomplete="randomstring"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model.trim="email"
                      :rules="emailRules"
                      label="E-mail"
                      counter
                      autocomplete="randomstring"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model.trim="password"
                      :rules="passwordRule"
                      label="Password"
                      required
                      :append-icon="show.n1 ? 'visibility' : 'visibility_off'"
                      :type="show.n1 ? 'text' : 'password'"
                      hint="At least 6 characters"
                      :counter="20"
                      @click:append="show.n1 = !show.n1"
                      autocomplete="randomstring"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-layout wrap>
              <v-flex xs12 class="text-xs-center">
                <v-btn color="teal darken-1" flat @click="dialog = false">Close</v-btn>
                <v-btn color="teal darken-1" flat @click="registerUser">Save</v-btn>
                <v-btn color="red" flat @click="$refs.form.reset();">Reset</v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-flex xs12 class="text-xs-center">
        <v-btn color="teal darken-2" outline dark @click.stop="dialog = true">Add New User</v-btn>
        <v-btn
          color="white"
          class="teal lighten-2"
          flat
          dark
          @click.stop
        >Total Users: {{items.length}}</v-btn>
        <v-text-field
          v-model="search"
          prepend-icon="fas fa-search teal--text"
          :append-outer-icon="loading ? 'fas fa-sync teal--text text--lighten-3 fa-spin' : 'fas fa-sync teal--text'"
          outline
          clear-icon="far fa-times-circle teal--text"
          clearable
          label="Find by name or email"
          type="text"
          class="teal--text pt-4"
          @click:append-outer="getallUsers(); (loading = !loading)"
          @click:clear="search = ''"
          @keyup.esc="search = ''"
          color="teal"
          placeholder="Start typing..."
          autofocus
        ></v-text-field>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          class="text-xs-center newstyle"
          style="min-height:500px;max-height:500px;overflow-y:scroll;"
          loading="teal"
          :rows-per-page-items="[20,50,{'text':'$vuetify.dataIterator.rowsPerPageAll','value':-1}]"
        >
          <template v-slot:items="props" class="text-xs-center">
            <td class="text-xs-center">{{ props.item.id }}</td>
            <td class="text-xs-center">{{ props.item.name | first_name }}</td>
            <td class="text-xs-center">{{ props.item.name | last_name }}</td>
            <td class="text-xs-center">{{ props.item.email }}</td>
            <td class="text-xs-center">{{ props.item.created_at | fDate }}</td>
            <td class="text-xs-center">
              <v-icon class="red--text" @click="deleteUser(props.item.id)">delete</v-icon>
            </td>
          </template>
          <template v-slot:no-results>
            <v-alert
              :value="true"
              color="grey"
              icon="warning"
            >Your search for "{{ search }}" found no results.</v-alert>
          </template>
        </v-data-table>
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
import axios from "axios";
import { setTimeout } from "timers";
export default {
  data: () => ({
    loading: false,
    headers: [
      {
        text: "User ID",
        align: "center",
        sortable: false,
        value: "id",
        class: "subheading"
      },
      {
        text: "First Name",
        value: "name",
        align: "center",
        class: "subheading"
      },
      {
        text: "Last Name",
        value: "last_name",
        sortable: false,
        align: "center",
        class: "subheading"
      },
      {
        text: "Email",
        value: "email",
        align: "center",
        class: "subheading"
      },
      {
        text: "Created at",
        value: "created_at",
        align: "center",
        class: "subheading"
      },
      {
        text: "Action",
        value: "action",
        sortable: false,
        align: "center",
        class: "subheading"
      }
    ],
    items: [
      {
        id: 1,
        name: "Smit Patel",
        email: "emas@asd.ca"
      }
    ],
    apiURL: process.env.VUE_APP_APIURL,
    first_name: null,
    last_name: null,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 30) || "Name must be less than 30 characters",
      v => /^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/g.test(v) || "Invalid Name"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /^.+@[^.].*\.[a-z]{2,}$/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRule: [
      v => !!v || "Password is required",
      v =>
        (v && (v.length <= 20 && v.length > 6)) ||
        "Password must be between 6 to 20 characters",
      v =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(
          v
        ) ||
        "Your password must be more than 6 characters long, should contain at-least 1 Uppercase, 1 Lowercase, 1 Numeric and 1 special character."
    ],
    snackbarClass: "red white-text",
    showError: false,
    errorMessage: "",
    show: {
      n1: false
    },
    valid: {
      n1: false
    },
    search: "",
    dialog: false
  }),

  methods: {
    registerUser() {
      if (this.$refs.form.validate()) {
        axios
          .post(
            this.apiURL + "api/register",
            {
              email: this.email,
              password: this.password,
              name: this.first_name + " " + this.last_name
            },
            {
              headers: {
                Authorization: "Bearer " + this.$cookies.get("access-token")
              }
            }
          )
          .then(val => {
            this.dialog = false;
            var message = "User " + val.data.name + " registered successfully.";
            this.snackbarClass = "success white-text";
            this.showError = true;
            this.errorMessage = message;
            this.$refs.form.reset();
            this.getallUsers();
          })
          .catch(error => {
            this.dialog = true;
            this.snackbarClass = "red white-text";
            this.showError = true;
            this.errorMessage = error;
          });
      }
    },
    getallUsers() {
      axios
        .get(this.apiURL + "api/users", {
          headers: {
            Authorization: "Bearer " + this.$cookies.get("access-token")
          }
        })
        .then(val => {
          this.items = val.data;
        })
        .catch(error => {
          this.snackbarClass = "red white-text";
          this.showError = true;
          this.errorMessage = error;
        });
    },
    deleteUser(val) {
      axios
        .delete(this.apiURL + "api/user/delete", {
          params: {
            user_id: val
          },
          headers: {
            Authorization: "Bearer " + this.$cookies.get("access-token")
          }
        })
        .then(data => {
          var message = data.data;
          this.snackbarClass = "success white-text";
          this.showError = true;
          this.errorMessage = message;
          this.getallUsers();
        })
        .catch(error => {
          this.snackbarClass = "red white-text";
          this.showError = true;
          this.errorMessage = error;
        });
    }
  },
  computed: {},
  created() {
    this.getallUsers();
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
    },
    first_name(val) {
      var nameArray = val.split(" ");
      return nameArray[0];
    },
    last_name(val) {
      var nameArray = val.split(" ");
      return nameArray[1];
    }
  },
  watch: {
    loading(val) {
      setTimeout(() => {
        if (val) {
          this.loading = !val;
        }
      }, 2500);
    }
  }
};
</script>

<style lang="css">
</style>
