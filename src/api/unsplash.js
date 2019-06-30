import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9a175058ce4c3a6ec6a8e9eeee5211537c325b800d2100bc225e1817eef09bca'
  }
});