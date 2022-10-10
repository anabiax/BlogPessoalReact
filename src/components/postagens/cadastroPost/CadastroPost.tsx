import { Button, Container, FormControl, FormHelperText, InputLabel, Select, MenuItem, TextField, Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import './CadastroPost.css'
import useLocalStorage from 'react-use-localstorage'
import Tema from '../../../model/Tema'
import Postagem from '../../../model/Postagem'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect, ChangeEvent } from 'react'
import { buscaId, busca, put, post } from '../../../services/Service'


function CadastroPost() {

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const [temas, setTemas] = useState<Tema[]>([])

    const [token, setToken] = useLocalStorage('token')


    useEffect(() => {
        if(token === '') {
            alert('Você precisa estar logado.')
            navigate('/login') // direciona p/ a tela de login
        }
    }, [token])


    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })


    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        data: '',
        tema: null, // vai preencher com o valor do tema solicitado no select tema lá no form
        date: ''
    })


    useEffect(() => {
        setPostagem ({
            ...postagem,
            tema: tema,
        })
    }, [tema])


    // busca pelo id da postagem específica
    useEffect(() => {
        getTemas()
        if (id !== undefined) { // significa que tenho um id
            findByIdPostagem(id) //pesquisar postagem por meio de um id
        }
    }, [id])
    

    async function getTemas() {
        await busca('/tema', setTemas, {
            headers: { 
                'Authorization': token 
            }
        })
    }
    

    async function findByIdPostagem(id: string) {
        await buscaId(`/postagens/${id}`, setPostagem, {
            headers: { 
                'Authorization': token 
            }
        })
    }

    
    function updatedPostagem(event: ChangeEvent<HTMLInputElement>) {
        setPostagem ({
            ...postagem,
            [event.target.name]: event.target.value,
            tema: tema,
        })
    }

    
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
    
        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: { 
                    Authorization: token 
                },
            })
            alert('Postagem atualizada com sucesso!')

        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: { 
                    Authorization: token 
                },
            })
            alert('Postagem cadastrada com sucesso!')
        }
        back()
    }
    
    function back() {
        navigate('/posts')
    }


    return (
        <>
            <Container maxWidth='sm' className='topo'>
                <form onSubmit={onSubmit}>
                    <Typography variant='h3' color="textSecondary" align='center'  component='h3'>Novo post</Typography>
                    <TextField value={postagem.titulo} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedPostagem(event)} id='titulo' label='Título' variant='outlined' name='titulo' margin='normal' required fullWidth></TextField>
                    <TextField value={postagem.texto} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedPostagem(event)} id='texto' label='Texto' name='texto' variant='outlined' margin='normal' required fullWidth></TextField>


                    <FormControl fullWidth variant="standard"> 
                        <InputLabel id='demo-simple-select-helper-label'>Tema</InputLabel>
                        
                        <Select labelId='demo-simple-select-helper-label' 
                                id='demo-simple-select-helper' 
                                onChange={(event) => buscaId(`tema/${event.target.value}`, setTema, {
                                    headers: {
                                        'Authorization': token},
                                    })}>

                                {temas.map((tema) => (

                                    <MenuItem value={tema.id} >{tema.descricao}</MenuItem>
                                ))}
                        </Select>

                        <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                        
                        <Button style={{ backgroundColor: "#212121", color: "white", width: "100%" }} type='submit' disabled={tema.id === 0} variant='contained'>
                            Finalizar
                        </Button>

                    </FormControl>
                </form>
            </Container>
        </>
    )
}

export default CadastroPost