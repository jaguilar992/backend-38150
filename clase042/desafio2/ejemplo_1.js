import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000, 
  headers: {
    'Content-type': 'application/json',
    // 'Authorization': '', //Interceptores
  }
})

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = 'Token'
  return config;
}, 
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

function getPokemon(id) {
  return axiosInstance.get(`/api/pokemon/${id}`);
}

const pokemon25 = getPokemon(25);
const pokemon5 = getPokemon(5);

const reqs = [pokemon5, pokemon25];

Promise.all(reqs)
  .then(resutls => {
    resutls.forEach(resp => {
      console.log(resp.data);
    })
  })
  .then(console.error)
;