const api = require('./apiService');
const uri = "/solicitacoes";

export default class File {
    verArquivo(id) {
        return api.get(`${uri}/visualizar-arquivo/${id}`);
    }
    download(id) {
        return `http://ec2-52-20-131-9.compute-1.amazonaws.com:8080/${uri}/gerar-arquivo/${id}`;
    }
}