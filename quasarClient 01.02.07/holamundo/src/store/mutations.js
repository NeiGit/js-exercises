import { CREATE_EXERCISE, LOGIN, CREATE_USER, LOGOUT, CREATE_WORKOUT } from './types'

export default {
  [LOGIN]: function (state, user) {
    console.log(user)
    state.user = user
  },
  [LOGOUT]: function (state, data) {
    state.user = {}
  },
  [CREATE_USER]: function (state, user) {
    if (user.name !== '' && user.password) {
      state.users.push({
        _id: state.users.length,
        name: user.name,
        password: user.password,
        rol: 1
      })
    }
  },
  [CREATE_EXERCISE]: function (state, exercise) {
    if (exercise.name !== '' && exercise.muscleGroups && exercise.muscleGroups.length) {
      state.exercises.push({
        _id: state.exercises.length,
        name: exercise.name,
        muscleGroups: exercise.muscleGroups
      })
    }
  },
  [CREATE_WORKOUT]: function (state, workout) {
    if (workout.title !== '' && workout.rounds > 0 && workout.sets && workout.sets.length) {
      state.workouts.push(workout)
    }
    console.log(state.workouts)
  },
  incrementar: function (state) {
    state.contador++
  }
}
