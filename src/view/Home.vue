<template>
  <v-container fluid text-xs-center>
    <v-layout row wrap>
      <v-flex md6 xs12 class="white--text text--lighten-2" pa-2>
        <v-card class="mx-auto text-xs-left teal darken-1" dark>
          <v-card-title>
            <v-icon large left class="fas fa-envelope-open-text"></v-icon>
            <v-chip color="teal lighten-2" class="title font-weight-medium">Email Guidance</v-chip>
          </v-card-title>

          <v-card-text class="subheading">
            Due to a large numbers of emails sent from students to faculty that are not communicative,
            hard to decipher, and/or directed to the wrong person. The following describes the expected
            standard of an email that is sent to a faculty member with regards to this course.
          </v-card-text>
          <v-card-text class="subheading teal">
            <p class="headline">Subject Line:</p>
            <p>
              Should contain the Course Code (i.e. WEBD2201) the CRN that you are enquiring or communicating
              about (e.g. 12345) and some indication what the email is about. An acceptable subject line could
              be (if you were enquiring about your 32345 CRN, note that your CRN will be different):
            </p>
            <blockquote
              class="blockquote text-xs-center"
            >WEBD2201 - CRN 32345 - Clarification of Lab 5 Requirements</blockquote>
          </v-card-text>
          <v-card-text class="subheading teal darken-1">
            <p class="headline">Email Body:</p>
            <p>
              The body of the email should include a greeting (e.g. Hello &#10092; PLACE YOUR LAB INSTRUCTOR'S NAME HERE &#10093; ), followed by your enquiry or whatever information needs to be communicated to the faculty member(s).
              You are to consider these exchanges to be formal communication and students are to take the time to create emails that look and sound professional. Therefore, you are discouraged from using abbreviations (e.g. U, R, lol, BTW, IDK, AFAIK, etc.) that you might use while emailing friends and family members or while texting.
              For a succinct explanation of formal versus informal email communication and when to use each check out
              <a
                class="black--text text--lighten-3"
                href="https://talentegg.ca/incubator/2015/07/10/formal-casual-emails-professionalism-correspondences/"
              >Formal Vs. Casual Emails: How To Keep The Professionalism In Your Correspondences.</a>
              These are good rules to follow when attempting to find and subsequently keep employment. You should consider your lab and lecture faculty as your supervisors in this course.
            </p>
          </v-card-text>
          <v-card-text class="subheading teal">
            <p class="headline">Signature Block:</p>
            <p>Finally, there should be a signature block that, at least, includes your first and last name AND your student number. Example:</p>
            <blockquote class="blockquote text-xs-left">
              For your consideration,
              <br>Bill Smith
              <br>100123456
            </blockquote>
          </v-card-text>
          <v-card-text class="subheading teal darken-1">
            <p class="headline">Where to send your emails:</p>
            <ul>
              <li>Notices of absense for one class, should be sent to the specific instructor whose lab or lecture is going to be missed.</li>
              <li>Notices of absense for a period that spans multiple labs and/or lectures, can be sent to both instructors by adding both of the email address' in the To: or Cc: field(s).</li>
              <li>Questions or concerns about labs, lab due dates, or lab requirements, should be directed to your lab instructor.</li>
              <li>Questions or concerns about term tests, test dates, clarification of concepts and/or course content, should be directed to your lecture instructor.</li>
            </ul>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto text-xs-left blue-grey darken-1 mt-3" dark>
          <v-card-title>
            <v-chip color="blue-grey lighten-2" class="title font-weight-medium">Resources</v-chip>
          </v-card-title>
          <v-card-text class="subheading">
            <p>
              Course Server:
              <a
                class="black--text text--lighten-3"
                href="http://opentech.durhamcollege.org/pufferd/webd2201"
              >http:// opentech. durhamcollege. org/pufferd/webd2201</a>
            </p>
            <blockquote class="blockquote text-xs-left">
              All assignments will be uploaded and viewed or run from Opentech, the course server. This system runs Linux, a free UNIX-like operating system, and the Apache web server. It also runs the other server-side software required for the course: the PHP script interpreter and the PostgreSQL database engine.
              This server is separate from the main college Information Technology Services such as Campus Pipeline, the Novell servers, the ITIC faculty pages and the main college Web site.
              The main help desk cannot help you with problems with this server!
            </blockquote>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto text-xs-left blue-grey darken-1 mt-3" dark>
          <v-card-title>
            <v-chip color="blue-grey lighten-2" class="title font-weight-medium">Some extra links</v-chip>
          </v-card-title>
          <v-card-text class="subheading">
            <p>
              <a
                class="white--text text--lighten-3 headline"
                href="http://www.w3schools.com/"
              >W3School</a>
              <br>
              <br>
              <span class="blockquote text-xs-left">
                Arguably, one of the best online resources for web development technologies (not just PHP).
                It will be referenced several times throughout the semester. The instructor recommends bookmarking
                it in your Favorites and that you take advantage of the tutorials and utilize the "Try It Now" concept demos.
              </span>
            </p>
          </v-card-text>
          <v-card-text class="subheading">
            <p>
              <a
                class="white--text text--lighten-3 headline"
                href="http://www.webpagesthatsuck.com/"
              >Web pages that suck</a>
              <br>
              <br>
              <span
                class="blockquote text-xs-left"
              >Don't repeat other peoples' mistakes. I hope your pages never make it to the "Daily Sucker"</span>
            </p>
          </v-card-text>
          <v-card-text class="subheading">
            <p>
              <a
                class="white--text text--lighten-3 headline"
                href="http://archive.webstandards.org/"
              >The Web Standards Organisation</a>
              <br>
              <br>
              <span
                class="blockquote text-xs-left"
              >Some more arguments about using proper Internet standards.</span>
            </p>
          </v-card-text>
          <v-card-text class="subheading">
            <p>
              <a
                class="white--text text--lighten-3 headline"
                href="http://www.php.net/tut.php"
              >PHP tutorial on PHP.NET</a>
              <br>
              <br>
              <span class="blockquote text-xs-left">Tutorial on the main PHP site</span>
            </p>
          </v-card-text>
          <v-card-text class="subheading">
            <p>
              <a
                class="white--text text--lighten-3 headline"
                href="http://www.phpbuilder.com/getit/"
              >Get started with PHP</a>
              <br>
              <br>
              <span
                class="blockquote text-xs-left"
              >Another tutorial, this one on the commercial phpbuilder.com site.</span>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md6 xs12 pa-2>
        <v-img
          :src="publicPath+'assets/undraw_content_creator_xeju.svg'"
          class="hidden-sm-and-down"
        >
          <div class="fill-height"></div>
        </v-img>
        <v-card class="mx-auto text-xs-left blue darken-2 mt-3" dark>
          <v-card-title>
            <v-chip color="blue lighten-2" class="title font-weight-medium">Course Overview</v-chip>
          </v-card-title>

          <v-card-text class="subheading">
            <p>This course gives students practical experience with creating a website. Topics to be covered and utilized are:</p>
            <ul>
              <li>HTML/XHTML as the building blocks of the World Wide Web</li>
              <li>Laying out pages and presenting data on webpages using HTML tables</li>
              <li>Laying out and modifying page content using CSS</li>
              <li>Overview of and introduction to basic server-side scripting using PHP</li>
              <li>HTML form design, creation and processing including data validation/persistence using PHP</li>
              <li>Overview of database fundamentals and utilization (including SQL statements) on the web</li>
              <li>Configuring a computer to run as a web-server for website development and testing.</li>
              <li>Basic file I/O processing</li>
            </ul>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto text-xs-left blue mt-3" dark>
          <v-card-title>
            <v-chip color="blue lighten-2" class="title font-weight-medium">Html Comments</v-chip>
          </v-card-title>

          <v-card-text class="subheading">
            <p>
              When the requirements for ALL the labs state to include HTML comments with your name, the filename,
              the date the file was created, and a description, the following is
              <b>AN EXAMPLE</b> of what you should include:
            </p>
            <code style="width:100%;">
              &lsaquo;!--
              Name: Darren Puffer
              File: index.html
              Date: May 14, 2019
              Description: This file acts as the home page for my WEBD2201 website
              --&rsaquo;
            </code>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto text-xs-left teal mt-3" dark>
          <v-card-title>
            <v-chip color="teal lighten-2" class="title font-weight-medium">Reminders</v-chip>
          </v-card-title>
          <v-card-text class="subheading">
            <p class="headline">XHTML 1.0 Transitional doctype tag (For use on Labs 1-3)</p>
            <p class="text-xs-left">
              The XHTML 1.0 Transitional DTD includes everything in the strict DTD
              plus deprecated elements and attributes (most of which concern visual
              presentation). For documents that use this DTD, use this document type
              declaration.
              Place the following at the top of all your course produce html files:
              <code
                class="text-xs-left"
                style="width:100%;"
              >
                &lsaquo;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
                "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&rsaquo;
              </code>
            </p>
          </v-card-text>
          <v-card-text class="subheading">
            <p class="headline">XHTML 1.0 Strict doctype tag (For use on labs 4-10)</p>
            <p class="text-xs-left">
              The XHTML 1.0 Strict DTD excludes all the deprecated HTML 4.01 elements
              and attributes (most of which concern visual presentation). For documents
              that use this DTD, use this document type declaration. Place the
              following at the top of all your course produce html files:
              <code
                class="text-xs-left"
                style="width:100%;"
              >
                &lsaquo;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
                "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&rsaquo;
              </code>
            </p>
          </v-card-text>
          <v-card-text class="subheading">
            <p class="headline">Don't email your HTML files through DC Connect!</p>
            <p class="text-xs-left">
              The Campus Pipeline email system will change the content of your HTML
              files when you email them to yourself. They add a big comment at the start
              of the file, then add a letter 'x' to the front of HTML tags like meta,
              script and so on. They do this to prevent malicious Javascript and other
              nastiness from being sent to your browser. Unfortunately, it also means
              that your pages will NOT validate any more. To get around this, upload
              your files to the opentech server directly with WinSCP.
            </p>
          </v-card-text>
          <v-card-text class="subheading">
            <p class="headline">Some extra links</p>
            <p class="text-xs-left">
              The XHTML 1.0 Strict DTD excludes all the deprecated HTML 4.01 elements
              and attributes (most of which concern visual presentation). For documents
              that use this DTD, use this document type declaration. Place the
              following at the top of all your course produce html files:
            </p>
          </v-card-text>
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