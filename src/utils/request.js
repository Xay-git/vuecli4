import axios from 'axios'
const base = process.env.VUE_APP_BASE_URL;
let request = {
    post(url, params){
      return axios({
          method: 'post',
          url: `${base}${url}`,
          data: params,
          transformRequest: [function (data) {
              let ret = '';
              for (let i in data) {
                  ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
              }
              return ret;
          }],
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      });
    }
}

export default request