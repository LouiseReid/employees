<template>
  <div>
    <h3>{{employee.employee_name}}</h3>
    <p>Salary: {{employee.employee_salary}}</p>
    <p>Age: {{employee.employee_age}}</p>
  </div>
</template>

<script>
import EmployeeService from "@/services/EmployeeService";
export default {
  props: ["id"],
  data() {
    return {
      employee: {}
    };
  },
  mounted() {
    EmployeeService.getEmployee(this.id).then(data => (this.employee = data));
  }
};
</script>

<style lang="scss" scoped>

</style>