import React, { useEffect } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import './Home.css'
import framework from '../../components/img/frameworks.png'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokenReducer'
import { toast } from 'react-toastify'



function Home() {

    let navigate = useNavigate()

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token === '') {
            toast.warn('Você precisa estar logado.', {
                position: 'top-right', 
                autoClose: 2000, //2 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
            })
            navigate('/login')
        }
    }, [token])



    return (
        <>
            <Grid container className='container'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Jornada</Typography>
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
                            <ModalPostagem />
                        </Box>

                        <Link to='/posts' className='text-decorator-noneh'>
                            <Button variant="outlined" style={{ backgroundColor: "#212121", color: "white" }} >Ver postagens</Button>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} >
                    <img src={framework} alt="imagem de uma mulher frente ao computador" width="700px" height="600px" style={{ paddingTop: "50px" }} />
                </Grid>
                
                <Grid xs={12} style={{ backgroundColor: "white" }}> 
                    <TabPostagem />
                </Grid>
            </Grid>
        </>   
    )
}

export default Home