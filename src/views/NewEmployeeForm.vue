<template>
  <div>
    <form @submit.prevent="addEmployee">
      <label for="employee_name">Name:</label>
      <input type="text" id="employee_name" v-model="employee.employee_name" required>
      <label for="salary">Salary:</label>
      <input type="number" min="0" v-model="employee.employee_salary" required>
      <label for="age">Age:</label>
      <input type="number" min="0" v-model="employee.employee_age" required>
      <input type="submit" value="Add Employee">
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      employee: {
          profile_image: ""
      }
    };
  },
  methods: {
    ...mapActions(["postData"]),
    addEmployee() {
      this.postData(this.employee)
      .then(this.$router.push({ name: "employees" }));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>