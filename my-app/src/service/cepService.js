const api = require('./apiService')

export default class CEP {
    buscarCep(cep) {
        return api.get(`/consultas/cep/${cep}`);
    }
}