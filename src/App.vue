<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'employees' }">All Employees</router-link>
      <router-link :to="{ name: 'employee-add' }">Add Employee</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["getData"])
  },
  mounted() {
    this.getData();
  }
};
</script>


<style lang="scss">

#nav {
  display: flex;
  justify-content: flex-end
}

a {
  margin: 0 20px;
}
</style>
