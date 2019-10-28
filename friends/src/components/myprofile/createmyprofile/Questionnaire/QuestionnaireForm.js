import React, { useState } from 'react';
import { questions } from './QuestionList';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(2),
    width:'80%'
  },
  dense: {
    // marginTop: theme.spacing(2),
  },
  root: {
    width: '100%',
  },
  listItems: {
    display:'flex',
    flexDirection:'column',
    justifyContent: 'flex-start'
  },
  questions: {
    display:'flex',

  }
}));

const Questionnaire = () => {
  const classes = useStyles();
  const [question, setQuestion] = useState({question: ''})
  const [questionnaire, setQuestionnaire] = useState({questionnaire:[{question: ''}]})

  // STEP 1: ADD ALL QUESTIONS TO ARRAY
  // STEP 2: ADD ALL ANSWERS (WHETHER FILLED OR NOT) TO ARRAY
  // STEP 3: MATCH ACCORDINGLY TO MAKE ARRAY OF OBJECTS

  // const handleChange = e => {
  //   // setQuestionnaire({...questionnaire, question: '', answer: `${e.target.value}`})
  // }

  const handleSubmit = (e) => { 
    e.preventDefault()
    questions.map((element, index) => {
      setQuestionnaire({questionnaire:[{question: `${element[index]}`}]})
      console.log(questionnaire)
    })
  }

  // console.log(questionnaire, arr)

  // const questionNumber = (index) => {
  //   setQuestion(questions[index])
  // }

  return(
    <div>
      questionnaire:
      <br />
        <form onSubmit={handleSubmit} className={classes.root}>
          {questions.map((item, index) => {
            return(
              <ExpansionPanel key={index}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <ListItem>
                    {`${index+1}. ${item}`}
                  </ListItem>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TextField
                    name={`question${index}`}
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    multiline
                    variant="outlined"
                    // onChange={handleChange}
                  />
                </ExpansionPanelDetails>
                <Divider />
              </ExpansionPanel>
            )})}
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Questionnaire;