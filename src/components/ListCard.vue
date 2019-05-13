<template>
<v-flex xs6 md3>
  <div class="list-card">
    <img :src="employee.profile_image" alt="profile image">
    <h4>{{ employee.employee_name }}</h4>
    <router-link :to="{ name: 'employee', params: {id: employee.id} }">More info</router-link>
  </div>
</v-flex>

</template>

<script>
export default {
  name: "ListCard",
  props: ["employee"]
};
</script>

<style lang="scss" scoped>
.list-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 0.5px solid #000000;
  margin: 10px;
}

img {
  margin-left: 10px;
}

h4 {
  margin-right: 10px;
  max-width: 50%;
}
</style>