import React, { ChangeEvent, useState, useEffect } from 'react';
import './Login.css'
import { Typography, Button } from '@material-ui/core';
import { Grid, Box, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
// import logo from '../../components/img/logo.png'
import UsuarioLogin from '../../model/UsuarioLogin';
import { login } from '../../services/Service';
import useLocalStorage from 'react-use-localstorage';

function Login() {

    let navigate = useNavigate()

    const[token, setToken] = useLocalStorage('token')
                                                // isso aqui é TypeScript
    const[userLogin, setUserLogin] = useState<UsuarioLogin>({
        id: 0, // n tem como começar em branco, então inicializa em zero
        usuario: '',
        senha: '' ,
        token: '',
    })

    function updatedModel(event: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
        setUserLogin(userLogin)
    }

    // essa função vai acessar o meu back-end
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            await login (`usuarios/logar`, userLogin, setToken)
            alert("Usuário logado com sucesso!");

        } catch(error) {
            alert("Dados inconsistentes. Erro ao logar.");
        }

    }

    // responsável pelo controle do ciclo de vida de um componente
    useEffect(() => {
        if(token != '') {
            navigate('/home')
        }
    }, [token])

    return(
        <>
            <Grid container direction="row" alignItems="center" justifyContent="center">
                <Grid item xs={6} alignItems="center">
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            
                            <Typography variant="h3" gutterBottom component='h3' align='center' style={{ fontWeight: 'bold' }} >Entrar</Typography>

                            <TextField id="usuario" label="Usuário" name='usuario' onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} value={userLogin.usuario} variant="outlined" fullWidth margin='normal'></TextField>
                            <TextField id="senha" label="Senha" name='senha' type='password' onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} value={userLogin.senha} variant="outlined" fullWidth margin='normal'></TextField>

                            <Box marginTop={2} textAlign="center">
                                <Button type="submit" variant="contained" style={{ backgroundColor: "#212121", color: "#fff" }}>Entrar</Button>
                            </Box>   

                        </form>
                    

                        <Box display= "flex" justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center' >Ainda não tem uma conta?</Typography>
                            </Box>

                            <Link to='/cadastrousuario'>
                                <Typography  variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}> Cadastre-se</Typography> 
                            </Link>
                        
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={6} style= {{
                    backgroundImage: `url(https://i.imgur.com/2HlaEye.gif)`,
                    backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
                }} >

                </Grid>
            </Grid>
        </>
    )
}

export default Login