import axios from 'axios';
const headers = new Headers({
  'Content-Type': 'application/json',
});

export const makeGetCall = endPoint => axios.get(endPoint, headers);
