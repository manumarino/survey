import {
  TextField,
  Tooltip,
  Typography,
  CardContent,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { DebQuestionCard } from "../styledComponents/DebQuestionCard";
import { useField } from "formik";
import React from "react";

export default function DebSurveyShortQuestion({text, description, obligatory, ...props}) {
  const [field, meta, helpers] = useField(props);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

return (
  <DebQuestionCard>
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
        id={`deb-survey-short-question-${props.text}`}
        variant="outlined"
        fullWidth
        multiline
        {...field}
        {...props}
        inputProps= {{maxLength:255}}
      />
    </CardContent>
  </DebQuestionCard>
);
}

