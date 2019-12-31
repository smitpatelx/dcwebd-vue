<template>
    <v-container fluid class="px-2 py-0">
        <v-layout align-start justify-center row wrap class="py-0">
            <v-dialog v-model="dialog.default" persistent max-width="600px">
            <v-card class="text-xs-center">
            <v-card-text>
                <v-form ref="form" v-model="valid.n1" lazy-validation class="text-xs-center">
                <v-container grid-list-md>
                    <v-layout wrap>
                    <v-flex xs12>
                        <v-text-field
                        v-model.trim="title"
                        label="Title"
                        :rules="titleRules"
                        :counter="30"
                        required
                        autocomplete="randomstring"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-textarea
                        v-model.trim="description"
                        label="Description"
                        :rules="descriptionRules"
                        required
                        :counter="200"
                        autocomplete="randomstring"
                        ></v-textarea>
                    </v-flex>
                    <v-flex xs12>
                        <v-menu
                        ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        max-width="290px"
                        min-width="290px"
                        >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                            v-model="dateFormatted"
                            label="Date"
                            persistent-hint
                            prepend-icon="event"
                            @blur="date = parseDate(dateFormatted)"
                            v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                        </v-menu>
                        <v-menu
                        ref="menu"
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="time"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        max-width="290px"
                        min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                v-model="time"
                                label="Time"
                                persistent-hint
                                prepend-icon="access_time"
                                readonly
                                v-on="on"
                                ></v-text-field>
                            </template>
                            <v-time-picker
                                v-if="menu2"
                                v-model="time"
                                format="24hr"
                                full-width
                                @click:minute="$refs.menu.save(time)"
                            ></v-time-picker>
                        </v-menu>
                    </v-flex>
                    </v-layout>
                </v-container>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-layout wrap>
                <v-flex xs12 class="text-xs-center">
                    <v-btn color="teal darken-1" flat @click="dialog.default = false">Close</v-btn>
                    <v-btn
                    color="teal darken-1"
                    flat
                    @click="dialog.register ? registerStudent() : editUser()"
                    >Save</v-btn>
                    <v-btn color="red" flat @click="$refs.form.reset();">Reset</v-btn>
                </v-flex>
                </v-layout>
            </v-card-actions>
            </v-card>
        </v-dialog>
            <v-flex xs12 class="text-xs-center">
                <v-btn color="teal darken-2" outline dark @click="dialogOpenRegister">Add New Project</v-btn>
                <v-btn
                color="white"
                class="teal lighten-2"
                flat
                dark
                @click.stop
                >Total Projects: {{projects.length}}</v-btn>

                <v-text-field
                v-model="search"
                prepend-icon="fas fa-search teal--text"
                :append-outer-icon="loading ? 'fas fa-sync teal--text text--lighten-3 fa-spin' : 'fas fa-sync teal--text'"
                outline
                clear-icon="far fa-times-circle teal--text"
                clearable
                label="Find by any value"
                type="text"
                class="teal--text pt-4"
                @click:append-outer="getallProjects(); (loading = !loading)"
                @click:clear="search = ''"
                @keyup.esc="search = ''"
                color="teal"
                placeholder="Search for projects"
                autofocus
                ></v-text-field>
            </v-flex>
            <v-flex xs12 pa-4>
                <v-data-table
                :headers="headers"
                :items="projects"
                :search="search"
                class="text-xs-center newstyle"
                style="min-height:500px;max-height:500px;overflow-y:scroll;"
                :rows-per-page-items="[20,50,{'text':'$vuetify.dataIterator.rowsPerPageAll','value':-1}]"
                >
                <template v-slot:items="props" class="text-xs-center">
                    <td class="text-xs-center">{{ props.item.id }}</td>
                    <td class="text-xs-center">{{ props.item.title }}</td>
                    <td class="text-xs-center">{{ props.item.description | truncate(20) }}</td>
                    <td class="text-xs-center">{{ props.item.date | fDate }}</td>
                    <td class="text-xs-center">{{ props.item.date | fDate('t') }}</td>
                    <td class="text-xs-center">
                    <v-btn icon ripple depressed small @click="editFormLoad(props.item.id)">
                        <v-icon class="grey--text">edit</v-icon>
                    </v-btn>
                    <v-btn icon ripple depressed small @click="deleteProject(props.item.id)">
                        <v-icon class="red--text">delete</v-icon>
                    </v-btn>
                    </td>
                </template>
                <template v-slot:no-results>
                    <v-alert
                    :value="true"
                    color="grey"
                    icon="warning"
                    >Your search for "{{ search }}" found no results.</v-alert>
                </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import axios from "axios";

export default {
    data(){
        return{
            search:'',
            snackbarClass: "red white-text",
            showError: false,
            errorMessage: "",
            show: {
                n1: false
            },
            valid: {
                n1: false
            },
            dialog: {
                default: false,
                register: true
            },
            editId: null,
            loading: true,
            projects:[
                {
                    id:1,
                    date: '2019-08-09 17:46:37',
                    title: 'LAB 1 - Basic XHTML Page',
                    description: 'You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked.'
                },
                {
                    id:2,
                    date: '2019-08-09 17:46:37',
                    title: 'LAB 1 - Basic XHTML Page',
                    description: 'You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked.'
                },
                {
                    id:3,
                    date: '2019-08-09 17:46:37',
                    title: 'LAB 1 - Basic XHTML Page',
                    description: 'You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked.'
                },
                {
                    id:4,
                    date: '2019-08-09 17:46:37',
                    title: 'LAB 1 - Basic XHTML Page',
                    description: 'You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked.'
                },
                {
                    id:5,
                    date: '2019-08-09 17:46:37',
                    title: 'LAB 1 - Basic XHTML Page',
                    description: 'You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked.'
                },
                {
                    id:6,
                    date: '2019-08-09 17:46:37',
                    title: 'LAB 1 - Basic XHTML Page',
                    description: 'You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked.'
                }
            ],
            headers: [
                {
                    text: "Id",
                    align: "center",
                    sortable: true,
                    value: "id",
                    class: "subheading"
                },
                {
                    text: "Title",
                    align: "center",
                    sortable: false,
                    value: "title",
                    class: "subheading"
                },
                {
                    text: "Description",
                    align: "center",
                    sortable: false,
                    value: "description",
                    class: "subheading"
                },
                {
                    text: "Date",
                    align: "center",
                    sortable: false,
                    value: "true",
                    class: "subheading"
                },
                {
                    text: "Time",
                    align: "center",
                    sortable: true,
                    value: "time",
                    class: "subheading"
                },
                {
                    text: "Action",
                    value: "action",
                    sortable: false,
                    align: "center",
                    class: "subheading"
                }
            ],
            apiURL: this.$root.$children[0]._data.apiURL,
        }
    },
    methods:{
        getallProjects(){
            axios.get(this.apiURL + 'api/timeline', {
            headers: {
                Authorization: "Bearer " + this.$cookies.get("access-token")
            }
            }).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        },
        dialogOpenRegister(){
            this.dialog.default = true;
            this.dialog.register = true;
            this.$refs.form.reset();
        },
        editFormLoad(id) {
            this.dialog.default = true;
            this.dialog.register = false;
            var project = this.projects.filter(val => val.id === id);
            this.editId = project[0].id;
            this.title = project[0].title;
            this.description = project[0].description;
        },
        registerStudent(){

        },
        editUser(){
            console.lgo(editId)
        }
    },
    created(){

    },
    filters: {
        truncate: function(value, limit) {
            if (value.length > limit) {
                value = value.substring(0, (limit - 3)) + '...';
            }
            return value
        },
        fDate: function(value, format) {
            var currentDate = new Date(value);
            var date = currentDate.getDate();
            var month = currentDate.getMonth();
            var year = currentDate.getFullYear();

            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();
            var ampm = hours >= 12 ? "pm" : "am";
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            var strTime = hours + ":" + minutes + " " + ampm;

            var dateString;
            if(format=='t'){
                dateString = strTime;
            } else {
                dateString = date + "-" + (month + 1) + "-" + year;
            }
            return dateString;
        }
    },
    watch: {
        loading(val) {
        setTimeout(() => {
            if (val) {
            this.loading = !val;
            }
        }, 2500);
        }
    }
}
</script>