import React from 'react'
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material'
import './Home.css'
import fotoLogo from '../../components/img/logo.png'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';


function Home() {

    return (
        <>
            <Grid container className='container'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Jornada</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" className='text' style={{ fontWeight: "bold" }}>
                            "Deseje e sonhe com muita fé no coração. Mas lembre-se, Tiana, aquela estrela só é responsável pela metade. O resto você faz com
                            muito trabalho e então, aí sim, vai poder fazer tudo o que imaginar. 
                            Me prometa só uma coisa. Que nunca vai se esquecer do que é realmente importante."
                            <br></br>
                            <i><span>(A Princesa e o Sapo, 2009).</span></i>
                        </Typography>
                    </Box>
                    <Box className='box-botoes'>
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#212121", color: "white" }}>Nova postagem</Button>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#212121", color: "white" }}>Ver postagens</Button>
                    </Box>
                </Grid>

                <Grid item xs={6} >
                    <img src={fotoLogo} alt="imagem de um notebook e um computador" width="800px" height="500px" />
                </Grid>
                
                <Grid xs={12} style={{ backgroundColor: "white" }}> 
                    <TabPostagem />
                </Grid>
            </Grid>
        </>   
    )
}

export default Home