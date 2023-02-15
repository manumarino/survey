import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../../img/deblogo.png";
import { padding } from "@mui/system";
import DebTextInput from "./DebTextInput";
import { Box, Container, Stack, useMediaQuery, useTheme } from "@mui/material";
import DebLinearScaleQuestion from "../DebLinearScaleQuestion";
import { Form, Formik } from "formik";

function Contenedor() {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Container maxWidth="lg" disableGutters={sm}>
      <Formik initialValues={{
        question1: "",
        question2: ""
      }}
      onSubmit={(val) => console.log(val)}
      >
        <Form>
          <Stack spacing={2}>
            <Card>
                <Stack direction={lg ? "column": "row"}>
                <CardMedia
                  sx={{ margin: "auto", maxWidth:"320px", flex: "1"}}
                  image={image}
                  component="img"
                  title="Debmedia"
                />
                <CardContent sx={{display: "flex", alignItems: "center", justifyContent:"center", flex: "1"}}>
                  <Typography
                    variant="h4"
                    >
                    Encuesta de evaluación de servicio
                  </Typography>
                </CardContent>

                </Stack>

            </Card>
            <DebLinearScaleQuestion
              name="question1"
              title={"Califique el nivel de atención:"}
              description={"Tenga en cuenta todo el servicio recibido en general. Marque del 1 al 10 siendo 1 \"muy malo\" y 10 \"muy bueno\"."}
              startText={"Muy mala"}
              endText={"Muy buena"}
              startValue={1}
              endValue={10}
              obligatory
              />
            <DebLinearScaleQuestion
              name="question2"
              title={"Califique la rapidez de respuesta:"}
              startValue={1}
              endValue={5}
              />
            <Card>
              <CardContent>
                <Button type="submit" variant="contained">Submit</Button>
              </CardContent>
            </Card>
          </Stack>
        </Form>
      </Formik>
    </Container>
  );
}

export default Contenedor;
