<template>
  <div class="q-pa-md row justify-center full-height full-width text-center">
    <q-card class="my-card">
      <div class="text-h6">Sign up</div>
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

          <q-input
            filled
            type="password"
            label="Confirm password"
            v-model="passwordConfirm"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Password confirm cannot be empty']"
          />

          <div>
            <q-btn label="Sign Up" type="submit" color="primary"/>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { CREATE_USER, LOGIN } from '../store/types'

export default {
  data () {
    return {
      name: null,
      password: null,
      passwordConfirm: null
    }
  },

  methods: {
    onSubmit () {
      if (this.usernameAlreadyTaken()) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Username already taken'
        })
      } else if (this.passwordsDontMatch()) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Passwords dont match'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: `User ${this.name} succesfully created`
        })
        this.commitNewUser()
        this.$router.push('/')
      }
    },
    commitNewUser: function () {
      this.$store.commit(CREATE_USER, {
        name: this.name,
        password: this.password
      })
      this.$store.commit(LOGIN, {
        name: this.name
      })
    },
    usernameAlreadyTaken () {
      return this.$store.state.users.some(u => u.name === this.name)
    },
    passwordsDontMatch () {
      return this.password !== this.passwordConfirm
    }
  }
}
</script>
