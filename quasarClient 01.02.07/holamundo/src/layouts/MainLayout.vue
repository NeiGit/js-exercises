<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          My workouts
        </q-toolbar-title>
        <Tabs :links="getLinks()"></Tabs>
        <Account v-if="userName()"/>
        <q-btn-group v-else spread>
          <q-btn color="purple" label="Login" :to="login.link"/>
          <q-btn color="purple" label="Signup" :to="signup.link"/>
        </q-btn-group>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Tabs from '../components/Tabs'
import Account from '../components/Account'

export default {
  name: 'MainLayout',

  components: {
    Tabs,
    Account
  },
  methods: {
    getLinks: function () {
      return this.essentialLinks.filter(el => !el.adminOnly || this.userIsAdmin())
    },
    userName: function () {
      return this.user().name
    },
    userIsAdmin: function () {
      return this.user().rol === 0
    },
    user: function () {
      return this.$store.state.user
    }
  },
  data () {
    return {
      essentialLinks: [
        {
          title: 'Home',
          caption: 'home',
          icon: 'school',
          link: '/'
        },
        {
          title: 'New Exercise',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'exerciseCRUD',
          disable: this.userIsAdmin(),
          adminOnly: true
        },
        {
          title: 'New workout',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'workoutCRUD',
          disable: this.userIsAdmin()
        },
        {
          title: `${this.userName()} Workouts`,
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'workouts',
          disable: this.userIsAdmin()
        }
      ],
      login: {
        title: 'Login',
        link: 'login'
      },
      signup: {
        title: 'Signup',
        link: 'signup'
      }
    }
  }
}
</script>
