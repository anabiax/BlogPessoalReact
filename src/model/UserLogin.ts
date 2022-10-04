interface UserLogin {
    id: number;
    usuario: string;
    senha: string;
    token: string | null // token é a prova de que a pessoa está conectada
        // a tipagem boolean n dá certo pq preciso o valor do token no formato string
}

export default UserLogin