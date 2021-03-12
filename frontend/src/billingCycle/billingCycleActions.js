import axios from 'axios'
const BASE_URL = 'http://localhost:3003/ap'

export function getList() {
    const request = 
    axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}