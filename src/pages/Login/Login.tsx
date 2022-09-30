import React from 'react'
import './Login.css'
import { Typography, Button } from '@material-ui/core';
import { Grid, Box, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

function Login() {
    return(
        <>
            <Grid container direction="row" alignItems="center" justifyContent="center">
                <Grid item xs={6} alignItems="center" justifyContent="center">
                    <Box paddingX={20}>
                        <form>
                            <Typography variant="h2" >Entrar</Typography>

                            <TextField id="outlined-basic" label="Usuario" variant="outlined" fullWidth margin='normal'></TextField>
                            <TextField id="outlined-basic" label="Senha" variant="outlined" fullWidth margin='normal'></TextField>

                            <Link to="/home"><Button type="submit" variant="contained" style={{ backgroundColor: "#212121", color: "#fff" }}>Entrar</Button></Link>
                        </form>
                    

                        <Box display= "flex">
                            <Typography>Ainda não tem uma conta?</Typography>
                            <Typography>Cadastre-se</Typography>

                        </Box>
                        
                    </Box>
                </Grid>

                <Grid item xs={6} className="bg-login" >

                </Grid>
            </Grid>
        </>
    )
}

export default Login