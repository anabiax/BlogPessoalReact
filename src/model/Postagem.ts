import Tema from './Tema'
//demonstra o relacionamento entre Tema e Postagem, como foi feito no back-end

// A INTERFACE DO FRONT-END É UMA MODELAGEM

interface Postagem {
    id: number
    titulo: string
    texto: string
    data: string // garantindo que é um padrão de data p/ o usuário.
    tema?: Tema | null // objeto do tipo  da model Tema
                // postagem necessariamente n precisa ter um tema
    // interrogação indica que é opcional/ n obrigatório.
    date: string
}

export default Postagem