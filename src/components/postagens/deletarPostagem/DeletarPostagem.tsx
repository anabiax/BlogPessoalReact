import { CardContent } from '@mui/material'
import './DeletarPostagem.css'
import { Button, Card, Typography, CardActions } from '@material-ui/core'
import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Postagem from '../../../model/Postagem'
import { buscaId, deleteId } from '../../../services/Service'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokenReducer'
import { toast } from 'react-toastify'



function DeletarPostagem() {

    let navigate = useNavigate()

    const { id } = useParams<{id: string}>()

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )


    const [post, setPost] = useState<Postagem>()

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


    // fará a comunicação com o back-end
    useEffect(() => {
        if(id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        //esse método está no Service.ts
        buscaId(`postagens/${id}`, setPost, {
            headers: {
                'Authorization': token
            }
        })
    }


    function sim() {
        navigate('/posts') // rota do blog pessoal
        deleteId(`/postagens/${id}`, { //rota da API - back-end
            headers: {
                'Authorization': token
            }
        })
        toast.success('Postagem deletada com sucesso!', {
            position: 'top-right', 
            autoClose: 2000, //2 segundos
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false, // mover alocalização de local
            theme: 'colored',
            progress: undefined,
        })
    }

    function nao() {
        navigate('/posts')
    }
    

    
    return (
        <>
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Box justifyContent='center'>
                            <Typography color='textSecondary' gutterBottom>
                                Deseja deletar a postagem?
                            </Typography>

                            <Typography color='textSecondary'>
                                {post?.titulo}
                            </Typography>
                        </Box>
                    </CardContent>

                    <CardActions>
                        <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button onClick={sim} variant='contained' className='marginLeft' size='large' style={{ fontWeight: 'bold'}} >
                                    Sim
                                </Button>
                            </Box>

                            <Box >
                                <Button onClick={nao} variant='contained' size='large' style={{ backgroundColor: "#AE431E", color: "white", fontWeight: 'bold' }} >
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default DeletarPostagem