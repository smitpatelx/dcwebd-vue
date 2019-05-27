<template>
  <v-container class="px-2 py-0">
    <v-layout align-start justify-center row wrap class="py-0">
      <v-btn
        color="white"
        class="teal lighten-2"
        flat
        dark
        @click.stop
      >Total Student : {{items.length}}</v-btn>
      <v-flex xs12 class="text-xs-center ma-0 pa-0">
        <v-text-field
          v-model="search"
          prepend-icon="fas fa-search teal--text"
          outline
          clear-icon="far fa-times-circle teal--text"
          clearable
          label="Find by any value"
          type="text"
          class="teal--text pt-4"
          @click:clear="search = ''"
          @keyup.esc="search = ''"
          color="teal"
          placeholder="Start typing..."
          autofocus
        >
          <template v-slot:append-outer>
            <v-btn
              small
              color="teal"
              fab
              @click="getallStudents(); (loading = !loading)"
              style="margin-top: -10px;"
            >
              <v-icon
                :class="loading ? 'fas fa-sync white--text text--lighten-3 fa-spin' : 'fas fa-sync white--text'"
              ></v-icon>
            </v-btn>
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  style="margin-top: -35px;"
                  v-model="dateFormatted"
                  label="Date"
                  persistent-hint
                  prepend-icon="event"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
            <v-menu
              ref="menu"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="time"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  style="margin-top: -35px;"
                  v-model="time"
                  label="Time"
                  persistent-hint
                  prepend-icon="access_time"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu2"
                v-model="time"
                format="24hr"
                full-width
                @click:minute="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
          </template>
        </v-text-field>
      </v-flex>
      <v-flex xs12 class="text-xs-center">
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

var newDate = new Date();
newDate.setMinutes(newDate.getMinutes() - 60);

export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    time: newDate.toString().substr(16, 5),
    menu2: false,
    modal2: false,
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
        text: "Student IP",
        value: "ipaddress",
        align: "center",
        class: "subheading"
      },
      {
        text: "Created at",
        value: "created_at",
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
    getallStudents() {
      axios
        .get(this.apiURL + "api/attendance", {
          headers: {
            Authorization: "Bearer " + this.$cookies.get("access-token")
          },
          params: {
            date: this.date,
            time: this.time
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
    registerFormLoad(id) {
      this.dialog.default = true;
      this.dialog.register = false;
      var user = this.items.filter(val => val.id === id);
      this.editId = user[0].id;
      this.first_name = user[0].first_name;
      this.last_name = user[0].last_name;
      this.student_number = user[0].student_number;
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    dialogOpenRegister() {
      this.dialog.default = true;
      this.dialog.register = true;
      this.$refs.form.reset();
    }
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
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
    },
    date() {
      this.dateFormatted = this.formatDate(this.date);
      this.getallStudents();
    },
    time() {
      this.getallStudents();
    }
  }
};
</script>

<style lang="css">
</style>
