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
  Tooltip,
  Typography,
  CardContent,
  Card,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import React, { useEffect } from "react";
import '../../App.css'

export default function DebSurveyLongQuestion({text, description, obligatory, ...props}) {
  const [field, meta, helpers] = useField(props);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  

return (
  <Card sx={{width: "70vw", backgroundColor: "#dedede", margin: "1rem 0 !important"}}>
    <CardContent>
      <Typography variant="h5" sx={{marginBottom: "1rem"}} >
        {text}
        {obligatory && (
          <Tooltip
            title={<Typography>Pregunta Requerida</Typography>}
            placement="top"
            arrow>
            <span style={{ color: "red" }}>&nbsp;*</span>
          </Tooltip>
        )}
      </Typography>
      <Typography  sx={{marginBottom: "0.5rem"}}>{description}</Typography>
      <TextField
        id={`deb-survey-long-question-${props.text}`}
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        {...field}
        {...props}
        inputProps= {{maxLength:65554}}
        
      />
    </CardContent>
  </Card>
);
}
