import React, { useState, useCallback } from 'react';
import SurveyTypeOne from '../surveyTypes/surveyTypeOne.js'

function SurveyOne() {
    const [showPage, setShowPage] = useState(true);
    const onCompletePage = useCallback((data) => {
        console.log(data);
        setShowPage(!showPage)
    }, [])
    const setFinalPage = () => {
        return (
            <main>
                <h1>Gracias por completar sus datos</h1>
            </main>
        )
     };
  return (
    <>
        {
        showPage?
        <SurveyTypeOne  showCompletedPage={data => onCompletePage(data)} />:
        setFinalPage()
    }
    </>
    
    
  )
}

export default SurveyOne
