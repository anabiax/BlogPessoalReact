import React from 'react'
import './Footer.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Typography, Grid } from '@material-ui/core'
import { Box } from '@mui/material'
import { TokenState } from '../../../store/tokens/tokenReducer'
import { addToken } from '../../../store/tokens/action'
import { useDispatch, useSelector } from 'react-redux'


function Footer() {

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    let footerComponent

    // se for vazio ele n pode renderizar o meu token
    if (token !== '') {
        footerComponent = 
        <Grid container className="container">
            <Grid className="subcontainer" item xs={12}>
                <Box style={{ backgroundColor: "#383838" }}>
                    <Box className="subbox">
                        <Typography className="outrobox" variant="h5" gutterBottom>
                            Contacte-me {' '}
                        </Typography>
                    </Box>

                    <Box className='social' >
                        <a href="https://www.linkedin.com/in/anabsantoss/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                        </a>
                        <a href="https://github.com/anabiax" target="_blank">
                            <GitHubIcon style={{ fontSize: 48, color: "white" }} />
                        </a>
                    </Box>
                </Box>
                    <Box className='footerbaixo'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" className='footerbaixo1' gutterBottom >© 2022 Copyright</Typography>
                        </Box>
                        <Box >
                            <hr></hr>
                            <Typography variant="subtitle2" gutterBottom className='footerbaixo2'>Desenvolvido a base de muito ☕ por AnaB.</Typography>
                        </Box>
                        </Box>
            </Grid>
        </Grid>
    }

    return (
        <>       
            {footerComponent}
        </>
    )
}

export default Footer