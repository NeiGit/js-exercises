<template>
  <div class="q-pa-md">
    <q-form
      @submit="submitExercise"
      class="q-gutter-bg"
    >
      <q-input
        filled
        v-model="name"
        label="Name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Name cannot be empty']"
      />
      <MultipleSelector :options ="muscleGroupOptions" :label="muscleGroupsLabel" @selectedDataChanged="muscleGroups = $event"></MultipleSelector>
      <br />
      <div>
        <q-btn label="Create" type="submit" color="primary" class="full-width"/>
      </div>
    </q-form>
  </div>

</template>

<script>
import { CREATE_EXERCISE } from '../store/types'
import MultipleSelector from './common/MultipleSelector'
import { muscleGroupOptions } from '../static-data/muscle-groups'

export default {
  name: 'CreateExercise',
  data: function () {
    return {
      name: '',
      muscleGroups: [],
      muscleGroupsLabel: 'Muscle groups',
      muscleGroupOptions: muscleGroupOptions
    }
  },
  components: {
    MultipleSelector
  },
  methods: {
    submitExercise () {
      if (this.muscleGroups.length <= 0) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'All exercises must have at least one muscle group'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Exercise created!'
        })
        this.commitExercise()
      }
    },
    commitExercise: function () {
      this.$store.commit(CREATE_EXERCISE, {
        name: this.name,
        muscleGroups: this.muscleGroups
      })
    }
  }
}
</script>
