<template>
  <div class="q-pa-md">
      <div style="min-width: 250px; max-width: 300px">
        <q-select
          filled
          v-model="selectedData"
          multiple
          :options="options"
          use-chips
          stack-label
          :label="label"
          @change="selectedDataChanged($event)"
        />
      </div>
    </div>
</template>

<script>
export default {
  name: 'MultipleSelector',
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selectedData: []
    }
  },
  watch: {
    selectedData: function () {
      this.$emit('selectedDataChanged', this.selectedData)
    }
  },
  methods: {
    selectedDataChanged (event) {
      console.log(event)
      this.selectedData = event.target.value
      this.$emit('selectedDataChanged', this.selectedData)
    }
  }
}
</script>
