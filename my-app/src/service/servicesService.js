const api = require("./apiService");
const url = "/servicos";

export default class Service {

    cadastrar(servico) {
        return api.post(`${url}/cadastrar`, servico)
    }

    deleteService(id) {
        return api.delete(`${url}/delete-id/${id}`)
    }

    getServicoById(id) {
        return api.get(`${url}/por-id/${id}`)
    }

    update(id, servico) {
        return api.put(`${url}/alterar-servico/${id}`, servico)
    }

    filtrarPorPalavra(palavra) {
        return api.get(`${url}/busca-palavra?filtro=${palavra}`);
    }

    filtrarPorNota(nota) {
        return api.get(`${url}/por-nota/${nota}`)
    }

}