import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8d444cc179dc4ca38990145d504e9187',
  },
});
