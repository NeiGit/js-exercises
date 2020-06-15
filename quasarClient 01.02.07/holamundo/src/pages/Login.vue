<template>
  <div class="q-pa-md row justify-center full-height full-width text-center">
    <q-card class="my-card">
      <div class="text-h6">Login</div>
      <q-card-section>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            label="Name"
            v-model="name"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Name cannot be empty']"
          />

          <q-input
            filled
            type="password"
            label="Password"
            v-model="password"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Password cannot be empty']"
          />

          <div>
            <q-btn label="Login" type="submit" color="primary"/>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { LOGIN } from '../store/types'

export default {
  data () {
    return {
      name: null,
      password: null
    }
  },

  methods: {
    onSubmit () {
      const user = this.getUser()
      if (user) {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: `Welcome ${this.name}!`
        })
        this.commitLogin(user)
        this.$router.push('/')
      } else {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Wrong username or password'
        })
      }
    },
    commitLogin: function (user) {
      this.$store.commit(LOGIN, user)
    },
    getUser: function () {
      const user = this.$store.state.users.find(u => u.name === this.name && u.password)
      return user
    }
  }
}
</script>
