<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>

<style>
:root {
  --primary-color: #12b886;
  --secondary-color: #e64980;
}
body {
  background-color: #f2f2f2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #2c3e50;
}
</style>
