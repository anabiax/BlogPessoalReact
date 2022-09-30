import React from 'react'
import './Footer.css'
import blueGrey from '@material-ui/core/colors/blueGrey';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';

function Footer() {
    const cinzaMediano = blueGrey[900]; //#263238
    const cinzaClaro = blueGrey[500]; // #607d8b

    return(
        <>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid alignItems="center" item xs={12}>
                        <Box style={{ backgroundColor: "#607d8b", height: "120px" }}>
                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Contacte-me </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://www.linkedin.com/in/anabsantoss/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                                </a>
                                <a href="https://github.com/anabiax" target="_blank">
                                    <GitHubIcon style={{ fontSize: 48, color: "white" }} />
                                </a>
                            </Box>
                        </Box>
                        <Box style={{ backgroundColor: "#37474f", height: "70px" }}>
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright</Typography>
                            </Box>
                            <Box >
                                <hr></hr>
                                <a >
                                    <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Desenvolvido por Ana Beatriz dos Santos.</Typography>
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
        </>
    )
}

export default Footer