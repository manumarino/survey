import React , {useState} from 'react';
import { useField } from 'formik';
import { useFormikContext } from "formik";
import { FormControl, FormLabel, FormControlLabel, Checkbox, RadioGroup, Radio, Grid, CardContent, Typography, Tooltip } from '@mui/material';
import { DebQuestionCard } from '../styledComponents/DebQuestionCard';

function DebMatrixQuestion({ title, obligatory, description, options, columns, rows, multiple = true, ...props }) {
    
    const [field] = useField({
        ...props,
        defaultValue: multiple ? [] : '',
      });      
      
    const { values, setFieldValue } = useFormikContext();
    const [selectedOptions, setSelectedOptions] = useState(multiple ? field.value || [] : field.value || '');
    

const handleChange = (e) => {
  const { name, value } = e.target;

  if (multiple) {
    setSelectedOptions({
      ...selectedOptions,
      [name]: e.target.checked
        ? [...(selectedOptions[name] || []), value]
        : selectedOptions[name].filter((val) => val !== value),
    });

    // Update form field value
    setFieldValue(field.name, {
      ...field.value,
      [name]: e.target.checked
        ? [...(field.value[name] || []), value]
        : field.value[name].filter((val) => val !== value),
    });
  } else {
    const selectedOption = field.value?.[name] === value ? null : value;
    setSelectedOptions({ [name]: selectedOption });

    // Update form field value
    setFieldValue(field.name, { ...field.value, [name]: selectedOption });
  }
};
          

      const isChecked = (value, row) => {
        if (multiple) {
          return field.value && field.value[row] && field.value[row].includes(value);
        } else {
          const selectedOption = field.value && field.value[`${row}`];
          return selectedOption === value;
        }
      };
      
    

  const InputComponent = multiple ? Checkbox : Radio;

  return (
    <DebQuestionCard>
        <CardContent>
            <FormControl component="fieldset">
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
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={2}>
                    <FormLabel component="legend"> </FormLabel>
                    </Grid>
                    {columns.map((column) => (
                    <Grid key={column} item xs>
                        <Typography textAlign="center">{column}</Typography>
                    </Grid>
                    ))}
                </Grid>
                </Grid>
                {rows.map((row) => (
                <Grid key={row} item xs={12}>
                    <Grid container alignItems="center">
                    <Grid item xs={2}>
                        <Typography textAlign="center">{row}</Typography>
                    </Grid>
                    {columns.map((column) => {
                        const option = options.find((option) => option.column === column && option.row === row);
                        return (
                        <Grid key={option.value} item xs textAlign="center">
                            <FormControlLabel
                                value={option.value}
                                control={
                                    <InputComponent
                                        checked={isChecked(option.value, row)}
                                        onChange={handleChange}
                                        name={`${row}`}
                                        value={option.value}
                                        />
                                }
                                label={option.label}
                                />
                        </Grid>
                        );
                    })}
                    </Grid>
                </Grid>
                ))}
            </Grid>
            </FormControl>
        </CardContent>
    </DebQuestionCard>
  );
};



export default DebMatrixQuestion;
