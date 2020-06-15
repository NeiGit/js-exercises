<template>
  <div>
    <input type="text" v-model="producto" />
    <br />
    <input type="text" v-model="cantidad" />
    <br />
    <button v-on:click='agregarProducto'>Agregar</button>
  </div>
</template>

<script>
import { AGREGAR_PRODUCTO } from '../store/types'

export default {
  name: 'AgregarProducto',
  data: function () {
    return {
      producto: '',
      cantidad: 0
    }
  },
  methods: {
    agregarProducto: function () {
      this.$store.commit(AGREGAR_PRODUCTO, {
        nombre: this.producto,
        cantidad: this.cantidad
      })
    }
  }
}
</script>
