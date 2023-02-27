import { Box, Button, Card, CardContent, Stack, StepIcon, useMediaQuery, useTheme } from '@mui/material';
import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react';
import * as Yup from 'yup';
import DebLinearScaleQuestion from '../DebLinearScaleQuestion';
import DebCheckboxQuestion from './DebCheckboxQuestion';
import DebEmojiQuestion from './DebEmojiQuestion';
import DebMatrixQuestion from './DebMatrixQuestion';
import DebSelectQuestion from './DebSelectQuestion';
import DebSurveyLongQuestion from './DebSurveyLongQuestion';
import DebSurveyShortQuestion from './DebSurveyShortQuestion';
import { debSurveyValidationSchema } from './debSurveyValidationSchema';
import { CircularProgress, Grid, Step, StepLabel, Stepper } from '@mui/material';



const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

function FormikForm() {
  return (
    <FormikStepper initialValues={{
        question1: [],
        question2: "",
        question3: "",
        question4: [],
        question5: [],
        question6: [],
        question7: "",
        question8: "",
    }}
    onSubmit={async (values) => {
        await sleep(3000);
        console.log('values', values);
      }}
    
    >
        
        <FormikStep label="Experiencia de usuario">
            <Stack spacing={2} sx={{display:"flex", alignItems: "center"}} >
                <DebEmojiQuestion
                    name="question1"
                    title="Califique su experiencia de atención:"
                    dissatisfied={"Insatisfecho"}
                    neutral={"Neutral"}
                    satisfied={"Satisfecho"}
                    obligatory
                />
                <DebLinearScaleQuestion
                    name="question2"
                    title={"Califique el nivel de atención:"}
                    description={"Tenga en cuenta todo el servicio recibido en general. Marque del 1 al 10 siendo 1 \"muy malo\" y 10 \"muy bueno\"."}
                    startText={"Muy mala"}
                    endText={"Muy buena"}
                    startValue={1}
                    endValue={10}
                    obligatory
                />          
                <DebLinearScaleQuestion
                    name="question3"
                    title={"Califique la rapidez de respuesta:"}
                    startValue={1}
                    endValue={5}
                /> 
            </Stack>
        </FormikStep>
        <FormikStep label="Productos">
            <Stack spacing={2} sx={{display:"flex", alignItems: "center"}} >
                <DebMatrixQuestion
                    name="question4"
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
                <DebSelectQuestion
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
                    obligatory
                />            
                <DebCheckboxQuestion
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
                    columns={4}
                />
            </Stack>
        </FormikStep>
        <FormikStep label="Datos de usuario">
            <Stack spacing={2} sx={{display:"flex", alignItems: "center"}} >
                <DebSurveyShortQuestion
                    text="Nombre"
                    description="Ingrese su nombre"
                    name="question7"
                    obligatory
                />
                <DebSurveyLongQuestion
                    text="Algo mas chabon?"
                    description="Explique brevemente por qué la carita de culo"
                    name="question8"
                    obligatory
                />
            </Stack>
        </FormikStep>
    </FormikStepper>
  )
}

export default FormikForm;


export function FormikStep({ children, validationSchema, label }) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stepper alternativeLabel={false} activeStep={step} sx={{ margin: "3rem 9rem 2rem 9rem"}} >
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed} >
                <StepLabel StepIconProps={{ style: { fontSize: "3rem", margin: "0 1rem 0 1rem" } }} ></StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={4} sx={{ padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center" }} >
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                  sx={{minWidth: "7rem", fontFamily: "Montserrat"}}
                >
                  Atrás
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
                sx={{minWidth: "7rem", fontFamily: "Montserrat"}}
              >
                {isSubmitting ? 'Enviando...' : isLastStep() ? 'Enviar' : 'Siguiente'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

function CustomStepIcon(props) {
    return (
        <StepIcon
        {...props}
        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 'calc(50% - 1px)',
            height: '100%',
            borderLeft: '1px solid #ccc',
          }}
        />
      </StepIcon>
    );
  }
