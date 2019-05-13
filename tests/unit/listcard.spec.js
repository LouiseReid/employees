import ListCard from '@/components/ListCard';
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Router from 'vue-router';
import Vuetify from 'vuetify';


const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(Router)

describe('ListCard.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(ListCard, {
            propsData: {
                employee: {
                    id: 1,
                    employee_name: "Louise",
                    employee_salary: 10,
                    employee_age: 31,
                    profile_image: "louise.png"
                }
            },
            localVue
        })
    })

    it('renders the employees profile image', () => {
        expect(wrapper.vm.$el.querySelector('img').src)
            .toEqual('http://localhost/louise.png')

    })

    it('renders the employees name', () => {
        expect(wrapper.vm.$el.querySelector('h4').textContent)
            .toEqual('Louise')
    })

})