import ApiService from './apiService';

class UserService extends ApiService {

    constructor() {
        super('');
    }

    registerRequester(requester) {
        return this.post("/users", requester)
    }

    login(credentials) {
        return this.post("/user/logar", credentials)
    }

    registerSolicitante(informacoes) {
        return this.post("/solicitantes/cadastrar", informacoes)
    }

    registerEndereco(informacoes) {
        return this.post("/enderecos/cadastrar", informacoes)
    }

    registerPrestador(prestador) {
        return this.post("/prestadores/cadastrar", prestador)
    }

}

export default UserService;