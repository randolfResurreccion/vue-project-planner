<template>
  <div class="container">
    <div class="main">
      <div class="card">
        <div class="header">
          <h1>Page Not Found</h1>
        </div>
        <div class="body">
          <p>
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </p>
          <p>
            <router-link :to="{ name: 'home' }">
              <span class="material-icons chevron"> chevron_left </span>
              Back to our site
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
}
</script>

<style scope>
.container {
  overflow: hidden;
  background: rgb(14, 30, 37);
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
}
.main {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  z-index: 5;
}

.card {
  position: relative;
  background: #fefefe;
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 400px;
  padding: 24px;
  background: white;
  color: rgb(14, 30, 37);
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgb(14 30 37 / 16%);
}

h1 {
  margin: 0;
  font-size: 22px;
  line-height: 24px;
  color: var(--secondary-color);
}

a {
  margin: 0;
  text-decoration: none;
  font-weight: 600;
  line-height: 24px;
  color: var(--primary-color);
}

.material-icons.chevron {
  color: var(--primary-color);
  font-weight: bold;
  position: relative;
  top: 7px;
}
</style>
