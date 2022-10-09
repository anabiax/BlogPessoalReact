import { CardContent } from '@mui/material'
import './DeletarPostagem.css'
import { Button, Card, Typography, CardActions } from '@material-ui/core'
import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import Postagem from '../../../model/Postagem'
import { buscaId, deleteId } from '../../../services/Service'


function DeletarPostagem() {

    let navigate = useNavigate()

    const { id } = useParams<{id: string}>()

    const [token, setToken] = useLocalStorage('token')

    const [post, setPost] = useState<Postagem>()

    // protegendo a tela de navegação p/ quem n tiver um token (ñ estiver logado)
    useEffect(() => {
        if(token === '') {
            alert('Você precisa estar logado.')
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
        alert('Postagem deletada com sucesso!')
    }

    function nao() {
        navigate('/posts')
    }
    
    return(
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