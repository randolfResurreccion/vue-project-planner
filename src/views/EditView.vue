<template>
  <div v-if="!notFound">
    <form @submit.prevent="onSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required />
      <label>Details:</label>
      <textarea v-model="details" required></textarea>
      <button>Update Project</button>
    </form>
  </div>
  <div v-else>
    <ErrorPage />
  </div>
</template>

<script>
import ErrorPage from '@/views/ErrorPage'
export default {
  name: 'EditView',
  props: ['id'],
  data() {
    return {
      project: null,
      title: '',
      details: '',
      notFound: false,
    }
  },
  components: { ErrorPage },
  async mounted() {
    this.project = await this.fetchProject()
    this.notFound = !Object.keys(this.project).length

    this.title = this.project.title
    this.details = this.project.details
  },
  methods: {
    async fetchProject() {
      const res = await fetch(`http://localhost:3000/projects/${this.id}`)
      const data = await res.json()

      return data
    },
    async onSubmit() {
      await fetch(`http://localhost:3000/projects/${this.id}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          title: this.title,
          details: this.details,
        }),
      })

      this.$router.push({ name: 'home' })
    },
  },
}
</script>

<style></style>
