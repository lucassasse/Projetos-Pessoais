import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/4ac07ad61fb542e9b19537bfd284127c/',
  timeout: 5000
})
