<template>
  <v-container fluid>
    <v-layout align-center justify-center row fill-height style="min-height:80vh;">
      <span class="display-1" style="color:#14cea5;">LOGGING OUT | WAIT</span>
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
export default {
  data() {
    return {
      snackbarClass: "red white-text",
      showError: false,
      errorMessage: ""
    };
  },
  created() {
    this.$store
      .dispatch("destroyToken")
      .then(() => {
        this.$router.push({ name: "login" });
      })
      .catch(error => {
        this.showError = true;
        this.errorMessage = error;
        this.$router.push({ name: "login" });
      });
  }
};
</script>