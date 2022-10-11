// A CONFIGURAÇÃO DE VARIÁVEL TEMPORÁRIA É FEITA AQUI

export type Action = {
    type: 'ADD_TOKEN', // variáveis de ambiente ficam em maiúscula
    payload: string // esse é o padrão do token
}

// função anônima
export const addToken = (token: string): Action => ({
    type: 'ADD_TOKEN',  
    payload: token
})
// isso é temporário, pois n é armazenado em lugar fixo algum. A variável deixa de existir ao mudar de página.