import axios from 'axios';

const httpClient = axios.create({
    baseURL: "https://ec2-52-20-131-9.compute-1.amazonaws.com:8080"
})


class ApiService {

    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    get(uri) {
        const requestURL = `${this.apiurl}${uri}`;
        let res = httpClient.get(requestURL)
        return {
            data: res.data,
            status: res.status
        }
    }

    post(uri, params) {
        const requestURL = `${this.apiurl}${uri}`;
        let res = httpClient.post(requestURL, params);
        return {
            data: res.data,
            status: res.status
        }
    }

    put(uri, params) {
        const requestURL = `${this.apiurl}${uri}`;
        let res = httpClient.put(requestURL, params);
        return {
            data: res.data,
            status: res.status
        }
    }

    delete(uri) {
        const requestURL = `${this.apiurl}${uri}`;
        let res = httpClient.delete(requestURL)
        return res.status
    }


    postImg(url, params, headers) {
        let res = httpClient.post(url, params, headers);
        return {
            data: res.data,
            status: res.status
        }
    }

}

export default ApiService;