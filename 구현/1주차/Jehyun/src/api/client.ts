import axios from 'axios';

const baseURL = __DEV__ ? '/개발 용 서버' : '/배포 서버';

const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export function createToken(token: string) {
  client.defaults.headers.Authorization = `Bearer ${token}`;
}
export function deleteToken() {
  delete client.defaults.headers.Authorization;
}

export default client;
