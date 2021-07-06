import React, { useState } from 'react';

import { LanguageList } from './LanguageList'

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const FaveLanguage = () => {
  const [state, setState] = useState(
    true
  );
  const [fave, setFave] = useState([])

  const handleChange = name => e => {
    setState({ ...state, [name]: e.target.checked });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(fave)

    for(let key in state){
      if(state[key]){
        console.log(key)
        setFave({...fave, key})
        console.log(fave)
      }
    }
  }
  
  return(
    <form onSubmit={handleSubmit}>
      {LanguageList.map((item, index) => {
        return(
          <FormControlLabel
            key={index}
            control={
              <Checkbox 
                name={item}
                value='language'
                icon={<FavoriteBorder />} 
                checkedIcon={<Favorite />} 
                onChange={handleChange(`${item}`)}
                checked={state.item}
              />
            }
            label={item}
          />
        )
      })}
      <button>Submit</button>
    </form>
  )

}

export default FaveLanguage;