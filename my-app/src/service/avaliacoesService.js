const api = require('./apiService');
const url = "/avaliacoes"

export default class Avaliacoes {

    avaliar(avaliacao) {
        return api.post(`${url}/novo`, avaliacao)
    }

    byId(id) {
        return api.get(`${url}/minhas_avaliacoes/${id}`)
    }

}