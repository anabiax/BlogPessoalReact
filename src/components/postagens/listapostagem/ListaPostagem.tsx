import './ListaPostagem.css'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CardContent, Typography , Box, Card, CardActions, Button} from '@mui/material'
import Postagem from '../../../model/Postagem'
import useLocalStorage from 'react-use-localstorage'
import { busca } from '../../../services/Service'


function ListaPostagem() {

    let navigate = useNavigate()

    const [posts, setPosts] = useState<Postagem[]>([])

    const [token, setToken] = useLocalStorage('token')

    // protegendo a tela de navegação p/ quem n tiver um token (ñ estiver logado)
    useEffect(() => {
        if(token === '') {
            alert('Você precisa estar logado.')
            navigate('/login') // direciona p/ a tela de login
        }
    }, [token])

    // indo no meu back-end buscar os temas
    async function getPost() {
        await busca('/postagens', setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }


    // useEffect roda qnd a tela é carregada. Ele é um disparador da função acima
    useEffect(() => {
        getPost()
    }, [posts.length]) // toda vez que a minha variável posts mudar de tamanho disparará o getPost por causa desse useEffect



    return(
        <>
            {
                posts.map(post => (
                    <Box m={2} className="color">
                        <Card variant='outlined'>
                            <CardContent>
                                <Typography color='textSecondary' gutterBottom>
                                    Postagens
                                </Typography>

                                <Typography variant='h5' component='h2'> 
                                    {post.titulo}
                                </Typography>

                                <Typography variant='h4' component='h4'> 
                                    {post.texto}
                                </Typography>

                                <Typography variant='h5' component='h5'> 
                                    {post.tema?.descricao}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Box className="box" mb={1.5}>

                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant='contained' size='small' style={{ backgroundColor: "#A10035", color: "white" }}>
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarPostagem/${post.id}`} className='text-decorator-none'>
                                        <Box mx={1}>
                                            <Button variant='contained' size='small' style={{ backgroundColor: "#212121", color: "white" }}>
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

export default ListaPostagem