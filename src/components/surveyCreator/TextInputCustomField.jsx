import { Box, Button, Card, CardContent, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik'
import React from 'react'
import * as Yup from 'yup';

function TextInputCustomField(label, placeholder, ...props) {
    const [field, meta] = useField(props);

  return (
    <TextField
        id={`deb-form-text-input-${props.name}`}
        variant="outlined"
        label={label}
        placheholder={placeholder}
        {...field}
        {...props}
 />
  )
}

export default TextInputCustomField


