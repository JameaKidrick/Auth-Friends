import React, { useState } from 'react';
import { questions } from './QuestionList';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  textField: {
    // marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    border:'2px solid black'
  },
  nested: {
    paddingLeft: theme.spacing(4),
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
  const [open, setOpen] = useState(true);

  const handleClick = (index) => {
    setOpen({[index]:!open});
  };

  return(
    <form>
      <div>
        questionnaire:
        <br />
        <List className={classes.root}>
          {questions.map((item, index) => {
            return(
              <div key={index} className={classes.listItems}>
                <ListItem className={classes.questions} button onClick={()=>handleClick(index)}>
                  {`${index+1}. ${item}`}
                  {!open[index] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={!open[index]} timeout="auto" unmountOnExit>
                  <ListItem style={{margin:'0'}}>
                    <TextField
                      name={`question${index}`}
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      // value={user.question[index]}
                      multiline
                      rowsMax="4"
                      variant="outlined"
                    />
                  </ListItem>
                </Collapse>
                <Divider />
              </div>
            )
          })}
        </List>
      </div>
    </form>
  )

}

export default Questionnaire;