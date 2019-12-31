<template>
    <v-container fluid text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 pa-4>
            <h1 class="green--text text--darken-3">Webd 2201 Important Dates</h1>
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
            v-for="(data, i) in datas"
            :key="i"
            color="green darken-3"
            small
            >
            <template v-slot:opposite>
                <span
                :class="`headline font-weight-bold green--text text-darken-3`"
                v-text="data.year"
                ></span>
            </template>
            <v-card class="elevation-3 text-left">
                <v-card-title :class="`headline font-weight-light green--text text-darken-3`">{{data.title}}</v-card-title>
                <v-card-text>
                    {{data.description}}
                </v-card-text>
            </v-card>
            </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
    </v-container>
</template>
<script>
export default {
    data: () => ({
      datas: [
        {
          year: '12 Feb 2019',
          title: 'LAB 1 - Basic XHTML Page',
          description: 'You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked.'
        },
        {
          year: '12 Feb 2019',
          title: 'LAB 2 - Working with HTML Tables',
          description: 'You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked.'
        },
        {
          year: '12 Feb 2019',
          title: 'Lab 3 - Formatting and Layout with Styles',
          description: 'You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked.'
        },
        {
          year: '12 Feb 2019',
          title: 'LAB 4 - PHP Chapter Files from Textbook',
          description: 'You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked.'
        },
        {
          year: '12 Feb 2019',
          title: 'Lab 5 - Basic PHP Scripting',
          description: 'You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked.'
        },
      ],
    }),
}
</script>