import axios from 'axios';

const baseDomain = 'https://my-json-server.typicode.com';
const baseURL = `${baseDomain}/valentingonzalez/3cfarmscannabis/`;
export default axios.create({
    baseURL
})