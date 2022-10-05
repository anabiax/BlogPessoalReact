// SERVICE É RESPONSÁVEL PELA REGRA DE NEGÓCIO

import axios from 'axios'

// variável pode ser exportada assim e está acessível de qqr lugar do projeto
export const api = axios.create({ 
    baseURL: 'https://blogpessoal-co2n.onrender.com/'
            //'https://blogpessoalbackendgen.herokuapp.com/'
})
                                                // contém os dados que serão enviados p/ a API(usuário e senha) por meio do corpo da requisição.
    export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {
        const resposta = await api.post(url, dados) 
                        // espero a resposta do back-end
        setDados(resposta.data) // data é o conteúdo do JSON. Ele atualiza com tudo que chegou
    }

    export const login = async(url: any, dados: any, setDados: any) => {
        const resposta = await api.post(url, dados) 
                        
        setDados(resposta.data.token) 
    }
