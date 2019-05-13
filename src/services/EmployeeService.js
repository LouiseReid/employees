const BASE_URL = 'http://dummy.restapiexample.com/api/v1/'

export default {
    getEmployees() {
        return fetch(BASE_URL + 'employees')
            .then(res => res.json())
    },
    getEmployee(id) {
        return fetch(BASE_URL + `employee/${id}`)
        .then(res => res.json())
    },
    addToEmployees(payload) {
        console.log(payload);
        
        return fetch(BASE_URL + 'create', {
            method: 'POST',
            headers: { 'content-type': 'multipart/form-data' },
            body: payload
        })
        .then(res => console.log(res))
    }
}