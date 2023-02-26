import { Box, Container, Paper, TextField, Typography, useMediaQuery, createTheme, Stack } from '@mui/material';
import React, { useState } from "react";
import IMAGES from './images';
import Contenedor from './Contenedor';
import Contenedor2 from './Contenedor2';


function SurveyCreator() {
    const theme = createTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    
    const [background, setBackground] = useState(
        "https://i.stack.imgur.com/2o0Bj.jpg"
      );
      const [logo, setLogo] = useState(
        "https://debmedia.com/_next/static/media/logo.9b06b54c.svg"
      );
      const [title, setTitle] = useState("Encuesta de satisfacción de servicio");
      
  
      const handleBackgroundChange = (e) => {
        setBackground(e.target.value);
      };
  
      const handleLogoChange = (e) => {
        setLogo(e.target.value);
      };
  
      const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };
  

    return (        
        <div className='FondoEncuesta'

            style={{ 
            width: '100vw',
            height: 'fit-content', 
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column"
            
        }}
        >
            <Box sx={{  height: "2rem" }} />
            <Container style={{display: "flex", justifyContent: "center"}}>
                <Paper  style={{
                    padding: theme.spacing(1),
                    width: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255, 0.5)",
                }} >
                    <Stack direction={lg ? "column": "row"}>
                        <Box m={1}>
                            <TextField
                            sx={{ maxWidth: 600, minWidth: 300 }}
                            label="URL Fondo"
                            value={background}
                            onChange={handleBackgroundChange}
                            />
                        </Box>
                        <Box m={1}>
                            <TextField
                            sx={{ maxWidth: 600, minWidth: 300 }}
                            label="URL Logo"
                            value={logo}
                            onChange={handleLogoChange}
                            />
                        </Box>
                        <Box m={1}>
                            <TextField
                            sx={{ maxWidth: 600, minWidth: 300 }}
                            label="Título encuesta"
                            value={title}
                            onChange={handleTitleChange}
                            />
                        </Box>
                    </Stack>
                
                </Paper>
            </Container>
            <Box sx={{  height: "2rem" }} />
            <Contenedor2 logo={logo} title={title} />
            <Box sx={{  height: "2rem" }} />

        </div>
        
    )
 }
 
export default SurveyCreator
