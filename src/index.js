import './styles.css';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
};

function HigherOrderComponent(props) {
  const { classes } = props;
  return <Button className={classes.root}>Higher-order component</Button>;
}

const Title = (props) => {
  return <Grid>Title</Grid>
}

const TextInputCmp = ({ label }) => {
  return (
    <Grid>
      <Grid>{label}</Grid>
      <TextField
        id="outlined-bare"
        margin="dense"
        variant="outlined"
      />
    </Grid>
  );
}

const CertificateForm = ({ classes }) => {
  return (
    <Grid>
      <Title />
      <TextInputCmp label="Laci"/>
    </Grid>);
}

HigherOrderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CertificateForm);
