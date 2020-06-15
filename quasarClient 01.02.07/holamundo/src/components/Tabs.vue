<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-tabs
        v-model="tab"
        dense
        class="bg-teal text-yellow shadow-2"
      >
        <q-route-tab v-for="link in links"
          clickable
          tag="a"
          :to="link.link"
          :key="link.title"
          :label="link.title"
          :name="link.title"
          :disable="link.disable"
          exact
          />
      </q-tabs>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  computed: {
    admin: function () {
      return this.$store.state.user.admin
    }
  }
}
</script>
