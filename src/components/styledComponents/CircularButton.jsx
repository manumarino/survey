import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CircularButton = styled(Button)(({ theme }) => ({
  width: "2em",
  height: "2em",
  borderRadius: "50%",
  minWidth: "unset",
  minHeight: "unset",
  maxWidth: "unset",
  maxHeight: "unset",
  padding:0,
}));