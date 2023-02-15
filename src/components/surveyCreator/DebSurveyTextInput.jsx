import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  ListItemText,
  FormHelperText,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import React, { useEffect } from "react";

function DebSurveyTextInput(label, placeholder, ...props) {
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

export default DebSurveyTextInput