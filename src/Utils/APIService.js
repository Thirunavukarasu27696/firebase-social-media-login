
import axios from 'axios';
import cors from 'cors';
const post = (url, token, data) => {
    return axios({
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: data
    }).then(response => {
        return response.data;
    })
        .catch(err => {
            return err;
        });

}
const get = (url, token) => {
    // url: url,
    // method: 'GET',
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    //     "Access-Control-Allow-Headers": "X-Requested-With,content-type",
    //     "Access-Control-Allow-Credentials": true,
    //     'Authorization': `Bearer ${token}`
    // },
    var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };
    return axios.get(url, config).then(response => {
        return response.data;
    })
        .catch(err => {
            return err;
        });

}
export const APIService = {
    get, post
}