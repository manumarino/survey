
import { useFormikContext } from "formik";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import { DebQuestionCard } from "../styledComponents/DebQuestionCard";

function DebCheckboxQuestion({ name, title, options, obligatory, description, columns = 1 }) {
    const { values, setFieldValue } = useFormikContext();
  
    const handleChange = (event) => {
      const { checked, value } = event.target;
      let newValues = [...values[name]];
      if (checked) {
        newValues.push(value);
      } else {
        newValues = newValues.filter((val) => val !== value);
      }
      setFieldValue(name, newValues);
    };
  
    const columnSize = 12 / columns;
  
    return (
        <DebQuestionCard>
            <CardContent>
                <FormControl
                    component="fieldset"
                    fullWidth
                >
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <Typography variant="h5" sx={{marginBottom: "1rem"}}>
                    {title}
                    {obligatory && (
                        <Tooltip
                        title={<Typography>Pregunta Requerida</Typography>}
                        placement="top"
                        arrow>
                        <span style={{ color: "red" }}>&nbsp;*</span>
                        </Tooltip>
                    )}
                    </Typography>
                    <Typography>{description}</Typography>
                    </Grid>
                    {options.map((option, index) => (
                        <Grid item xs={12} sm={columnSize} key={index}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values[name].includes(option.value)}
                                onChange={handleChange}
                                value={option.value}
                            />
                            }
                            label={option.label}
                        />
                        </Grid>
                    ))}
                    </Grid>
                </FormControl>
            </CardContent>
      </DebQuestionCard>
    );
  };


export default DebCheckboxQuestion;


