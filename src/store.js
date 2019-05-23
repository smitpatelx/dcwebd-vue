import Vue from 'vue';
import Vuex from 'vuex';
import VueCookies from 'vue-cookies';
import axios from 'axios';

Vue.use(VueCookies);

//Set all cookies for 30 days
VueCookies.config('30d');
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: VueCookies.get('access-token') || null,
    user: {}
  },
  mutations: {
    authChange(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    },
    mutateUser(state, user) {
      state.user = user;
    }
  },
  getters: {
    loggedIn(state) {
      return state.token != null;
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      var apiURL = process.env.VUE_APP_APIURL;

      return new Promise((resolve, reject) => {
        axios
          .post(apiURL + '/api/login', {
            username: credentials.username,
            password: credentials.password
          })
          .then(val => {
            const token = val.data.access_token;
            VueCookies.set('access-token', token);
            context.commit('authChange', token);
            resolve(token);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    destroyToken(context) {
      var apiURL = process.env.VUE_APP_APIURL;
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios
            .post(apiURL + 'api/logout', null, {
              headers: {
                Authorization: 'Bearer ' + VueCookies.get('access-token')
              }
            })
            .then(val => {
              VueCookies.remove('access-token');
              context.commit('destroyToken');
              resolve(val);
            })
            .catch(error => {
              VueCookies.remove('access-token');
              context.commit('destroyToken');
              reject(error);
            });
        });
      }
    }
    // retrieveUser(context) {
    //   var apiURL = process.env.VUE_APP_APIURL;
    //   if (context.getters.loggedIn) {
    //     return new Promise((resolve, reject) => {
    //       axios
    //         .get(apiURL + 'api/user', this.getters.getAuthParams)
    //         .then(val => {
    //           context.commit('retrieveUser', val.data);
    //           resolve(val.data);
    //         })
    //         .catch(error => {
    //           reject(error);
    //         });
    //     });
    //   }
    // }
  }
});

export default store;
