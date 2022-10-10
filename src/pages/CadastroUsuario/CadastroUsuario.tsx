import React, { useState, useEffect, ChangeEvent } from 'react'
import User from '../../model/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css'
import { Link, useNavigate} from 'react-router-dom';
import { Typography } from '@material-ui/core'
import { Box, Button, Grid, TextField } from '@mui/material'


function CadastroUsuario() {

    let navigate = useNavigate() // precisa de uma função p/ cadastrar e/ou trocar a pessoa de tela
    // o useNavigate consegue entender as rotas de forma automática s/ precisar do link

    const[confirmarSenha, setConfirmarSenha] = useState<String>('')

    const[user, setUser] = useState<User>({
        id: 0, // n tem como começar em branco, então inicializa em zero
        nome: '',
        usuario: '',
        senha: '' ,
        foto: '',
    })


    // armazena os valores do retorno da API -- JSON
    const[userResult, setUserResult] = useState<User>({
        id: 0, 
        nome: '',
        usuario: '',
        senha: '' ,
        foto: '',
    })

    const [cadastro, setCadastro] = useState(false)

    useEffect(() => {
        if(user.nome.length > 3 && user.usuario !== '' && user.senha.length >= 8) {
            setCadastro(true)
        }
    }, [user])

    // responsável pelo controle do ciclo de vida de um componente, acionado após o envio das infos
    useEffect(() => {
        if(userResult.id !== 0) { // indica que n está usando o valor padrão inicializado ali em cima
            navigate('/login')
        }
    }, [userResult])

    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value)
    }

    function updatedModel(event: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    // essa função vai acessar o meu back-end
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        if(confirmarSenha === user.senha && user.senha.length >= 8) {
            try {
                await cadastroUsuario(`usuarios/cadastrar`, user, setUserResult)
                alert("Usuário cadastrado com sucesso!");
            } catch (error) {
                alert("Falha ao cadastrar o usuário. Por favor, confira os campos.")
            }
        } else {
            alert("Dados inconsistentes. Erro ao cadastrar, por favor, verifique as informações submetidas.");
        }
    } 


    return(
        <>
            <Grid container className='container'>
                <Grid item xs={6} className='imagem'></Grid>
                    <Grid container xs={6} justifyContent='center'>
                    
                    <Grid item xs={8} justifyContent='center'>

                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' className='titulo' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>

                            <TextField
                                id="nome"
                                name="nome"
                                value={user.nome}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                                label="Nome completo"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                            />

                            <TextField
                                id="usuario"
                                name="usuario"
                                value={user.usuario}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                                label="Usuário (e-mail)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                            />

                            <TextField
                                id="foto"
                                name="foto"
                                label="foto (url)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                            />

                            <TextField
                                id="senha"
                                name="senha"
                                value={user.senha}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                                label="Senha"
                                variant="outlined"
                                fullWidth
                                type="password"
                                margin="normal"
                                required
                            />
                            <TextField
                                id="confirmarSenha"
                                name="confirmarSenha"
                                value={confirmarSenha}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)}
                                label="Confirmar senha"
                                variant="outlined"
                                fullWidth
                                type="password"
                                margin="normal"
                                required
                            />

                            <Box className='text-decorator-none'>
                                <Link to='/login'>
                                    <Button variant="contained" className='btnCancelar' style={{ backgroundColor: "#212121" }}>
                                        Cancelar
                                    </Button>
                                </Link>
                                
                                <Button type='submit' variant="contained" disabled={!cadastro} className='btnCancelar' style={{ backgroundColor: "#212121", color: "#fff" }}>
                                        Cadastrar
                                </Button>
                            </Box>

                        </form>

                    </Grid>

                </Grid>

            </Grid>

        </>
    )
}

export default CadastroUsuario