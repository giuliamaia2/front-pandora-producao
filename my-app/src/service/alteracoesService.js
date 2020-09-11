const api = require("./apiService");

export default class Alteracoes {

    static getEndereco(id) {
        return api.get(`/enderecos/buscar-solicitante/${id}`)
    }

    static changeAdress(enderecoNovo, id) {
        return api.put(`/enderecos/alterar-endereco/${id}`, enderecoNovo)
    }

    static emailPrestador(email, id) {
        return api.put(`/prestadores/alterar_email/${id}`, email)
    }

    static emailSolicitante(email, id) {
        return api.put(`/solicitantes/alterar_email/${id}`, email)
    }

    static senhaPrestador(senha, id) {
        return api.put(`/prestadores/alterar_senha/${id}`, senha)
    }

    static senhaSolicitante(senha, id) {
        return api.put(`/solicitantes/alterar_senha/${id}`, senha)
    }

    static telefonePrestador(telefone, id) {
        return api.put(`/prestadores/alterar_telefone/${id}`, telefone)
    }

    static telefoneSolicitante(telefone, id) {
        return api.put(`/solicitantes/alterar_telefone/${id}`, telefone)
    }

    static imgPrestador(imagem, id) {
        return api.put(`/prestadores/alterar_imagem/${id}`, imagem)
    }

    static imgSolicitante(imagem, id) {
        return api.put(`/solicitantes/alterar_imagem/${id}`, imagem)
    }

}