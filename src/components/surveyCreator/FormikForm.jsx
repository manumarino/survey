import { Box, Button, Card, CardContent, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Formik, Form, Field } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import DebLinearScaleQuestion from '../DebLinearScaleQuestion';
import DebCheckboxQuestion from './DebCheckboxQuestion';
import DebEmojiQuestion from './DebEmojiQuestion';
import DebMatrixQuestion from './DebMatrixQuestion';
import DebSelectQuestion from './DebSelectQuestion';
import DebSurveyLongQuestion from './DebSurveyLongQuestion';
import DebSurveyShortQuestion from './DebSurveyShortQuestion';
import { debSurveyValidationSchema } from './debSurveyValidationSchema';

function FormikForm() {
  return (
    <Formik initialValues={{
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: [],
        question6: [],
        question7: [],
        question8: [],
    }}
    onSubmit={(val) => console.log(val)}
    
    >
        {({ values, handleSubmit, setFieldValue }) => (
        <Form>
            <Stack spacing={2} sx={{display:"flex", alignItems: "center"}} >
            <DebEmojiQuestion
                name="question7"
                title="Califique su experiencia de atención:"
                dissatisfied={"Insatisfecho"}
                neutral={"Neutral"}
                satisfied={"Satisfecho"}
                obligatory
            />
            <DebMatrixQuestion
                name="question8"
                title="Matrix Question"
                options={[
                    { value: 'option1', row: 'Pregunta 1', column: 'Opción 1' },
                    { value: 'option2', row: 'Pregunta 1', column: 'Opción 2' },
                    { value: 'option3', row: 'Pregunta 1', column: 'Opción 3' },
                    { value: 'option4', row: 'Pregunta 2', column: 'Opción 1' },
                    { value: 'option5', row: 'Pregunta 2', column: 'Opción 2' },
                    { value: 'option6', row: 'Pregunta 2', column: 'Opción 3' },
                    { value: 'option7', row: 'Pregunta 3', column: 'Opción 1' },
                    { value: 'option8', row: 'Pregunta 3', column: 'Opción 2' },
                    { value: 'option9', row: 'Pregunta 3', column: 'Opción 3' },
                ]}
              columns={['Opción 1', 'Opción 2', 'Opción 3']}
              rows={['Pregunta 1', 'Pregunta 2', 'Pregunta 3']}
              multiple={true}
          />
            <DebSurveyShortQuestion
                text="Nombre"
                description="Ingrese su nombre"
                name="question1"
                obligatory
            />
            <DebSurveyLongQuestion
                text="Algo mas chabon?"
                description="Explique brevemente por qué la carita de culo"
                name="question2"
                obligatory
            />
            <DebLinearScaleQuestion
              name="question3"
              title={"Califique el nivel de atención:"}
              description={"Tenga en cuenta todo el servicio recibido en general. Marque del 1 al 10 siendo 1 \"muy malo\" y 10 \"muy bueno\"."}
              startText={"Muy mala"}
              endText={"Muy buena"}
              startValue={1}
              endValue={10}
              obligatory
              />
              
              <DebSelectQuestion
                title={"Indique qué productos posee en nuestra empresa:"}
                name="question6"
                options ={ [
                    { value: 'tajeta', label: 'Tarjeta' },
                    { value: 'plazofijo', label: 'Plazo Fijo' },
                    { value: 'prestamo', label: 'Prestamo' },
                    { value: '1', label: '1' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                    { value: '4', label: '4' },
                    { value: '5', label: '5' },
                    { value: '6', label: '6' },
                ]}
                obligatory
              />            
              <DebCheckboxQuestion
                title={"Indique qué productos posee en nuestra empresa:"}
                name="question5"
                options ={ [
                    { value: 'tajeta', label: 'Tarjeta' },
                    { value: 'plazofijo', label: 'Plazo Fijo' },
                    { value: 'prestamo', label: 'Prestamo' },
                    { value: '1', label: '1' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                    { value: '4', label: '4' },
                    { value: '5', label: '5' },
                    { value: '6', label: '6' },
                ]}
                columns={4}
              />
              <DebLinearScaleQuestion
                name="question4"
                title={"Califique la rapidez de respuesta:"}
                startValue={1}
                endValue={5}
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
        ) }
    </Formik>
  )
}

export default FormikForm
