import * as Yup from "yup";

export const debSurveyValidationSchema = Yup.object({
  question1: Yup.string().required("Nombre es requerido"),
  question2: Yup.string(),
  question3: Yup.string().required("Contraseña es requerido"),
});