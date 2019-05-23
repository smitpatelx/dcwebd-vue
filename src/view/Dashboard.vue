<template>
  <v-container fluid class="pa-0">
    <v-layout align-top justify-center row class="pa-0">
      <v-flex>
        <router-view name="navigation"/>
      </v-flex>
      <v-flex xs12 pa-4>
        <slide-x-right-transition origin="center" mode="out-in" :duration="300">
          <router-view/>
        </slide-x-right-transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { SlideXRightTransition } from "vue2-transitions";
import axios from "axios";
export default {
  components: {
    SlideXRightTransition
  },
  data() {
    return {
      apiURL: process.env.VUE_APP_APIURL,
      user: {}
    };
  },
  mounted() {
    axios
      .get(this.apiURL + "api/user", {
        headers: {
          Authorization: "Bearer " + this.$cookies.get("access-token")
        }
      })
      .then(val => {
        this.user = val.data;
        var avtarurl =
          "https://ui-avatars.com/api/?background=4DB6AC&name=" +
          this.user.name;
        this.user.avtarurl = avtarurl;
        this.$store.commit("mutateUser", this.user);
      })
      .catch(error => {
        // eslint-disable-next-line
        console.log(error);
      });
  }
};
</script>