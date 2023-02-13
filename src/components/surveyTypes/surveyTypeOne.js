import React from "react";
import { Model } from "survey-core";
import * as Survey from "survey-react";
import "survey-core/defaultV2.min.css";
import "../../index.css";
import { json } from "../surveys/questionOne.js";
import { jsonHeader } from "../surveys/headerOne";

function surveyTypeOne(prop) {
  return (
    <Survey.Survey
    showCompletedPage={false}
    onComplete={data => prop.showCompletedPage(data.valuesHash)}
    json={json}
    title={"Debmedia"}
    description={"Ingrese sus datos"}
    />
      
   
  )
}

export default surveyTypeOne
