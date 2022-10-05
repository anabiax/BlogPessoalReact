import { CardContent, Typography , Box, Card, CardActions, Button} from '@mui/material'
import './ListaTema.css'
import React from 'react'
import { Link } from 'react-router-dom'

function ListaTema() {
    return(
        <>
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Tema
                        </Typography>

                        <Typography variant='h5' component='h2'> 
                            Descrição
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Box className="box" mb={1.5}>

                            <Link to='' className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant='contained' className='marginLeft' size='small' color='primary'>
                                        Atualizar
                                    </Button>
                                </Box>
                            </Link>

                            <Link to='' className='text-decorator-none'>
                                <Box mx={1}>
                                    <Button variant='contained' size='small' color='secondary'>
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

export default ListaTema