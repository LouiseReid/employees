import Employee from '@/views/Employee';
import Employees from '@/views/Employees';
import NewEmployeeForm from '@/views/NewEmployeeForm';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'employees',
      component: Employees
    },
    {
      path: '/:id',
      name: 'employee',
      component: Employee, 
      props: true
    },
    {
      path: '/new',
      name: 'employee-add',
      component: NewEmployeeForm
    }
  ]
})
