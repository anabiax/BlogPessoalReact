import './ListaPostagem.css'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CardContent, Typography , Box, Card, CardActions, Button } from '@mui/material'
import Postagem from '../../../model/Postagem'
import { busca } from '../../../services/Service'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokenReducer'
import { toast } from 'react-toastify'



function ListaPostagem() {

    let navigate = useNavigate()

    const [posts, setPosts] = useState<Postagem[]>([])

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )


    // protegendo a tela de navegação p/ quem n tiver um token (ñ estiver logado)
    useEffect(() => {
        if(token === '') {
            toast.error('Você precisa estar logado.', {
                position: 'top-right', 
                autoClose: 2000, //2 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false, // mover alocalização de local
                theme: 'colored',
                progress: undefined,
            })
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
                    <Box m={2} key={post.id} className="color">
                        <Card variant='outlined'>
                            <CardContent>
                                <Typography color='textSecondary' gutterBottom>
                                    Postagens
                                </Typography>

                                <Typography variant='h5' component='h5' style={{ paddingBottom: '10px' }}> 
                                    {post.titulo}
                                </Typography>

                                <Typography variant='h6' component='h6'> 
                                    {post.texto}
                                </Typography>

                                <Typography variant='h5' component='h5' style={{ fontWeight: 'bold', paddingTop: '10px' }} > 
                                    {post.tema?.descricao}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Box className="box" mb={1.5}>

                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant='contained' size='medium' style={{ backgroundColor: "#A10035", color: "white" }}>
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarPostagem/${post.id}`} className='text-decorator-none'>
                                        <Box mx={1}>
                                            <Button variant='contained' size='medium' style={{ backgroundColor: "#212121", color: "white" }}>
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