<template>
  <v-container fluid text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 pa-4>
        <v-btn color="teal" outline @click="$router.go(-1)">Go back to last page</v-btn>
      </v-flex>
      <v-flex xs12 class="grey--text text--darken-2" pa-4>
        <v-img
          width="70%"
          contain
          position="center"
          class="mx-auto"
          :src="publicPath+'assets/undraw_page_not_found_su7k.svg'"
        >
          <div class="fill-height"></div>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>