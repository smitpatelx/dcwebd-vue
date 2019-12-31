<template>
  <v-layout align-end justify-center row fill-height class="pr-0">
    <v-flex xs12>
      <v-footer height="auto" color="teal darken-3" class="text-xs-center">
        <v-layout justify-center row wrap>
          <v-btn color="white" flat round to="/">Home</v-btn>
          <v-btn color="white" flat round to="/attendance">Attendance</v-btn>
          <v-btn color="white" flat round href="/docs/assignments">Assignments</v-btn>
          <v-btn
            color="white"
            flat
            round
            href="https://netdevv.com/contact"
            target="blank"
          >Contact Us</v-btn>
          <v-flex teal darken-4 py-3 text-xs-center white--text xs12>
            &copy;2019 —
            <a class="white--text" href="https://netdevv.com" target="blank">NETDEVV</a>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>