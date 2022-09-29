import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import styles from './Navbar.module.css'
import { Box } from '@mui/material';


function Navbar() {
    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={styles.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography className={styles.title} variant="h6" noWrap>
                        Blog
                    </Typography>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>

                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>

                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>

                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>

                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                    <div className={styles.search}>
                        <div className={styles.searchIcon}>
                            <SearchIcon />
                        </div>

                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    )
    
}

export default Navbar