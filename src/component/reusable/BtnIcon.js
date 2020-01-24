import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BtnIcon(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton color={props.color} aria-label="add to shopping cart">
        <Icon className={props.class} ></Icon>
      </IconButton>
    </div>
  );
}
