<template>
  <!-- <v-card style="min-height:85vh; overflow-y:scroll;"> -->
  <v-card>
    <v-navigation-drawer fixed app permanent width="220px">
      <v-img :aspect-ratio="18.2/9" :src="publicPath + 'assets/16.jpg'">
        <v-layout pt-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex shrink class="px-3" style="background:rgba(0, 0, 0, 0.32);">
            <div class="subheading">{{user.name}}</div>
            <div class="body-1">{{user.email}}</div>
          </v-flex>
        </v-layout>
      </v-img>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" :to="item.route" exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      apiURL: process.env.VUE_APP_APIURL,
      drawer: true,
      items: [
        {
          title: "Your Profile",
          icon: "person",
          route: "/dashboard/profile"
        },
        {
          title: "Users",
          icon: "person_add",
          route: "/dashboard/users"
        },
        {
          title: "Students",
          icon: "supervised_user_circle",
          route: "/dashboard/students"
        },
        { title: "Attendance", icon: "dashboard", route: "/dashboard/" },
        { title: "Secret", icon: "security", route: "/dashboard/secret" }
      ],
      right: null
    };
  },
  created() {},
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>