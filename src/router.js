import Vue from 'vue';
import Router from 'vue-router';
import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';
import Home from './view/Home.vue';
import About from './view/About.vue';
import ERROR from './view/ERROR.vue';
import HandOuts from './view/Handouts.vue';
import Attendance from './view/Attendance.vue';
import Instructor from './view/Instructor.vue';
import Software from './view/Software.vue';
import Login from './view/Login.vue';
import Logout from './view/Logout.vue';
import Dashboard from './view/Dashboard.vue';
import AdminNav from './components/AdminNavigations.vue';
import AdminAttendance from './view/admin/AdminAttendance.vue';
import AdminSecret from './view/admin/AdminSecret.vue';
import AdminProfile from './view/admin/AdminProfile.vue';
import AdminUsers from './view/admin/AdminUsers.vue';
import AdminStudents from './view/admin/AdminStudents.vue';
import ImportantDates from './view/ImportantDates.vue';
import Timeline2201 from './view/admin/AdminTimeline2201.vue';
import store from './store';

Vue.use(Router);
var publicPath = process.env.BASE_URL;

let router = new Router({
  base: publicPath,
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: '/instructors',
      name: 'instructors',
      components: {
        header: AppHeader,
        default: Instructor,
        footer: AppFooter
      }
    },
    {
      path: '/software',
      name: 'software',
      components: {
        header: AppHeader,
        default: Software,
        footer: AppFooter
      }
    },
    {
      path: '/handouts',
      name: 'handouts',
      components: {
        header: AppHeader,
        default: HandOuts,
        footer: AppFooter
      }
    },
    {
      path: '/importantdates',
      name: 'importantdates',
      components: {
        header: AppHeader,
        default: ImportantDates,
        footer: AppFooter
      }
    },
    {
      path: '/attendance',
      name: 'attendance',
      components: {
        header: AppHeader,
        default: Attendance,
        footer: AppFooter
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: Login
      },
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/dashboard',
      components: {
        header: AppHeader,
        default: Dashboard
      },
      children: [
        {
          path: '/',
          name: 'dashboard',
          components: {
            navigation: AdminNav,
            default: AdminAttendance
          }
        },
        {
          path: 'students',
          components: {
            navigation: AdminNav,
            default: AdminStudents
          }
        },
        {
          path: 'users',
          components: {
            navigation: AdminNav,
            default: AdminUsers
          }
        },
        {
          path: 'profile',
          components: {
            navigation: AdminNav,
            default: AdminProfile
          }
        },
        {
          path: 'secret',
          components: {
            navigation: AdminNav,
            default: AdminSecret
          }
        },
        {
          path: 'timeline2201',
          components: {
            navigation: AdminNav,
            default: Timeline2201
          }
        },
        {
          path: '*',
          components: {
            navigation: AdminNav,
            default: ERROR
          }
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      components: {
        default: Logout
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      components: {
        header: AppHeader,
        default: ERROR,
        footer: AppFooter
      }
    }
  ]
});

router.beforeEach(function(to, from, next) {
  var pageTitle = to.matched.slice().reverse().find(r => r.name);
  if (pageTitle) {
    document.title = pageTitle.name.charAt(0).toUpperCase() + pageTitle.name.slice(1) + ' | DC - WEBD2201';
  } else {
    document.title = 'DC - WEBD2201';//next() // make sure to always call next()!
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        path: '/login'
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.loggedIn) {
      next({
        path: '/dashboard'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
