import { TabContext, TabPanel } from '@material-ui/lab'
import './TabPostagem.css'
import { Typography , Box, AppBar, Tabs, Tab, Grid} from '@mui/material'
import ListaPostagem from '../listapostagem/ListaPostagem'
import React, { useState } from 'react'
import fotoAna from '../../img/eugithub.jpeg'

function TabPostagem() {
                            // usado p/ alternar os valores de TabPanel lá debaixo, sendo 1 ou 2 respectivamente.
    const [value, setValue] = useState('1') // começa com a TabPanel 1 = ListaPostagem
    
    //responsável pela mudança de estado
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue)
    }


    
    return(
        <>                              
            <TabContext value={value} >
                <AppBar position="static" >
                    <Tabs onChange={handleChange} centered style={{ backgroundColor: "#212121"}}>
                        <Tab label="Todas as postagens" value="1" style={{ color: "#fff", marginRight: "20px"}} />
                        <Tab label="Sobre mim" value="2" style={{ color: "#fff", marginLeft: "20px"}} />
                    </Tabs>
                </AppBar>

                <TabPanel value="1">
                    <Box className="box-listapostagem">
                        <ListaPostagem />
                    </Box>
                </TabPanel>


                
                <TabPanel value="2" className="containerr">
                    <Grid item xs={6} >
                        <img src={fotoAna} alt="foto do arquivo pessoal de Ana Santos" 
                                            width="350px" 
                                            height="400px" 
                                            style= {{ borderRadius: "50%", 
                                                    backgroundRepeat: 'no-repeat', 
                                                    backgroundPosition: 'center',
                                                    border:"4px solid #999",
                                                    margin: '25px 0 25px 0'  }} />
                    </Grid>

                    <Grid>
                        {/* <Typography variant="h5" 
                                gutterBottom 
                                component="h5" 
                                align='center' 
                                style= {{ fontWeight: 'bold', fontSize: '33px', paddingBottom: '50px' }}>
                                    A dita cuja que vos escreve
                        </Typography> */}
            
                        <Typography variant="body1" 
                                    gutterBottom color="textPrimary" 
                                    style={{ fontSize: "18px"}} 
                                    className="resumop">
                                        Desenvolvedora Full Stack Java Júnior, trazendo como repertório meu fascínio pela interdisciplinaridade atrelada à inovação. 
                                        Atualmente estou no processo de continuidade de carreira das ciências humanas para o desenvolvimento web e sou participante ativa
                                        nas comunidades digitais voltadas para as dimensões de gênero e raça na área tecnológica. Reconhecida pela facilidade em me comunicar de maneira assertiva,
                                        trabalhar em equipes múltiplas e gerenciar conflitos, uma vez que busco adotar como ponto de desenvolvimento constante bons relacionamentos interpessoais.
                        </Typography>
                    </Grid>

                </TabPanel>
            </TabContext>
        </>
    )
}

export default TabPostagem