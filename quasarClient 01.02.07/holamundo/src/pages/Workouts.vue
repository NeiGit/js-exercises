<template>
  <div>
    <Grid :title="grid.title" :columns="grid.columns" :data="getUserWorkouts()"></Grid>
  </div>
</template>

<script>

import Grid from '../components/common/Grid'

export default {
  name: 'Workouts',
  components: { Grid },
  methods: {
    getUserWorkouts () {
      const user = this.$store.state.user
      return this.$store.state.workouts.filter(wo => wo.userId === user._id)
    }
  },
  data () {
    return {
      grid: {
        title: 'Workouts',
        columns: [
          {
            name: 'title', required: true, label: 'Title', align: 'left', field: row => row.title, format: val => `${val}`
          },
          {
            name: 'date', required: true, label: 'Date', align: 'left', field: row => row.created, format: val => `${val}`
          },
          {
            name: 'rounds', required: true, label: 'Rounds', align: 'left', field: row => row.rounds, format: val => `${val}`
          },
          {
            name: 'sets', required: true, label: 'Sets', align: 'left', field: row => row.sets.map(s => `Exercise: ${this.$store.state.exercises[s.exercise_id].name} Reps: ${s.reps} Time: ${s.time}''`), format: val => `${val}`
          }
        ],
        data: this.$store.state.workouts
      }
    }
  }
}
</script>
