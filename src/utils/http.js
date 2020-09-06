import axios from './../config/axios';

// axios from 'axios';

export function get(url) {
  return axios({
    headers:getHeaders(),
    method: 'get',
    url: url,
  });
}

function getHeaders(){
    const encoded = window.btoa("superman:Admin123");
    const auth = "Basic " + encoded;
    return{
        Accept : "application/json",
        Authorization:auth 
    }
}
export function post(url, item) {
  return axios({
    method: 'post',
    url: url,
    data: item,
  });
}

export function patch(url, item) {
  return axios({
    method: 'patch',
    url: url,
    data: item,
  });
}

export function put(url, item) {
  return axios({
    method: 'put',
    url: url,
    data: item,
  });
}

export function remove(url, item) {
  return axios({
    method: 'delete',
    url: url,
    data: item,
  });
}
