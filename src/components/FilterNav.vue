<template>
  <nav class="filter-nav">
    <button
      @click="updateFilter('all')"
      :class="{ active: filterBy === 'all' }"
    >
      View All
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: filterBy === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: filterBy === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  name: 'FilterNav',
  props: ['filterBy'],
  methods: {
    updateFilter(filterBy) {
      this.$emit('filterChange', filterBy)
    },
  },
}
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}

.filter-nav button.active {
  color: #555;
}
</style>
