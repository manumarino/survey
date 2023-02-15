import { Box, Button, Card, CardContent } from '@mui/material';
import { Formik, Form, Field } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import DebSurveyTextInput from './DebSurveyTextInput';


function FormikForm() {

    const formikProps = {
        initialValues: { firstname: "", color: "", lastname: "" },
        validationSchema: Yup.object({
            firstname: Yup.string().required("sory pero no"),
            lastname: Yup.string().required("sory pero no"),
        }),
        onSubmit: values => {
            console.log(values)
        }
        
    }
  

    const TextInputCustomField = ({
        field,
        form: { touched, errors },
        ...props
    }) => (
        <>
        <Card variant="outlined">
            <CardContent>
            <label htmlFor={field.name} variant="h3">{props.labelName}</label>
            <input 
            type="text"
            className="form-control"
            placeholder={props.placeholder}
            {...field}
            />
            {errors[field.name] && touched[field.name] ?
            <span>(errors[field.name])</span>
            :null
        }
            </CardContent>
        </Card>
        </>
    )

  return (
    <Formik {...formikProps} >
       { formik => (
        <Form>
            <DebSurveyTextInput
                label="Ingrese su nombre"
                placeholder="Nombre"
                name="firstname"
            />
            <Field
                name="lastname"
                component={TextInputCustomField}
                placeholder="Apellido"
                labelName="Ingresa tu apellido"
            />
            <Field
                name="color"
                component={TextInputCustomField}
                placeholder="Color"
                labelName="Ingresa el color"
            />
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "2rem"}}>
                <Button            
                variant="contained"
                type="submit"
                color="inherit">
                Enviar encuesta              
                </Button>
            </Box>          
                
        </Form>
       )}
    </Formik>
  )
}

export default FormikForm
