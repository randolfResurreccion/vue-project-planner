<template>
  <div class="home">
    <FilterNav @filterChange="onFilterChange" :filterBy="filterBy" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          @delete="onDelete"
          @complete="onComplete"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleProject from '@/components/SingleProject'
import FilterNav from '@/components/FilterNav'

export default {
  name: 'HomeView',
  components: {
    SingleProject,
    FilterNav,
  },
  data() {
    return {
      projects: [],
      completedClass: 'completed',
      filterBy: 'all',
    }
  },
  computed: {
    filteredProjects() {
      if (this.filterBy === 'completed') {
        return this.projects.filter((project) => project.complete)
      }

      if (this.filterBy === 'ongoing') {
        return this.projects.filter((project) => !project.complete)
      }

      return this.projects
    },
  },
  async mounted() {
    this.projects = await this.fetchData()
  },
  methods: {
    onDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id)
    },
    async onComplete(id) {
      let project = this.projects.find((project) => project.id == id)
      project.complete = !project.complete
    },
    async fetchData() {
      const res = await fetch('http://localhost:3000/projects')
      const data = await res.json()

      return data
    },
    onFilterChange(filterBy) {
      this.filterBy = filterBy
    },
  },
}
</script>

<style scoped>
</style>
