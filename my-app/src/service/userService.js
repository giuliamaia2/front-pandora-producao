const api = require("./apiService")

export default class User {

    registerProvider(provider) {
        return api.post("/users", provider)
    }

    registerRequester(requester) {
        return api.post("/users", requester)
    }

    login(credentials) {
        return api.post("/user/logar", credentials)
    }

    registerSolicitante(informacoes) {
        return api.post("/solicitantes/cadastrar", informacoes)
    }

    registerEndereco(informacoes) {
        return api.post("/enderecos/cadastrar", informacoes)
    }

    registerPrestador(prestador) {
        return api.post("/prestadores/cadastrar", prestador)
    }

}

