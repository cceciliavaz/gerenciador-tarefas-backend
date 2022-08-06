import axios, {Method} from 'axios';
import { getItem } from './sessionCommand';

export const executeRequest = (endpoint : string, method: Method, body?: any) => {
    const headers = {'Content-Type' : 'application/json'} as any;

    const accessToken = getItem('sessionUser');
    if(accessToken && accessToken.token){
        headers['Authorization'] = 'Bearer ' + accessToken.token;
    }

    const URL = 'http://localhost:3000/api/' + endpoint;
    console.log(`Executando: ${URL}, método: ${method}, body: ${body}`);
    return axios.request({
        url: URL,
        method,
        data : body ? body : '',
        headers,
        timeout : 30000
    });
}