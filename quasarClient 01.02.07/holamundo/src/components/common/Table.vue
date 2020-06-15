<template>
  <div class="q-pa-md">
    <q-table
      :title="title"
      :data="data"
      :columns="columns"
      :pagination="pagination"
      row-key="name"
      >
      <template v-slot:pagination="scope">
        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="first_page"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.firstPage"
        />

        <q-btn
          icon="chevron_left"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.prevPage"
        />

        <q-btn
          icon="chevron_right"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.nextPage"
        />

        <q-btn
          v-if="pagesNumber > 2"
          icon="last_page"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.lastPage"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    columns: {
      type: Array
    },
    data: {
      type: Array
    }
  },
  data () {
    return {
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 2,
        rowsPerPage: 3
      }
    }
  }
}
</script>
