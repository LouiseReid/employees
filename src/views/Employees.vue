<template>
  <div id="employees">
    <h2>All Employees</h2>
    <v-container grid-list-md>
      <v-layout row wrap >
        <ListCard v-for="employee in employees" :key="employee.id" :employee="employee"/>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListCard from "@/components/ListCard";

export default {
  name: "Employees",
  computed: {
    ...mapState(["employees"])
  },
  components: {
    ListCard
  }
};
</script>

<style lang="scss" scoped>

h2 {
  text-align: center
}
</style>