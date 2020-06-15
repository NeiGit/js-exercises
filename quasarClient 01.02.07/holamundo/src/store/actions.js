// Realizar operaciones Asincronicas
import { INCREMENTAR } from './types'

export default {
  incrementar ({ commit, state }) {
    commit(INCREMENTAR) // Se invoca la mutacion 'incrementar'
  }
}
