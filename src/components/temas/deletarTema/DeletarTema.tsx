import { Button, CardActions, CardContent, Typography } from '@material-ui/core'
import { Box, Card } from '@mui/material'
import './DeletarTema.css'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Tema from '../../../model/Tema'
import { buscaId, deleteId } from '../../../services/Service'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokenReducer'
import { toast } from 'react-toastify'


function DeletarTema() {

    let navigate = useNavigate()

    const { id } = useParams<{id: string}>()

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    const [tema, setTema] = useState<Tema>()

    // protegendo a tela de navegação p/ quem n tiver um token (ñ estiver logado)
    useEffect(() => {
        if(token === '') {
            toast.warn('Você precisa estar logado.', {
                position: 'top-right', 
                autoClose: 2000, //2 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
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
        buscaId(`tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }


    function sim() {
        navigate('/temas')
        deleteId(`/tema/${id}`, {
            headers: {
                'Authorization': token
            }
        })
        toast.success('Tema deletado com sucesso!', {
            position: 'top-right', 
            autoClose: 2000, //2 segundos
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
        })
    }

    function nao() {
        navigate('/temas')
    }
    
    

    return(
        <>
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Box justifyContent='center'>
                            <Typography color='textSecondary' gutterBottom>
                                Deseja deletar o tema?
                            </Typography>
                            <Typography color='textSecondary'>
                                {tema?.descricao}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button onClick={sim} variant='contained' size='large' style={{ fontWeight: 'bold'}} >
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant='contained' size='large' style={{ backgroundColor: "#C21010", color: "white", fontWeight: 'bold' }} >
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

export default DeletarTema