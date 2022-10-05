import { TabContext, TabPanel } from '@material-ui/lab'
import './TabPostagem.css'
import { Typography , Box, AppBar, Tabs, Tab} from '@mui/material'
import ListaPostagem from '../listapostagem/ListaPostagem'
import React, { useState } from 'react'

function TabPostagem() {

    const [value, setValue] = useState('1')
    
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue)
    }

    return(
        <>                              
            <TabContext value={value} >
                <AppBar position="static" >
                    <Tabs onChange={handleChange} centered indicatorColor="secondary" style={{ backgroundColor: "#212121"}}>
                        <Tab label="Todas as postagens" value="1" style={{ color: "#fff"}} />
                        <Tab label="Sobre nós" value="2" style={{ color: "#fff"}} />
                    </Tabs>
                </AppBar>

                <TabPanel value="1">
                    <Box className="box-listapostagem">
                        <ListaPostagem />
                    </Box>
                </TabPanel>

                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align='center' className="titulo">Sobre nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align='justify'>AAAAAAAAAAAAAAA</Typography>

                </TabPanel>
            </TabContext>
        </>
    )
}

export default TabPostagem