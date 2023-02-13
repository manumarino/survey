import { Box } from '@mui/material';
import React from 'react';
import IMAGES from './images';
import Contenedor from './Contenedor';


function SurveyCreator() {
    const image = "/img/fondo.jpg"

    return (        
        <div className='FondoEncuesta'
            style={{ backgroundImage: `url(${require('../../img/fondo.jpg')})`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh', 
            padding: "2rem",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center"
        }}
        >
            <Contenedor/>

        </div>
        
    )
 }
 
export default SurveyCreator
