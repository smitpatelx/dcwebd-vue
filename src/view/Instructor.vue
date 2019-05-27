<template>
  <v-container fluid>
    <v-layout pa-3 row wrap>
      <v-flex xs12>
        <v-card>
          <v-img class="white--text" height="200px" :src="publicPath + '/assets/bg_profile.jpg'">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Darren Puffer</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <v-chip class="yellow darken-4 white--text">Durham College - Faculty</v-chip>
              <br>
              <v-chip class="yellow darken-4 white--text">Web Development</v-chip>
              <br>
              <span>
                <v-chip class="yellow darken-3 white--text">NOTE :</v-chip>Instructor prefers to be contacted by email. "Drop-ins" for office hours are allowed, but you are encouraged to set up an appointment.
              </span>
              <br>
              <v-chip class="blue lighten-1 white--text">
                <v-avatar class="pl-2">
                  <v-icon>fas fa-briefcase fa-lg</v-icon>
                </v-avatar>C 315
              </v-chip>
              <br>
              <v-chip class="blue lighten-1 white--text">
                <v-avatar class="pl-2">
                  <v-icon>fas fa-calendar-day fa-lg</v-icon>
                </v-avatar>Monday 2pm-3pm -- Thursday 3pm-4pm
              </v-chip>
              <br>
              <v-btn
                round
                outline
                href="http://opentech.durhamcollege.org/pufferd/webd2201"
                target="_blank"
                color="blue"
                class="pl-3 pr-0"
              >
                Website
                <v-avatar class="pa-0">
                  <v-icon class="pa-0">fas fa-globe fa-lg</v-icon>
                </v-avatar>
              </v-btn>
              <v-btn
                round
                outline
                href="tel:+1(905)7212044"
                target="_blank"
                color="blue"
                class="pl-3 pr-0"
              >
                (905)-721-2000 ext. 2044
                <v-avatar class="pa-0">
                  <v-icon class="pa-0">fas fa-phone fa-lg</v-icon>
                </v-avatar>
              </v-btn>
              <br>
              <v-btn
                round
                outline
                href="mailto:darren.puffer@durhamcollege.ca"
                target="_blank"
                color="blue"
                class="pl-3 pr-0"
              >
                darren.puffer@durhamcollege.ca
                <v-avatar class="pa-0">
                  <v-icon class="pa-0">fas fa-at fa-lg</v-icon>
                </v-avatar>
              </v-btn>
              <v-btn
                fab
                href="https://www.linkedin.com/in/darren-puffer-bb02b45b/"
                target="_blank"
                color="blue darken-2"
                class="white--text"
                small
              >
                <v-avatar class="pa-0">
                  <v-icon class="pa-0">fab fa-linkedin fa-2x</v-icon>
                </v-avatar>
              </v-btn>
            </div>
          </v-card-title>
          <!-- <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>-->
        </v-card>
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

<style>
</style>
