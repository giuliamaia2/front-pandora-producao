const api = require('./apiService');
const uri = "/solicitacoes";

export default class File {
    verArquivo(id) {
        return api.get(`${uri}/visualizar-arquivo/${id}`);
    }
    download(id) {
        return `http://localhost:8080/${uri}/gerar-arquivo/${id}`;
    }
}