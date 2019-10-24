import React from 'react';
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

  return(
    <div>
      questionnaire:
      <br />
        <div className={classes.root}>
          {questions.map((item, index) => {
            return(
              <ExpansionPanel key={index}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <ListItem>
                    {`${index+1}. ${item}`}
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                  </ListItem>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TextField
                    name={`question${index}`}
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    // value={user.question[index]}
                    multiline
                    variant="outlined"
                  />
                </ExpansionPanelDetails>
                <Divider />
              </ExpansionPanel>
            )})}
        </div>
    </div>
  )
}

export default Questionnaire;