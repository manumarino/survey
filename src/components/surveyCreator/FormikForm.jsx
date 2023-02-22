import { Box, Button, Card, CardContent, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Formik, Form, Field } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import DebSurveyLongQuestion from './DebSurveyLongQuestion';
import DebSurveyShortQuestion from './DebSurveyShortQuestion';
import { debSurveyValidationSchema } from './debSurveyValidationSchema';


function FormikForm() {
    

  return (
    <Formik initialValues={{
        question1: "",
        question2: "",
        question3: "",
        question4: ""
    }}
    onSubmit={(val) => console.log(val)}
    
    >
        <Form>
            <Stack spacing={2} sx={{display:"flex", alignItems: "center"}} >
            <DebSurveyShortQuestion
                text="Nombre"
                description="Ingrese su nombre"
                name="question2"
                obligatory
            />
            <DebSurveyLongQuestion
                text="Razón de la insatisfacción"
                description="Explique brevemente lo sucedido durante su atención"
                name="question3"
            />
            <DebSurveyLongQuestion
                text="Algo mas chabon?"
                description="Explique brevemente por qué la carita de culo"
                name="question1"
                obligatory
            />            
            <DebSurveyShortQuestion
                text="Apellido"
                description="Ingrese su apellido"
                name="question4"
                obligatory
            />
            
            <Box>
            <Button                 
                sx={{ margin: "1rem 1rem 2rem 1rem"}}
                variant="contained"
                type="submit">
                Enviar encuesta              
            </Button>
            </Box>
            
            </Stack>         
        </Form>
       
    </Formik>
  )
}

export default FormikForm
