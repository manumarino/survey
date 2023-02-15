import { Box } from '@mui/material';
import React from 'react';
import IMAGES from './images';
import Contenedor from './Contenedor';


function SurveyCreator() {
    const image = "/img/fondo.jpg"

    return (        
        <div className='FondoEncuesta'
            style={{ 
                backgroundImage: `url(${require('../../img/fondo.jpg')})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            backgroundColor:"#bacada",
            minHeight: '100%', 
            paddingTop: "2rem",
        }}
        >
            <Contenedor/>

        </div>
        
    )
 }
 
export default SurveyCreator
