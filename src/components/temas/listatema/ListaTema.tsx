import { CardContent, Typography , Box, Card, CardActions, Button} from '@mui/material'
import './ListaTema.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Tema from '../../../model/Tema'
import useLocalStorage from 'react-use-localstorage'
import { busca } from '../../../services/Service'



function ListaTema() {

    //função que possibilita a navegação interna
    //se o token estiver vazio o usuário vai ser redirecionado p/ a tela de login 
    //fazer requisição da API
    let navigate = useNavigate()

    const [temas, setTemas] = useState<Tema[]>([])

    const [token, setToken] = useLocalStorage('token') // pegando o token de volta de dentro do navegador

    // protegendo a tela de navegação p/ quem n tiver um token (ñ estiver logado)
    useEffect(() => {
        if(token === '') {
            alert('Você precisa estar logado.')
            navigate('/login') // direciona p/ a tela de login
        }
    }, [token])


    //indo no meu back-end buscar os temas
    async function getTemas() {
        await busca('/tema', setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    // useEffect roda qnd a tela é carregada. Ele é um disparador da função acima
    useEffect(() => {
        getTemas() //fará a requisição na API
    }, [temas.length]) // toda vez que a minha variável temas mudar de tamanho disparará o getTemas por causa desse useEffect



    // map é um laço for -- mapeamento do array de temas p/ recriar a estrutura inteira p/ cada tema existente.
    return (
        <>       
            {
                temas.map(tema => (
                    <Box m={2}>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>
                                Tema
                            </Typography>

                            <Typography variant='h5' component='h2'> 
                                Descrição {tema.id} - {tema.descricao}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Box className="box" mb={1.5}>

                                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant='contained' size='small' color='primary'>
                                            Atualizar
                                        </Button>
                                    </Box>
                                </Link>

                                <Link to={`/deletarTema/${tema.id}`} className='text-decorator-none'>
                                    <Box mx={1}>
                                        <Button variant='contained' size='small' color='secondary'>
                                            Deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
                ))
            }
        </>
    )
}

export default ListaTema