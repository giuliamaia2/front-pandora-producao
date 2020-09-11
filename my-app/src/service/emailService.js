const api = require("./apiService")

export default class Email {
    validarEmail(email) {
        return api.post(`/consultas/email`, email)
    }
    recuperarSenha(email) {
        return api.post(`/email/senha`, email)
    }
}