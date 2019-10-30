import React, { useState, useEffect } from 'react';
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
  const [question, setQuestion] = useState({question: ''});
  const [questionnaire, setQuestionnaire] = useState([{id: 0, question: ``, answer: ``}]);
  const [answers, setAnswers] = useState('');

  // STEP 1: ADD ALL QUESTIONS TO ARRAY
  // STEP 2: ADD ALL ANSWERS (WHETHER FILLED OR NOT) TO ARRAY
  // STEP 3: MATCH ACCORDINGLY TO MAKE ARRAY OF OBJECTS

  // const handleChange = e => {
  //   // setQuestionnaire({...questionnaire, question: '', answer: `${e.target.value}`})
  // }

  let arr = [];

  useEffect(() => {
    questions.map((element, index) => {
      let q = {id: index, question: `${element}`, answer: ``}
      arr = [...arr, q]
      setQuestionnaire(arr)
    })
  }, [])

  const handleChange = e => {
    if(e.target.id === questions.id){
      setQuestionnaire([{id: 0, question: ``, answer: `${e.target.value}`}])
    }
    // setAnswers(`${e.target.value}`)
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    setQuestionnaire([{id: questions.id, question: questionnaire, answer: answers}])
    console.log('ANSWERS', answers)
    console.log('QUESTIONNAIRE', questionnaire)
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
                    id={index}
                    name={`answer${index}`}
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    multiline
                    variant="outlined"
                    onChange={handleChange}
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