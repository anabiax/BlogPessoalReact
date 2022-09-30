import React from 'react'
import './Login.css'
import { Typography, Button } from '@material-ui/core';
import { Grid, Box, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
// import logo from '../../components/img/logo.png'

function Login() {
    return(
        <>
            <Grid container direction="row" alignItems="center" justifyContent="center">
                <Grid item xs={6} alignItems="center">
                    <Box paddingX={20}>
                        <form>
                            <Typography variant="h3" gutterBottom component='h3' align='center' style={{ fontWeight: 'bold' }} >Entrar</Typography>

                            <TextField id="usuario" label="Usuário" name='usuario' variant="outlined" fullWidth margin='normal'></TextField>
                            <TextField id="senha" label="Senha" name='senha' type='password' variant="outlined" fullWidth margin='normal'></TextField>

                            <Box marginTop={2} textAlign="center">
                                <Link to="/home" className="text-decorator-none"><Button type="submit" variant="contained" style={{ backgroundColor: "#212121", color: "#fff" }}>Entrar</Button></Link>
                            </Box>                        
                        </form>
                    

                        <Box display= "flex" justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Ainda não tem uma conta?</Typography>
                            </Box>

                            <Typography  variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}> Cadastre-se</Typography>
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