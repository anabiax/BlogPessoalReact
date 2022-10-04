import React, { useState, useEffect, ChangeEvent } from 'react'
import Usuario from '../../model/Usuario';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css'
import { Link, useNavigate} from 'react-router-dom';
import { Typography } from '@material-ui/core'
import { Box, Button, Grid, TextField } from '@mui/material'


function CadastroUsuario() {

    let navigate = useNavigate()

    const[confirmarSenha, setConfirmarSenha] = useState<String>('')

    const[user, setUser] = useState<Usuario>({
        id: 0, // n tem como começar em branco, então inicializa em zero
        nome: '',
        usuario: '',
        senha: '' ,
    })


    // armazena os valores do retorno da API -- JSON
    const[userResult, setUserResult] = useState<Usuario>({
        id: 0, 
        nome: '',
        usuario: '',
        senha: '' ,
    })

    // responsável pelo controle do ciclo de vida de um componente, acionado após o envio das infos
    useEffect(() => {
        if(userResult.id != 0) {
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
        if(confirmarSenha == user.senha) {
            cadastroUsuario(`usuarios/cadastrar`, user, setUserResult)
            alert("Usuário cadastrado com sucesso!");
        } else {
            alert("Dados inconsistentes. Erro ao cadastrar, por favor, verifique as informações de cadastro.");
        }
    }


    return(
        <>
            <Grid container direction='row' alignItems='center' justifyContent='center'>
                <Grid item xs={6} className='imagem'></Grid>
                    <Grid container xs={6} justifyContent='center'>
                    
                    <Grid item xs={8} justifyContent='center'>

                        <form onSubmit={onSubmit}>
                            <Typography variant='h3'>Cadastre-se</Typography>

                            <TextField
                                id="nome"
                                name="nome"
                                value={user.nome}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                                label="Nome completo"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />

                            <TextField
                                id="usuario"
                                name="usuario"
                                value={user.usuario}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                                label="Usuário"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />

                            {/* <TextField
                                id="email"
                                name="email"
                                label="E-mail"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            /> */}

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
                            />

                            <Box className='text-decorator-none'>
                                <Link to='/login'>
                                    <Button variant="contained" className='btnCancelar' style={{ backgroundColor: "#212121" }}>
                                        Cancelar
                                    </Button>
                                </Link>
                                
                                <Button type='submit' variant="contained" style={{ backgroundColor: "#212121", color: "#fff" }}>
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