<template>
  <div>
    <Table :title="table.title" :columns="table.columns" :data="table.data"></Table>
  </div>
</template>

<script>

import Table from './common/Table'

export default {
  name: 'Exercises',
  components: { Table },
  computed: {
    exercises: function () {
      return this.$store.state.exercises
    }
  },
  data () {
    return {
      table: {
        title: 'Exercises',
        columns: [
          {
            name: 'Name',
            required: true,
            label: 'Name',
            align: 'left',
            field: row => row.name,
            format: val => `${val}`
          },
          {
            name: 'Muscle groups',
            required: true,
            label: 'Muscle groups',
            align: 'center',
            field: row => row.muscleGroups,
            format: val => `${val}`
          }
        ],
        data: this.$store.state.exercises
      }
    }
  }
}
</script>
