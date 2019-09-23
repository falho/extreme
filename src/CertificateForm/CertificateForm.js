import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';


import TextInput from './components/TextInput';
import DropdownSelect from './components/DropdownSelect';

const styles = {
  formItem: {
    margin: '10px 0px 10px 0px'
  },
  formItemLabel: {
    marginBottom: '5px'
  }
};

const Title = (props) => {
  return <Grid>Title</Grid>
}

const CertificateForm = ({ classes }) => {
  return (
    <Grid>
      <Title />
      <Grid className={classes.formItem}>
        <TextInput label="Telepitest igenylo neve" />
      </Grid>

      <Grid container className={classes.formItem} direction="row">
        <Grid container item>
          <Grid item className={classes.formItemLabel}>
            Telepitest igenylo telefonszama
          </Grid>
          <Grid item container alignItems="center">
            <DropdownSelect />
            <TextInput />
          </Grid>
        </Grid>
        <TextInput label="Telepitest igenylo email cime" />
      </Grid>

      <Grid container direction="row" className={classes.formItem}>
        <TextInput label="Iranyitoszam" />
        <TextInput label="Varos" />
      </Grid>

      <Grid>
        <TextInput label="Telepites helye (utca, hazszam, emelet, ajto)" />
      </Grid>

    </Grid>);
}

export default withStyles(styles)(CertificateForm);
