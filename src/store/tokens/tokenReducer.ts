import { Action } from './action'

// interface é a modelagem padronizadora
export interface TokenState {
    tokens: string
}

const initialState = {
    tokens: ''
}
                                                                        // fazendo uso da action.ts
export const tokensReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_TOKEN': {
            return {tokens: action.payload}
        }
        default: 
            return state // retorna o estado por completo qnd n cair na variável de ambiente, ou seja, vazio.
    }
}