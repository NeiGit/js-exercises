
<template>
  <div class="q-pa-md">
    <q-table
      grid
      :title="title"
      :data="data"
      :columns="columns"
      row-key="title"
      :filter="filter"
      hide-header
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    columns: {
      type: Array
    },
    data: {
      type: Array
    }
  },
  data () {
    return {
      filter: ''
    }
  }
}
</script>
