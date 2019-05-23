<template>
  <v-card>
    <v-navigation-drawer fixed app permanent width="220px">
      <v-layout pt-0 column fill-height class="lightbox white--text">
        <v-flex shrink class="teal darken-2 px-2 py-3 text-xs-center">
          <div class="headline white-text">Assignments</div>
        </v-flex>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-btn
            v-for="item in items"
            :key="item.title"
            :to="item.route"
            exact
            exact-active-class="teal--text blockquote"
            flat
            block
          >
            <v-icon>{{item.icon}}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-list>
      </v-layout>
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
          title: "Lab 1",
          icon: "book",
          route: "/assignments/lab1"
        },
        {
          title: "Lab 2",
          icon: "book",
          route: "/assignments/lab2"
        },
        {
          title: "Lab 3",
          icon: "book",
          route: "/assignments/lab3"
        }
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