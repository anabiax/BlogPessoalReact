import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from '@material-ui/core'
import './CadastroTema.css'
import { useNavigate, useParams } from 'react-router-dom'
import Tema from '../../../model/Tema'
import { findByTestId } from '@testing-library/react'
import { buscaId, post, put } from '../../../services/Service'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokenReducer'
import { toast } from 'react-toastify'


function CadastroTema() {

    let navigate = useNavigate()

    const { id } = useParams<{id: string}>()

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    const [tema, setTema] = useState<Tema> ({
        id: 0,
        descricao: ''
    })

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

// responsável por capturar os valores digitados no formulário e atribuir ao setTema, alterando o state tema
    function updatedTema(event: ChangeEvent<HTMLInputElement>) {
        
        setTema({
            ...tema,
            [event.target.name]: event.target.value,
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log('tema' +JSON.stringify(tema))

        if(id !== undefined) {
            console.log(tema)
            put(`tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso!', {
                position: 'top-right', 
                autoClose: 2000, //2 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
            })
        } else {
            post(`tema`, tema, setTema, {
                headers: {
                    'Authorization' : token
                }
            })
            toast.success('Tema cadastrado com sucesso!', {
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
        back()
    }

    function back() {
        navigate('/temas') // lista todos os componentes cadastrados na API
            //usuário é redirecionado p/ temas
    }


    
    return (
        <>
            <Container maxWidth="sm" className="topo" >
                <form onSubmit={onSubmit}>
                    <Typography
                        variant="h3"
                        color="textSecondary"
                        component="h3"
                        className="cadastrar"
                    >
                        Cadastrar tema
                    </Typography>

                    <TextField
                        value={tema.descricao}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => updatedTema(event)}
                        id="descricao"
                        label="Descrição"
                        variant="outlined"
                        name="descricao"
                        margin="normal"
                        required
                        fullWidth
                    />

                    <Button className="finalizar" type="submit" variant="contained" >
                        Finalizar
                    </Button>

                </form>
            </Container>
        </>
    )
}

export default CadastroTema