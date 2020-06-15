<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <div style="min-width: 250px; max-width: 300px">
        <!-- <q-select
          filled
          v-model="displayValue"
          :options="options"
          use-chips
          stack-label
          :label="label"
        /> -->
         <select v-model="selectedData">
          <option v-for="option in options" :key="option['_id']" :value="option['_id']">{{ option[value] }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleSelector',
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    ref: {
      type: String,
      required: true
    }, // data that will pass to parent
    value: {
      type: String,
      required: true
    } // data to display in each select widget
  },
  data () {
    return {
      selectedData: undefined
    }
  },
  watch: {
    selectedData: function () {
      console.log(this.selectedData)
      this.$emit('selectedDataChanged', this.selectedData)
    }
  }
}
</script>
