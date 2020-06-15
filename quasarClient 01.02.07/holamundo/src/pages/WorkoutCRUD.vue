<template>
  <div class = "q-pa-md fixed-center full-width" style= "max-width: 80%">
    <q-card class="q-mt-lg my-card">
      <div class="q-pa-md text-h6">New workout</div>
      <q-card-section>
        <q-form
          @submit="submitWorkout"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="title"
            label="Title"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Title cannot be empty']"
          />

          <q-input
            filled
            type="number"
            v-model="rounds"
            label="Rounds"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' && val > 0 || 'Invalid value']"
          />
          <q-table
          :data="sets"
          :columns="columns"
          title="Sets"
          :rows-per-page-options="[]"
          row-key="name"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="exercise" :props="props">
                {{ getExerciseName(props.row.exercise_id) }}
                <q-popup-edit v-model="props.row.exercise_id" title="Edit the exercise">
                  <SingleSelector :label="exercises.label" :options="exercises.options" :keyy="exercises.key" :value="exercises.value" @selectedDataChanged="props.row.exercise_id = $event"></SingleSelector>
                </q-popup-edit>
              </q-td>
              <q-td key="reps" :props="props">
                {{ props.row.reps }}
                <q-popup-edit v-model.number="props.row.reps">
                  <q-input type="number" v-model.number="props.row.reps" dense autofocus />
                </q-popup-edit>
              </q-td>
              <q-td key="time" :props="props">
                {{ props.row.time }}
                <q-popup-edit v-model.number="props.row.time">
                  <q-input type="number" v-model.number="props.row.time" dense autofocus />
                </q-popup-edit>
              </q-td>
              <q-td key="exercise" :props="props">
                <q-btn round color="primary" icon="delete" @click="deleteRow(props.rowIndex)"/>
              </q-td>
            </q-tr>
          </template>
          <template v-slot:top>
            <q-btn color="primary" :disable="loading" label="Add set" @click="addRow" />
          </template>
        </q-table>

          <div>
            <q-btn label="Create" type="submit" color="primary" class="full-width"/>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>

import SingleSelector from '../components/common/SingleSelector'
import { CREATE_WORKOUT } from '../store/types'

const columns = [
  { name: 'exercise', align: 'left', label: 'Exercise', field: 'exercise_id' },
  { name: 'reps', align: 'center', label: 'Reps', field: 'reps' },
  { name: 'time', label: 'Time', field: 'time' }
]

export default {
  data () {
    return {
      title: '',
      rounds: 0,
      sets: [],
      columns,
      exercises: {
        label: 'Exercise',
        options: this.$store.state.exercises,
        ref: '_id', // attribute from options to be returned
        value: 'name' // data to display in the select widget
      }
    }
  },
  components: { SingleSelector },
  methods: {
    getExerciseName (_id) {
      const exercise = this.$store.state.exercises[_id]
      return exercise ? exercise.name : 'Select exercise'
    },
    submitWorkout () {
      if (this.sets.length <= 0) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You must add at least one set'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Workout created!'
        })
        this.commitWorkout()
        this.$router.push('/workouts')
      }
    },
    commitWorkout: function () {
      const user = this.$store.state.user
      this.$store.commit(CREATE_WORKOUT, {
        userId: user._id,
        title: this.title,
        created: new Date().toLocaleDateString(),
        rounds: this.rounds,
        sets: this.sets
      })
    },
    addRow () {
      this.sets.push({
        exercise_id: '',
        reps: 0,
        time: 0
      })
    },
    deleteRow (index) {
      this.sets = this.sets.filter((s, i) => i !== index)
    }
  }
}
</script>
