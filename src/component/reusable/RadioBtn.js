import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RadioBtn() {
  const classes = useStyles();
  const [value, setValue] = React.useState('2GB');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Variant RAM</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="2GB" control={<Radio />} label="2GB" />
          <FormControlLabel value="4GB" control={<Radio />} label="4GB" />
          <FormControlLabel value="8GB" control={<Radio />} label="8GB" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="32GB (kosong)"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
