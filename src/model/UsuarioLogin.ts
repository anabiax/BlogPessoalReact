interface UsuarioLogin {
    id: number;
    // nome: string;
    usuario: string;
    senha: string;
    // foto: string;
    token: string | null // token é a prova de que a pessoa está conectada
        // a tipagem boolean n dá certo pq preciso o valor do token no formato string
}

export default UsuarioLogin