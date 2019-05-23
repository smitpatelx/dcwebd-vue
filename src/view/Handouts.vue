<template>
  <v-container fluid text-xs-center>
    <v-layout row wrap>
      <v-flex md6 xs12 class="grey--text text--darken-2" pa-4>
        <v-chip class="subheading">Lecture Hand-Outs</v-chip>
        <p class="text-xs-left pt-3">
          You will find below all of the lectures used throughout the semester,
          converted from PPT to PDF format. All of the content is testable,
          and it is suggested that you make local copies for studying purposes.
        </p>
        <p class="text-xs-left pt-3">
          Download
          <b>course outline</b> here
          <v-btn
            color="teal darken-1"
            class="white--text"
            small
            round
            :href="publicPath+'pdfs/WEBD2201.2018-19.pdf'"
          >
            <v-avatar>
              <v-icon class="white--text pr-2" small>cloud_download</v-icon>PDF
            </v-avatar>
          </v-btn>
        </p>
        <p class="text-xs-left">
          Download
          <b>all</b> files
          <v-btn
            color="teal darken-1"
            class="white--text"
            small
            round
            :href="publicPath+'pdfs/all_pdfs.zip'"
          >
            <v-avatar>
              <v-icon class="white--text pr-2" small>folder</v-icon>ZIP
            </v-avatar>
          </v-btn>
        </p>
        <v-card>
          <v-card-title>
            <v-icon color="teal">archive</v-icon>
            <span class="title font-weight-medium teal--text pl-3">Term Test 1</span>
          </v-card-title>
          <v-card-text class="subheading text-xs-left">
            <v-btn
              small
              color="teal lighten-3"
              v-for="(data, index) in termtest1"
              :key="index"
              :href="publicPath+data.link"
            >{{ data.label }}</v-btn>
          </v-card-text>
        </v-card>

        <v-card class="mt-3">
          <v-card-title>
            <v-icon color="teal">archive</v-icon>
            <span class="title font-weight-medium teal--text pl-3">Term Test 2</span>
          </v-card-title>
          <v-card-text class="subheading text-xs-left">
            <v-btn
              small
              color="teal lighten-3"
              v-for="(data, index) in termtest2"
              :key="index"
              :href="publicPath+data.link"
            >{{ data.label }}</v-btn>
          </v-card-text>
        </v-card>

        <v-card class="mt-3">
          <v-card-title>
            <v-icon color="teal">archive</v-icon>
            <span class="title font-weight-medium teal--text pl-3">Term Test 3</span>
          </v-card-title>
          <v-card-text class="subheading text-xs-left">
            <v-btn
              small
              color="teal lighten-3"
              v-for="(data, index) in termtest3"
              :key="index"
              :href="publicPath+data.link"
            >{{ data.label }}</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md6 xs12 class="grey--text text--darken-2" pa-2>
        <v-img :src="publicPath+'assets/undraw_book_lover_mkck.svg'" class="hidden-sm-and-down">
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
      publicPath: process.env.BASE_URL,
      termtest1: [
        { label: "XHTML Overview", link: "pdfs/termtest1/01_html_xml.pdf" },
        {
          label: "URLs and Internet Protocols",
          link: "pdfs/termtest1/02_url_protocols.pdf"
        },
        {
          label: "Web Publishing and FTP",
          link: "pdfs/termtest1/03_web_publishing_ftp.pdf"
        },
        { label: "HTML Tables", link: "pdfs/termtest1/04_html_tables.pdf" },
        {
          label: "Cascading Style Sheets",
          link: "pdfs/termtest1/05_css_lecture.pdf"
        }
      ],
      termtest2: [
        {
          label: "Internet and e-Business Overview",
          link: "pdfs/termtest2/06_ebusiness_internet.pdf"
        },
        {
          label: "PHP Scripting Introduction",
          link: "pdfs/termtest2/07_php_overview.pdf"
        },
        {
          label: "Numbering Systems",
          link: "pdfs/termtest2/08_numbering_systems.pdf"
        },
        { label: "HTML Forms", link: "pdfs/termtest2/09_html_forms.pdf" },
        {
          label: "Sticky Forms and Data Validation",
          link: "pdfs/termtest2/10_data_validation_sticky_forms.pdf"
        }
      ],
      termtest3: [
        {
          label: "Database and SQL Review",
          link: "pdfs/termtest3/11_database_review.pdf"
        },
        {
          label: "PHP Database Commands",
          link: "pdfs/termtest3/12_php_database_commands.pdf"
        },
        {
          label: "PHP Provided Functions and Dates",
          link: "pdfs/termtest3/13_php_functions_dates.pdf"
        },
        {
          label: "UNIX Commands",
          link: "pdfs/termtest3/14_email_valid_file_redirect.pdf"
        },
        {
          label: "Email Validation and Page Redirection",
          link: "pdfs/termtest3/15_php_file_handling.pdf"
        },
        {
          label: "PHP File Handling",
          link: "pdfs/termtest3/16_unix_type_commands.pdf"
        }
      ]
    };
  }
};
</script>
