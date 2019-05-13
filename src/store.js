import EmployeeService from '@/services/EmployeeService';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employees: []
  },
  mutations: {
    SET_EMPLOYEES(state, data){
      state.employees = data
    },
    ADD_EMPLOYEE(state, data){
      state.employees.push(data)
    }
  },
  actions: {
    getData({ commit }){
      EmployeeService.getEmployees()
      .then( data => commit('SET_EMPLOYEES', data))
    },
    postData({ commit }, payload){
      EmployeeService.addToEmployees(payload)
      // .then(res => commit('ADD_EMPLOYEE', res))
    }
  }
})
