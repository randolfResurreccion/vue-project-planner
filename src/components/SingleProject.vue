<template>
  <div class="project" :class="project.complete && completedClass">
    <div class="actions">
      <h3 @click="toggleDetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'edit', params: { id: project.id } }">
          <span class="material-icons"> edit </span>
        </router-link>

        <span
          class="material-icons delete-icon"
          @click="deleteProject(project.id)"
        >
          delete
        </span>
        <span
          class="material-icons"
          :class="{ tick: project.complete }"
          @click="toggleComplete(project.id)"
        >
          done
        </span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleProject',
  props: ['project'],
  data() {
    return {
      completedClass: 'completed',
      showDetails: false,
      url: 'http://localhost:3000/projects/',
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails
    },
    async toggleComplete(id) {
      await fetch(`${this.url}${id}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          complete: !this.project.complete,
        }),
      })

      this.$emit('complete', this.project.id)
    },
    async deleteProject(id) {
      await fetch(`${this.url}${id}`, {
        method: 'DELETE',
      })

      this.$emit('delete', this.project.id)
    },
    async fetchData() {
      const res = await fetch(this.url)
      const data = await res.json()

      return data
    },
  },
}
</script>

<style>
.project {
  margin: 20px auto;
  background: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--secondary-color);
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}

.material-icons:hover {
  color: #777;
}
.material-icons.delete-icon:hover {
  color: var(--secondary-color);
}

h3 {
  cursor: pointer;
}

.project.completed {
  border-left: 4px solid var(--primary-color);
}
.material-icons.tick {
  color: var(--primary-color);
}
</style>
