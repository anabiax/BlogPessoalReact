import './ListaPostagem.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { CardContent, Typography , Box, Card, CardActions, Button} from '@mui/material'


function ListaPostagem() {
    return(
        <>
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Postagens
                        </Typography>

                        <Typography variant='h5' component='h2'> 
                            Título
                        </Typography>

                        <Typography variant='h4' component='h4'> 
                            Texto da postagem
                        </Typography>

                        <Typography variant='h5' component='h5'> 
                            Tema
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Box className="box" mb={1.5}>

                            <Link to='' className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant='contained' size='small' style={{ backgroundColor: "#A10035", color: "white" }}>
                                        Atualizar
                                    </Button>
                                </Box>
                            </Link>

                            <Link to='' className='text-decorator-none'>
                                <Box mx={1}>
                                    <Button variant='contained' size='small' style={{ backgroundColor: "#212121", color: "white" }}>
                                        Deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default ListaPostagem