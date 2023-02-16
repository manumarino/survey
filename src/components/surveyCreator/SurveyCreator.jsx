import { Box } from '@mui/material';
import React from 'react';
import IMAGES from './images';
import Contenedor from './Contenedor';
import Contenedor2 from './Contenedor2';


function SurveyCreator() {
    const image = "/img/fondo.jpg"

    return (        
        <div className='FondoEncuesta'
            style={{ backgroundImage: `url(${require('../../img/fondo.jpg')})`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: 'fit-content', 
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center"
        }}
        >
            <Box sx={{  height: "2rem" }} />
            <Contenedor2/>
            <Box sx={{  height: "2rem" }} />

        </div>
        
    )
 }
 
export default SurveyCreator
