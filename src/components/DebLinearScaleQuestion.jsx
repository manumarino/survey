import React, { useState } from "react";
import { CardContent, Typography, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useField } from "formik";
import { CircularButton } from "./styledComponents/CircularButton";
import { DebQuestionCard } from "./styledComponents/DebQuestionCard";

export default function DebLinearScaleQuestion({
  title,
  description,
  obligatory,
  startText,
  endText,
  startValue,
  endValue,
  ...props
}) {
  const [selected, setSelected] = useState();
  const [field, meta, helpers] = useField(props);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const generateButtons = (start, end) => {
    if (!start || !end) return null;
    const num = end - start;
    const dir = num > 0 ? 1 : -1;
    const buttons = [];
    for (let i = 0; i <= Math.abs(num); i++) {
      const buttonNumber = start + i * dir;
      buttons.push(
        <CircularButton
          onClick={() => handleClick(buttonNumber)}
          key={buttonNumber}
          variant={buttonNumber === selected ? "contained" : "outlined"}
          sx={{ fontSize: sm ? "1rem": "2rem" }}>
          {buttonNumber}
        </CircularButton>
      );
    }
    return buttons;
  };

  const handleClick = (val) => {
    setSelected(val);
    helpers.setValue(val);
  };
  return (
    <DebQuestionCard>
      <CardContent>
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
        <Box mt="1rem">          
          <Stack
            margin={"0 2rem 0 2rem"}
            direction={"row"}
            justifyContent={"space-between"}
            spacing={sm ? 0.5 : 1}>
            {generateButtons(startValue, endValue)}
          </Stack>
          {(startText || endText) && (
            <Stack
              margin={"0.5rem 1.5rem 0 1.5rem"}
              direction={"row"}
              justifyContent={"space-between"}
              spacing={2}>
              <Typography>{startText}</Typography>
              <Typography>{endText}</Typography>
            </Stack>
          )}
        </Box>
      </CardContent>
    </DebQuestionCard>
  );
}
