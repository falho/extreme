import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
  input: {
    height: 40,
    width: '100%'
  },
  main: {
    marginRight: '10px'
  },
  title: {
    marginBottom: '5px'
  }
};

const TextInputCmp = ({ label, value, type, onChange, classes }) => {
  return (
    <Grid item className={classes.main}>
      { label && <Grid className={classes.title}>{label}</Grid> }
      <TextField
        variant="outlined"
        InputProps={{
          className: classes.input
        }}
        fullWidth
        value={value}
        type={type}
        onChange={(event) => onChange(event.target.value)}
      />
    </Grid>
  );
}

export default withStyles(styles)(TextInputCmp);
