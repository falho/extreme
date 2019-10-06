import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
  input: {
    height: 40
  },
  main: {
    marginRight: '10px',
  },
  title: {
    marginBottom: '5px',
    marginTop: '5px'
  }
};

const TextInputCmp = ({
  label,
  value,
  type,
  onChange,
  classes,
  isValid
}) => {
  return (
    <Grid item className={classes.main}>
      { label && <Grid className={classes.title}>{label}</Grid> }
      <TextField
        error={!isValid}
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
