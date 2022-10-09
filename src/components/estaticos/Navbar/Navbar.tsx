import './Navbar.css'
import * as React from 'react'
import { AppBar, Toolbar, Tooltip } from '@material-ui/core'
import { Box, Menu, Container, Typography, Grid, Button } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'


// const settings = ['Perfil', 'Conta', 'Logout'];


function Navbar() {

    let navigate = useNavigate()

    const [token, setToken] = useLocalStorage('token')

    // zerar o token armazenado no localstorage
    function goLogout() {
        setToken('')
        alert('O usuário não está mais logado.')
        navigate('/login') // direciona p/ a tela de login
    }




    
    return (

        <AppBar position="static" style={{ borderColor: "white", backgroundColor: "#212121", color: "white" }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 800,
                                letterSpacing: '.5rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            BLOG 
                        </Typography>


                            <Grid container justifyContent="flex-end">
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
                                    
                                        {/* <Typography  style={{ paddingLeft: "20px" }} variant="subtitle1" color="inherit">
                                            LOGOUT
                                        </Typography> */}

                                        <Button variant='contained' size='medium' style={{ backgroundColor: '#C21010', fontWeight: 'bold' }} >
                                            LOGOUT
                                        </Button>
                                </Box>
                            </Box>
                                
                        </Grid>


                        {/* BOLINHA À DIREITA DA TELA */}
                            {/* <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp"/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                                </Menu>
                            </Box> */}
                    
                </Toolbar>
            </Container>
        </AppBar>

    )
    
}

export default Navbar