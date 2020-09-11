// import localStorage from './localStorage'
const api = require('./apiService');
const url = "/solicitacoes";

export default class Solicitacoes {

    getAprovados(id, tipo) {
        return api.get(`${url}/${tipo}/buscar/${id}?status=aprovado`);
    }

    getSolicitados(id, tipo) {
        return api.get(`${url}/${tipo}/buscar/${id}?status=solicitado`);
    }

    getExecucao(id, tipo) {
        return api.get(`${url}/${tipo}/buscar/${id}?status=execucao`);
    }

    getFinalizados(id, tipo) {
        return api.get(`${url}/${tipo}/buscar/${id}?status=fechado`);
    }

    getCancelados(id, tipo) {
        return api.get(`${url}/${tipo}/buscar/${id}?status=cancelado`);
    }

    aprovarSolicitacao(id) {
        return api.put(`${url}/atualizar_solicitacao/${id}`, { "status": "aprovado" });
    }

    executarSolicitacao(id, status) {
        return api.put(`${url}/atualizar_solicitacao/${id}`, { "status": "EXECUCAO" });
    }

    cancelarSolicitacao(id) {
        return api.put(`${url}/atualizar_solicitacao/${id}`, { "status": "cancelado" });
    }

    finalizarSolicitacao(id) {
        return api.put(`${url}/atualizar_solicitacao/${id}`, { "status": "FECHADO" });
    }

}