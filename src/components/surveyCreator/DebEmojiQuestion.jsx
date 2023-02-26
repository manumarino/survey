import { useState } from 'react';
import { CardContent, FormControl, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { useField } from 'formik';
import { DebQuestionCard } from '../styledComponents/DebQuestionCard';

function DebEmojiQuestion ({ title, obligatory, description, dissatisfied, neutral, satisfied, ...props }) {
  const [selected, setSelected] = useState('');
  const [field, meta, helpers] = useField(props);

  const handleSelect = (value) => {
    setSelected(value);
    helpers.setValue([value]);
  };

  return (
    <DebQuestionCard>
        <CardContent>
            <FormControl fullWidth sx={{ mb: 2 }}>
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
                <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"space-evenly"} >                    
                    <IconButton
                        color={selected === 'dissatisfied' ? 'primary' : 'default'}
                        onClick={() => handleSelect('dissatisfied')}
                        >       
                            <Stack 
                            direction={"column"}
                            alignItems={"center"}
                            >                   
                                <svg width="5rem" viewBox="0 0 24 24" className="SentimentVeryDissatisfiedIcon"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"></path></svg>
                                <Typography variant="h6" sx={{marginTop: "1rem"}}>{dissatisfied}</Typography>
                            </Stack>
                    </IconButton>                    
                    <IconButton
                    color={selected === 'neutral' ? 'primary' : 'default'}
                    onClick={() => handleSelect('neutral')}
                    >
                        <Stack 
                        direction={"column"}
                        alignItems={"center"}
                        >
                            <svg width="5rem" viewBox="0 0 24 24" className="SentimentNeutralIcon"><path d="M9 15.5h6v1H9v-1z"></path><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                            <Typography variant="h6" sx={{marginTop: "1rem"}}>{neutral}</Typography>
                        </Stack>                    
                    </IconButton>
                    <IconButton
                    color={selected === 'satisfied' ? 'primary' : 'default'}
                    onClick={() => handleSelect('satisfied')}
                    >
                        <Stack 
                        direction={"column"}
                        alignItems={"center"}
                        >
                            <svg width="5rem" viewBox="0 0 24 24" className="SentimentVerySatisfiedIcon"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"></path></svg>
                            <Typography variant="h6" sx={{marginTop: "1rem"}}>{satisfied}</Typography>
                        </Stack>                    
                    </IconButton>
                </Stack>            
            </FormControl>
        </CardContent>
    </DebQuestionCard>
  );
};

export default DebEmojiQuestion;

