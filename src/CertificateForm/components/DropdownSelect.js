import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  selectRoot: {
    height: '40px',
  },
  select: {
    height: '40px',
    width: '30px',
    lineHeight: '40px',
    paddingTop: 0,
    paddingBottom: 0
  },
  formElement: {
    marginRight: '10px'
  }
};

const TextInputCmp = ({ label, classes, value, onChange, items }) => {
  return (
    <Grid item className={classes.formElement}>
      <TextField
        variant="outlined"
        select
        SelectProps={{
          classes: {
            root: classes.selectRoot,
            select: classes.select
          }
        }}
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        {items && items.map(item => (
          <MenuItem key={item} value={item}>{item}</MenuItem>
        ))}
      </TextField>
    </Grid>
  );
}

export default withStyles(styles)(TextInputCmp);
