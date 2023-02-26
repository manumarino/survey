import React, {useState} from "react";
import { useFormikContext } from "formik";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  CardContent,
  Typography,
  Tooltip,
  Chip,
} from "@mui/material";
import { DebQuestionCard } from "../styledComponents/DebQuestionCard";
import { Box } from "@mui/system";

function DebSelectQuestion({ name, title, options, obligatory, description }) {
    const { values, setFieldValue } = useFormikContext();
    const selectedValues = values[name] || [];
  
    const handleChange = (event) => {
      const { value } = event.target;
      setFieldValue(name, value);
    };


  
    return (
        <DebQuestionCard>
            <CardContent>
                <FormControl variant="outlined" style={{ width: "100%" }}>
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
                    <Select
                    multiple
                    value={selectedValues}
                    onChange={handleChange}
                    label={title}          
                    input={<OutlinedInput/>}
                    inputProps={{ name: name }}
                    renderValue={(selected) => (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                        <Chip sx={{fontSize: "0.9rem", fontFamily: "Montserrat"}} key={value} label={options.find(item => item.value === value).label} variant="filled" />
                    ))}
                    </Box>
                    )}
                    >
                    {options.map(({ label, value }) => (
                        <MenuItem key={value} value={value} >
                        <Checkbox checked={selectedValues.indexOf(value) > -1} />
                        <ListItemText primary={label} />
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </CardContent>
      </DebQuestionCard>
    );
  };

export default DebSelectQuestion
