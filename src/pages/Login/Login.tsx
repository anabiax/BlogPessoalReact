import React, { ChangeEvent, useState, useEffect } from 'react'
import './Login.css'
import { Typography, Button } from '@material-ui/core'
import { Grid, Box, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import UserLogin from '../../model/UserLogin'
import { login } from '../../services/Service'
import { useDispatch } from 'react-redux'
import { addToken } from '../../store/tokens/action'
import { toast } from 'react-toastify'



function Login() {

    let navigate = useNavigate()

    const dispatch = useDispatch ()

    const[token, setToken] = useState('')
                                                // isso aqui é TypeScript
    const[userLogin, setUserLogin] = useState<UserLogin>({
        id: 0, // n tem como começar em branco, então inicializa em zero
        nome: '' ,
        usuario: '',
        senha: '' ,
        foto: '',
        token: '',
    })

    // atualizar a model com o valor que o usuário digitar no input
    function updatedModel(event: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
    // composição do objeto: a chave representa o nome do campo e o valor que o usuário digitou
            [event.target.name]: event.target.value //valor que o usuário digita
        })              //name do textfield -- capturando a propriedade
    }

    const [form, setForm] = useState(false)

    useEffect(() => {
        if(userLogin.usuario !== '' && userLogin.senha !== '' && userLogin.senha.length >= 8) {
            setForm(true)
        }
    }, [userLogin])
    

    // essa função vai acessar o meu back-end enviando os dados de login do usuário
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            await login ('usuarios/logar', userLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: 'top-right', 
                autoClose: 2000, //2 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false, // mover a localização de local
                theme: 'colored',
                progress: undefined,
            })

        } catch(error) {
            toast.error('Dados inconsistentes. Erro ao logar.', {
                position: 'top-right', 
                autoClose: 2000, //2 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false, // mover a localização de local
                theme: 'colored',
                progress: undefined,
            })
        }
    }

    // responsável pelo controle do ciclo de vida de um componente
    useEffect(() => {
        if(token !== '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])


    

    return(
        <>
            <Grid container className='container'>
                <Grid item xs={6} alignItems="center" >
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            
                            <Typography variant="h3" gutterBottom component='h3' className='botao' style={{ fontWeight: 'bold' }}>Entrar</Typography>

                            <TextField
                                id="usuario" 
                                label="Usuário" 
                                name='usuario' 
                                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} 
                                value={userLogin.usuario} 
                                variant="outlined" 
                                fullWidth 
                                margin='normal'>
                            </TextField>

                            <TextField 
                                id="senha" 
                                label="Senha" 
                                name='senha' 
                                type='password'                                                 //contém toda modificação que atualiza a função
                                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} 
                                value={userLogin.senha} 
                                variant="outlined" 
                                fullWidth 
                                margin='normal'>
                            </TextField>

                            <Box className='box-entrar'>
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    disabled={!form}
                                    style={{ backgroundColor: "#212121", color: "#fff" }}>
                                        Entrar
                                </Button>
                            </Box>   

                        </form>
                    

                        <Box className='box-conta'>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center' >Ainda não tem uma conta?</Typography>
                            </Box>

                            <Link to='/cadastrousuario' className='text-decoration-noneh'>
                                <Typography variant='subtitle1' gutterBottom className='botaocadastrar'> Cadastre-se</Typography> 
                            </Link>
                        
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={6} style= {{
                    backgroundImage: `url(https://images.unsplash.com/photo-1542736488-1967b42fcf54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80)`,
                    backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
                    }} >
                </Grid>
            </Grid>
        </>
    )
}

export default Login