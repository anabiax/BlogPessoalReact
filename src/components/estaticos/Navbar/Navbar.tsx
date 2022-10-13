import './Navbar.css'
import * as React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Box, Container, Typography, Grid } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokenReducer'
import { addToken } from '../../../store/tokens/action'
import { toast } from 'react-toastify'


function Navbar() {

    let navigate = useNavigate()

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    const dispatch = useDispatch()

    // zerar o token armazenado no localstorage
    function goLogout() {
        dispatch(addToken('')) // garantindo que o token será eliminado
        toast.info('O usuário não está mais logado.', {
            position: 'top-right', 
            autoClose: 2000, //2 segundos
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false, // mover a localização de local
            theme: 'colored',
            progress: undefined,
        })
        navigate('/login') // direciona p/ a tela de login
    }

    let navbarComponent

    // renderiza se houver um token -- RENDERIZAÇÃO CONDICIONAL
    if(token !== '') {
        navbarComponent = 
            <AppBar position="static" style={{ borderColor: "white", backgroundColor: "#212121", color: "white" }} >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="/"
                                sx= {{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 800,
                                    letterSpacing: '.5rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    marginLeft: '-43px',
                                }}
                            >
                                BLOG   
                            </Typography>


                                <Grid container justifyContent="flex-end" style={{ marginRight: '70px' }}>
                                    <Box display="flex" justifyContent="start">
                                    <Link to='/home'className="text-decorator-none1">
                                        <Box mx={1} className="cursor">
                                            <Typography variant="subtitle1">
                                                HOME
                                            </Typography>
                                        </Box>
                                    </Link>

                                    <Link to='/posts' className="text-decorator-none1">
                                        <Box mx={1} className="cursor">
                                            <Typography variant="subtitle1">
                                                POSTAGENS
                                            </Typography>
                                        </Box>
                                    </Link>

                                    <Link to='/temas' className="text-decorator-none1">
                                        <Box mx={1} className="cursor">
                                            <Typography variant="subtitle1">
                                                TEMAS
                                            </Typography>
                                        </Box>
                                    </Link>

                                    <Link to='/formularioTema' className="text-decorator-none1">
                                        <Box mx={1} className="cursor">
                                            <Typography variant="subtitle1">
                                                CADASTRAR TEMAS
                                            </Typography>
                                        </Box>
                                    </Link>

                                    <Box mx={1} className="logout" onClick={goLogout}>
                                        
                                            <Typography  style={{ paddingLeft: '12px', fontWeight: 'bold' }} variant="subtitle1" color="inherit">
                                                LOGOUT
                                            </Typography>

                                    </Box>
                                </Box>
                                    
                            </Grid>
                        
                    </Toolbar>
                </Container>
            </AppBar>
    }
    
    return (
        <>
            {navbarComponent}
        </>
    )
    
}

export default Navbar