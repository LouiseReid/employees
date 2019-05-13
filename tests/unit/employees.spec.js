import Employees from "@/views/Employees";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuetify from 'vuetify';
import Vuex from "vuex";

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

const store = new Vuex.Store({
    state: {
        employees: [
            { "id": "1", "employee_name": "Louise", "employee_salary": "1300", "employee_age": "19", "profile_image": "" },
            { "id": "2", "employee_name": "Colin", "employee_salary": "1700", "employee_age": "23", "profile_image": "" },
            { "id": "2", "employee_name": "Sarah", "employee_salary": "1900", "employee_age": "19", "profile_image": "" }
        ]
    }
})

describe('Employees.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Employees, {
            store,
            localVue
        })
    })

    it('renders All Employees as title', () => {
        expect(wrapper.vm.$el.querySelector('h2').textContent)
        .toEqual('All Employees')
    })

    xit('renders props.msg when passed', () => {

        expect(wrapper.text()).toMatch(msg)
    })
})