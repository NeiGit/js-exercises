<template>
  <div class="q-pa-md">
    <q-btn color="purple" :label="username">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column items-center">
            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              @click="logout"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import { LOGOUT } from '../store/types'

export default {
  methods: {
    logout: function () {
      this.$store.commit(LOGOUT, {})
      this.$router.push('/')
    }
  },
  computed: {
    username: function () {
      return this.$store.state.user.name
    }
  }
}
</script>
