<template>
  <v-container fluid fill-height class="px-2 py-0">
    <v-layout align-start justify-center row fill-height class="py-0">
      <v-dialog v-model="dialog.default" persistent max-width="600px">
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
                      :disabled="dialog.register ? false : true"
                      v-model.trim="student_number"
                      :rules="studentNumberRules"
                      label="Student Number"
                      :counter="9"
                      autocomplete="randomstring"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-layout wrap>
              <v-flex xs12 class="text-xs-center">
                <v-btn color="teal darken-1" flat @click="dialog.default = false">Close</v-btn>
                <v-btn
                  color="teal darken-1"
                  flat
                  @click="dialog.register ? registerStudent() : editUser()"
                >Save</v-btn>
                <v-btn color="red" flat @click="$refs.form.reset();">Reset</v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-flex xs12 class="text-xs-center">
        <v-btn color="teal darken-2" outline dark @click="dialogOpenRegister">Add New Student</v-btn>
        <v-btn
          color="white"
          class="teal lighten-2"
          flat
          dark
          @click.stop
        >Total Students: {{items.length}}</v-btn>
        <v-text-field
          v-model="search"
          prepend-icon="fas fa-search teal--text"
          :append-outer-icon="loading ? 'fas fa-sync teal--text text--lighten-3 fa-spin' : 'fas fa-sync teal--text'"
          outline
          clear-icon="far fa-times-circle teal--text"
          clearable
          label="Find by any value"
          type="text"
          class="teal--text pt-4"
          @click:append-outer="getallStudents & (loading = !loading)"
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
            <td class="text-xs-center">{{ props.item.student_number }}</td>
            <td class="text-xs-center">{{ props.item.first_name }}</td>
            <td class="text-xs-center">{{ props.item.last_name }}</td>
            <td class="text-xs-center">{{ props.item.ipaddress }}</td>
            <td class="text-xs-center">{{ props.item.created_at | fDate }}</td>
            <td class="text-xs-center">
              <v-btn icon ripple depressed small @click="registerFormLoad(props.item.id)">
                <v-icon class="grey--text">edit</v-icon>
              </v-btn>
              <v-btn icon ripple depressed small @click="deleteStudent(props.item.id)">
                <v-icon class="red--text">delete</v-icon>
              </v-btn>
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
        text: "Student ID",
        align: "center",
        sortable: false,
        value: "student_number",
        class: "subheading"
      },
      {
        text: "First Name",
        value: "first_name",
        align: "center",
        class: "subheading"
      },
      {
        text: "Last Name",
        value: "last_name",
        align: "center",
        class: "subheading"
      },
      {
        text: "Agent IP",
        value: "ipaddress",
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
    items: [],
    apiURL: process.env.VUE_APP_APIURL,
    first_name: null,
    last_name: null,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 30) || "Name must be less than 30 characters",
      v => /^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/g.test(v) || "Invalid Name"
    ],
    student_number: null,
    studentNumberRules: [
      v => !!v || "Student Number is required",
      v => /^[0-9]{9}$/.test(v) || "Student number must be valid"
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
    dialog: {
      default: false,
      register: true
    },
    editId: null
  }),

  methods: {
    registerStudent() {
      if (this.$refs.form.validate()) {
        axios
          .post(
            this.apiURL + "api/students",
            {
              first_name: this.first_name,
              last_name: this.last_name,
              student_number: this.student_number,
              ipaddress: this.ipaddress[0]
            },
            {
              headers: {
                Authorization: "Bearer " + this.$cookies.get("access-token")
              }
            }
          )
          .then(val => {
            this.dialog.default = false;
            var message =
              "Student " +
              val.data.student_number +
              " registered successfully.";
            this.snackbarClass = "success white-text";
            this.showError = true;
            this.errorMessage = message;
            this.$refs.form.reset();
            this.getallStudents();
          })
          .catch(error => {
            this.dialog.default = true;
            this.snackbarClass = "red white-text";
            this.showError = true;
            this.errorMessage = error;
          });
      }
    },
    getallStudents() {
      axios
        .get(this.apiURL + "api/students", {
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
    deleteStudent(val) {
      axios
        .delete(this.apiURL + "api/students/" + val, {
          params: {},
          headers: {
            Authorization: "Bearer " + this.$cookies.get("access-token")
          }
        })
        .then(data => {
          var message = data.data;
          this.snackbarClass = "success white-text";
          this.showError = true;
          this.errorMessage = message;
          this.getallStudents();
        })
        .catch(error => {
          this.snackbarClass = "red white-text";
          this.showError = true;
          this.errorMessage = error;
        });
    },
    registerFormLoad(id) {
      this.dialog.default = true;
      this.dialog.register = false;
      var user = this.items.filter(val => val.id === id);
      this.editId = user[0].id;
      this.first_name = user[0].first_name;
      this.last_name = user[0].last_name;
      this.student_number = user[0].student_number;
    },
    editUser() {
      if (this.$refs.form.validate()) {
        axios
          .put(
            this.apiURL + "api/students/" + this.editId,
            {
              first_name: this.first_name,
              last_name: this.last_name,
              student_number: this.student_number,
              ipaddress: this.ipaddress[0]
            },
            {
              headers: {
                Authorization: "Bearer " + this.$cookies.get("access-token")
              }
            }
          )
          .then(val => {
            this.dialog.default = false;
            var message = val.data;
            this.snackbarClass = "success white-text";
            this.showError = true;
            this.errorMessage = message;
            this.$refs.form.reset();
            this.getallStudents();
          })
          .catch(error => {
            this.dialog.default = true;
            this.snackbarClass = "red white-text";
            this.showError = true;
            this.errorMessage = error;
          });
      }
    },
    dialogOpenRegister() {
      this.dialog.default = true;
      this.dialog.register = true;
      this.$refs.form.reset();
    }
  },
  computed: {
    ipaddress() {
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

      return ip;
    }
  },
  created() {
    this.getallStudents();
    console.log(this.ipaddress);
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
