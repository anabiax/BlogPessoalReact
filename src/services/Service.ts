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

                        //n precisa ter um retorno na mesma hora pq o back-end precisa pegar as informações. 
    export const busca = async(url: any, setDados: any, header: any) => {
                                                        // onde será colocado o token
                                                        //API vai retornar após conferir se o usuário está autenticado
        const resposta = await api.get(url, header) 
                        
        setDados(resposta.data) 
    }

    export const buscaId = async(url: any, setDados: any, header: any) => {
        const resposta = await api.get(url, header) 

        setDados(resposta.data) 
    }

    export const post = async(url: any, dados: any, setDados: any, header: any) => {
        const resposta = await api.post(url, dados, header) 

        setDados(resposta.data) 
    }

    export const put = async(url: any, dados: any, setDados: any, header: any) => {
        const resposta = await api.put(url, dados, header) 

        setDados(resposta.data) 
    }

    export const deleteId = async(url: any, header: any) => {
        await api.delete(url, header) 

    }