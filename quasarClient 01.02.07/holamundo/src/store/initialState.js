export default {
  users: [
    {
      _id: '0',
      name: 'admin',
      password: 'password',
      rol: 0
    },
    {
      _id: '1',
      name: 'Nei',
      password: '1234',
      rol: 1
    },
    {
      _id: '2',
      name: 'Pepe',
      password: '1234',
      rol: 1
    }
  ],
  user: {
    _id: '',
    name: '',
    rol: -1
  },
  rol: '',
  products: [],
  cart: [],
  contador: 0,
  exercises: [
    {
      name: 'Muscle up',
      muscleGroups: ['ARMS', 'BACK'],
      _id: '0'
    },
    {
      name: 'Push up',
      muscleGroups: ['CHEST', 'ARMS'],
      _id: '1'
    },
    {
      name: 'Squat',
      muscleGroups: ['BACK', 'LEGS'],
      _id: '2'
    },
    {
      name: 'Shoulder press',
      muscleGroups: ['SHOULDER', 'ARMS'],
      _id: '3'
    },
    {
      name: 'Rope jump',
      muscleGroups: ['CARDIO'],
      _id: '4'
    }
  ],
  workouts: [
    {
      userId: '1',
      title: 'Home squat and push',
      created: '05/20/2020',
      rounds: 4,
      sets: [
        {
          reps: 5,
          time: 50,
          exercise_id: 1
        },
        {
          reps: 10,
          time: 5,
          exercise_id: 2
        }
      ]
    },
    {
      userId: '1',
      title: 'Home pull',
      created: '10/06/2020',
      rounds: 4,
      sets: [
        {
          reps: 10,
          time: 50,
          exercise_id: 0
        },
        {
          reps: 5,
          time: 5,
          exercise_id: 3
        }
      ]
    }
  ]
}
