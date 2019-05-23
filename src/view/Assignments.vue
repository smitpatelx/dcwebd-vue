<template>
  <v-container fluid class="pa-0">
    <v-layout align-top justify-center row class="pa-0">
      <AssignmentsNav/>
      <v-flex xs-12>
        <v-toolbar color="teal darken-2" dark tabs>
          <v-text-field
            class="mx-3"
            flat
            :label="'Search in '+$route.params.lab"
            prepend-inner-icon="search"
            solo-inverted
          ></v-text-field>

          <template v-slot:extension>
            <v-tabs v-model="tabs" color="transparent" slider-color="white">
              <v-tab v-for="(head, index) in headings" :key="index">{{ head }}</v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tabs">
          <v-tab-item v-for="(data, index) in text" :key="index">
            <v-card style="min-height:80vh;width:100%;">
              <v-card-text v-html="md1(data)"></v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AssignmentsNav from "../components/AssignmentsNav.vue";
import marked from "marked";

export default {
  components: {
    AssignmentsNav
  },
  data() {
    return {
      tabs: null,
      text: [
        "* You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked. \n\n" +
          "* For this assignment you should try to find a web resource that has a list and explains each of the XHTML 1.0 supported tags. As an example, here is a link to the [W3Schools]('http://www.w3schools.com/tags/default.asp') tag library (w3schools is an excellent website). Feel free to try and find your own.  \
        The HTML pages must conform to the W3C XHTML 1.0 Transitional specification, as checked by the W3C validator. \
        You can create your own images, or simply **'borrow'** them from the Web or other sources (e.g. stock image CD, scan, framegrabber). If you use someone else's work, please acknowledge the source somewhere on the page (HINT: HTML comments would work well for this). Please avoid using images with the copyright symbol on them.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
        ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
        ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
        ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
        ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
        ea commodo consequat."
      ],
      headings: [
        "General",
        "Due Date",
        "Specific Requirements",
        "Rubric",
        "Resources",
        "Submission"
      ]
    };
  },
  methods: {
    md1(val) {
      return marked(val);
    }
  }
};
</script>

<style>
</style>
