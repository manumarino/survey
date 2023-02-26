import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../img/deblogo.png';
import { padding } from '@mui/system';
import DebSurveyTextInput from './DebSurveyShortQuestion';
import { Box, Container, Divider, Grid, Paper, Stack, useMediaQuery, useTheme } from '@mui/material';
import styled from '@emotion/styled';
import FormikForm from './FormikForm';

const HeaderItem = styled(Paper)(() => ({
    textAlign: 'center',
    elevation: 0,
    boxShadow: 'none'
      
  }));

function Contenedor2({logo, title}) {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


  return (
    <Container disableGutters={sm}>
        <Box sx={{ bgcolor: 'white', height: 'fit-content', borderRadius: '0.7rem' }} >
        <Box sx={{  height: "1rem" }} />
        <Stack direction={lg ? "column": "row"} sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center"
                        }} >
               
                    <img src={image} />
                    <Typography gutterBottom variant="h4" component="div" textAlign="center">
                      {title}
                    </Typography>
                
              </Stack>
                <Divider/>
        <FormikForm/>
        </Box>
        
    </Container>
  );
}

export default Contenedor2