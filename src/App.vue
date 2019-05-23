<template>
  <v-app id="app">
    <router-view name="header"></router-view>
    <v-content>
      <fade-transition origin="center" mode="out-in" :duration="300">
        <router-view/>
      </fade-transition>
    </v-content>
    <router-view name="footer"></router-view>
  </v-app>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
import axios from "axios";
export default {
  data() {
    return {
      apiURL: process.env.VUE_APP_APIURL
    };
  },
  components: {
    FadeTransition
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  },
  created() {
    axios
      .get(this.apiURL + "api/user", {
        headers: {
          Authorization: "Bearer " + this.$cookies.get("access-token")
        }
      })
      .catch(() => {
        if (this.$router.currentRoute.path.substring(0, 10) == "/dashboard") {
          this.$router.push({ name: "logout" });
        }
      });
  }
};
</script>
