import {
  Card,
  CardContent,
  Typography,
  Button,
  Tooltip,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useField } from "formik";
import React, { useState } from "react";

export default function DebLinearScaleQuestion({title, description, obligatory, startText, endText, startValue, endValue, ...props }) {
  const [selected, setSelected] = useState();
  const [field, meta, helpers] = useField(props);

  const generateButtons = (start, end) => {
    if(!start || !end) return null;
    const buttons = [];
    for (let i = start; i <= end; i++) {
      buttons.push(
        <Button
          onClick={()=> handleClick(i)}
          key={i}
          variant={i === selected? "contained": "outlined"}
          sx={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            fontSize: "3rem",
            minWidth: "0",
            minHeight: "0",
          }}>
          {i}
        </Button>
      );
    }
    return buttons;
  };

  const handleClick = (val) => {
    setSelected(val);
    helpers.setValue(val)
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}{obligatory && 
        <Tooltip title={<Typography>Pregunta Requerida</Typography>} placement="top" arrow>
          <span style={{color: "red"}}>&nbsp;*</span>
        </Tooltip>
        
        }</Typography>
        <Typography>{description}</Typography>
        <Box mt="1rem">
          {(startText || endText) && 
          <Stack direction={"row"} justifyContent={"space-between"} spacing={2}>
            <Typography>{startText}</Typography>
            <Typography>{endText}</Typography>
          </Stack>}
          <Stack
            mt="0.5rem"
            direction={"row"}
            justifyContent={"space-between"}
            spacing={1}>
            {generateButtons(startValue, endValue)}
          </Stack>
        </Box>
        
      </CardContent>
    </Card>
  );
}
