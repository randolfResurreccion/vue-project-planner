<template>
  <form @submit.prevent="onSubmitForm">
    <label>Title:</label>
    <input v-model="title" type="text" required />
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  name: 'AddView',
  data() {
    return {
      title: '',
      details: '',
    }
  },
  methods: {
    async onSubmitForm() {
      const project = {
        title: this.title,
        details: this.details,
        complete: false,
      }

      await fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(project),
      })

      this.$router.push({ name: 'home' })

      this.title = ''
      this.details = ''
    },
  },
}
</script>

<style>
form {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  border: 1px solid #ddd;
  height: 100px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
}

form button {
  display: block;
  margin: 20px auto 0;
  background: var(--primary-color);
  color: #fff;
  padding: 10px 15px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>
