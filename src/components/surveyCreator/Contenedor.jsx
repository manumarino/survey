import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../img/deblogo.png';
import { padding } from '@mui/system';
import DebTextInput from './DebTextInput';
import { Box } from '@mui/material';

function Contenedor() {
  return (
    <Card 
        sx={{ maxWidth: "70%" }}>
        <Box
        sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "10rem",
            padding: "2rem"
        }}
        >
            <CardMedia
                sx={{ height: "30%", width: "30%", padding: "3rem" }}
                image={image}
                title="Debmedia"
            />
            <CardContent sx={{padding: "5rem !important" }} >
                <Typography gutterBottom variant="h4" component="div" textAlign="center">
                Encuesta de evaluación de servicio
                </Typography>
            </CardContent>
        </Box>
    </Card>
  );
}

export default Contenedor