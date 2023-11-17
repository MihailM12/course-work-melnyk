import axios from 'axios'
export const API_URL =  "https://localhost:1313"
console.log(API_URL)

const $api = axios.create({
    baseURL: API_URL,
})
export default $api;