<template>
  <div id="app">
    <div id="nav" v-if="routes">
      <router-link to="/">Home</router-link> |
      <router-link to="/bios">Bios</router-link> |
      <router-link to="/books">Books</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  async created() {
    await this.getRoutes();

    if (this.routes) {
      await this.getBios();
      await this.getBooks();
    } else {
      this.$router.push('/maintenance');
    }
  },
  computed: {
    ...mapState({ routes: state => state.routes }),
  },
  methods: {
    ...mapActions(['getRoutes', 'getBios', 'getBooks']),
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.uppercase {
  text-transform: uppercase;
}

ul {
  list-style: none;
}

.order-list {
  display: flex;
  padding: 0;
}
</style>
