const api = require('../apiService');

const headers = {
    headers: {
        Authorization: "Client-ID 966db375086fadc"
    }
};

const imgURL = "https://api.imgur.com/3/image"


export default class Image {

    uploadImagem(params) {
        return api.postImg(imgURL, params, headers);
    }

    upload(params) {
        return api.postImg(imgURL, params, headers);
    }
}