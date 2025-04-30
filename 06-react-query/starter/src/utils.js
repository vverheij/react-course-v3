import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'http://localhost:5001/api/tasks',
  header: {
    Accept: 'application/json',
  },
});

export default customFetch;
