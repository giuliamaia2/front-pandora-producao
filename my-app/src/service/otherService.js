const api = require("./apiService");

export default class Other {

    getServicosTodos() {
        return api.get("/servicos/todos")
    }

    meusServico(id) {
        return api.get(`/servicos/meus-servicos/${id}`)
    }

    getCategoriasc() {
        return api.get("/categoria-servico")
    }

    filtrarServico(id) {
        return api.get(`/servicos/buscar-categoria/${id}`)
    }

    cadastrarSolicitacao(idPres, idSol, descricao) {
        return api.post(`/solicitacoes/nova_solicitacao/${idPres}/${idSol}`, { descricao })
    }

    pegarAvaliacao(id) {
        return api.get(`/avaliacoes/media/${id}`)
    }


}