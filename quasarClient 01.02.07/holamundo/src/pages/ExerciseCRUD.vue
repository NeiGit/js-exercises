<template>
  <div class = "q-pa-md q-mt-xl absolute-center full-width" style= "max-width: 80%">
    <q-card class="q-mt-xl my-card">
      <q-card-section>
      <div class="text-h6">New exercise</div>
        <AddExercise></AddExercise>
        <Exercises></Exercises>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import AddExercise from 'components/AddExercise'
import Exercises from 'components/Exercises'

export default {
  name: 'ExerciseCRUD',
  components: {
    AddExercise,
    Exercises
  },
  methods: {
    clickContador: function () {
      this.$store.dispatch('incrementar') // Se indica la accion
    }
  }
}
</script>
