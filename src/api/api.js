import axios from 'axios';

 const ajax = (url) => {
  return axios.get(url).then((res) => {
        return res;
    })
};

export default ajax;