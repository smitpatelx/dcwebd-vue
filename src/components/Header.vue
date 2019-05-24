<template>
  <v-layout wrap class="pr-0">
    <v-toolbar app class="pr-0">
      <v-toolbar-title class="headline text-uppercase">
        <v-img width="100" :src="publicPath+'assets/dc_logo.png'">
          <div class="fill-height"></div>
        </v-img>
      </v-toolbar-title>
      <!-- <span
        class="teal--text text--darken-1 font-weight-medium headline pl-4 hidden-sm-and-down font-weight-regular"
      >WEBD 2201</span>-->
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">HOME</v-btn>
        <v-btn flat to="/handouts">Hand Outs</v-btn>
        <v-btn flat href="/dist">Documents</v-btn>
        <v-btn flat to="/attendance">Attendance</v-btn>
        <v-btn flat to="/dashboard" v-if="loggedIn">Dashboard</v-btn>

        <v-menu offset-y transition="slide-y-transition" open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn flat v-on="on">MORE</v-btn>
          </template>
          <v-list>
            <v-list-tile v-for="(item, index) in more" :key="index" :to="item.router">
              <v-list-tile-action>
                <v-icon class="teal--text text--darken-2">{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn flat :to="!loggedIn ? '/login' : '/logout' " v-on="on">
              <v-icon
                center
                :class="!loggedIn ? 'black--text fa-lg fas fa-sign-in-alt' : 'black--text fa-lg fas fa-sign-out-alt'"
              ></v-icon>
            </v-btn>
          </template>
          <span>{{ !loggedIn ? 'LOGIN' : 'LOGOUT'}}</span>
        </v-tooltip>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up">
        <v-btn flat @click.stop="drawer = !drawer">
          <v-icon>menu</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      disable-resize-watcher
      class="grey--text"
      width="220"
      @blur="drawer = false"
    >
      <v-layout column justify-space-between fill-height>
        <v-list class="pt-0" dense>
          <v-list-tile v-for="item in items" :key="item.title" :to="item.router">
            <v-list-tile-action>
              <v-icon class="teal--text text--darken-2">{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-for="(item, index) in more" :key="index" :to="item.router">
            <v-list-tile-action>
              <v-icon class="teal--text text--darken-2">{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-card>
          <v-divider></v-divider>
          <v-toolbar flat dense color="transparent">
            <v-spacer></v-spacer>
            <v-icon class="blue--text fab fa-battle-net mr-3"></v-icon>
            <a class="blue--text" href="https://netdevv.com" target="blank">NETDEVV</a>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-card>
      </v-layout>
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
// import { mapGetters } from "vuex";

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      drawer: false,
      items: [
        { title: "Home", icon: "dashboard", router: "/" },
        { title: "Login", icon: "check_box", router: "/login" },
        { title: "Hand Outs", icon: "book", router: "/handouts" },
        { title: "Dashboard", icon: "dashboard", router: "/dashboard" },
        {
          title: "Assignments",
          icon: "assignments",
          router: "/assignments"
        },
        {
          title: "Attendance",
          icon: "assignment_turned_in",
          router: "/attendance"
        }
      ],
      more: [
        { title: "Instructors", icon: "bubble_chart", router: "/instructors" },
        { title: "Software", icon: "cloud_download", router: "/software" },
        {
          title: "Important Dates",
          icon: "calendar_today",
          router: "/importantdates"
        }
      ]
    };
  },
  computed: {
    loggedIn() {
      var val = this.$store.getters.loggedIn;
      var newthis = this;
      if (val) {
        newthis.items[1] = {
          title: "Logout",
          icon: "indeterminate_check_box",
          router: "/logout"
        };
      } else {
        newthis.items[1] = {
          title: "Login",
          icon: "check_box",
          router: "/login"
        };
      }
      return val;
    }
  },
  methods: {},
  watch: {}
};
</script>